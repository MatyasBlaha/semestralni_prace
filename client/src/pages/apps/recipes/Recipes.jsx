import {useState, useEffect, useCallback, useMemo} from 'react'

import Navbar from "../../../Components/Navbar.jsx";

import {usePageTitle} from "../../../hooks/usePageTitle.jsx";

import RecipeCard from "./Components/RecipeCard.jsx";
import {fetchAvailableRecipes} from "../../../http.js";
import Error from "../../../Components/Error.jsx";
import useDebounce from "../../../hooks/useDebounce.jsx";


const recipesPerPage = 10

export default function Recipes () {
    usePageTitle('appRecipes')
    const [isFetching, setIsFetching] = useState(false)
    const [availableRecipes, setAvailableRecipes] = useState([])
    const [error, setError] = useState();

    const [searchItem, setSearchItem] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const debouncedSearchTerm = useDebounce(searchItem, 700);

    const loadMoreRecipes = useCallback(() => setCurrentPage(prev => prev + 1), []);

    useEffect(() => {
        setIsFetching(true)
        async function fetchRecipes() {
            try{
                const recipes = await fetchAvailableRecipes()
                setAvailableRecipes(recipes)
                setIsFetching(false)
            } catch (err){
                setError({
                    message: err.message || 'Could not fetch recipes, please try again later!',
                    error: true
                });
                setIsFetching(false)
            }
        }

        fetchRecipes();
    }, []);



    const filteredItems = useMemo(() => {
        if(!debouncedSearchTerm) return availableRecipes;
        return availableRecipes.filter(recipe =>
            recipe.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );
    }, [debouncedSearchTerm, availableRecipes]);

    const paginatedRecipes = useMemo(() => {
        return filteredItems.slice(0, recipesPerPage * currentPage)
    }, [filteredItems, currentPage]);



    console.log(filteredItems)
    console.log(paginatedRecipes)

    if(error){
        return <Error title='An error has ocured' message={error.message}></Error>
    }


    return (
        <>
            <Navbar />
            <div className='w-3/4 mx-auto'>
                <div className='flex'>
                    <h2 className='mb-8'>RECIPES APP</h2>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Search...'
                        className='border-2'
                        onChange={(e) => {
                            setSearchItem(e.target.value)
                            setCurrentPage(1)
                        }}
                    />
                </div>
                <div className='flex flex-wrap'>
                    <RecipeCard
                        recipes={paginatedRecipes}
                        isLoading={isFetching}
                        loadingText='Loading recipes...'
                        fallbackText='No recipes available.'
                    />
                </div>
                {paginatedRecipes.length < filteredItems.length && (
                    <button onClick={loadMoreRecipes} className='mt-2 p-2'>
                        Load More
                    </button>
                )}
            </div>
        </>
    )
}