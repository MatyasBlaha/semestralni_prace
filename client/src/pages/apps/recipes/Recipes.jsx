import {useMemo, useState} from 'react'

import Navbar from "../../../Components/Navbar.jsx";
import LinkButton from "../../../Components/UI/LinkButton.jsx";

import {usePageTitle} from "../../../hooks/usePageTitle.jsx";
import useDebounce from "../../../hooks/useDebounce.jsx";
import {getPathByName} from "../../../utils/getPathByName.jsx";

import {RECIPES} from "./data/recipes.js";

import RecipeCard from "./Components/RecipeCard.jsx";


const recipesPerPage = 10

export default function Recipes () {
    usePageTitle('appRecipes')

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 700);

    const loadMoreRecipes = () => setCurrentPage(prev => prev + 1);

    const filteredItems = useMemo(() => {
        return RECIPES.filter((recipe) => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [debouncedSearchTerm]);

    const paginatedRecipes = filteredItems.slice(0, recipesPerPage * currentPage);

    console.log(paginatedRecipes)

    return (
        <>
            <Navbar />
            <div className='w-3/4 mx-auto'>
                <div className='flex'>
                    <h2 className='mb-8'>RECIPES APP</h2>
                    <div>
                        <input
                            type="text"
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder='searh'
                        />
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    {paginatedRecipes.map((recipe) => (
                        <RecipeCard recipe={recipe} key={recipe.id}/>
                    ))}
                </div>
                {paginatedRecipes.length < RECIPES.length && (
                    <button onClick={loadMoreRecipes} className='mt-2 p-2'>
                        Load More
                    </button>
                )}
            </div>
        </>
    )
}