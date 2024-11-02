import { useParams, useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";

import Navbar from "../../../../Components/Navbar.jsx";
import {fetchRecipeById} from "../../../../http.js";

export default function RecipeDetails(){
    const navigate = useNavigate();
    let { recipeId } = useParams()

    const [isFetching, setIsFetching] = useState(false)
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        setIsFetching(true)

        async function fetchRecipe(){
            try{
                const recipe = await fetchRecipeById(recipeId)
                setRecipe(recipe)
                setIsFetching(false)
            }catch (err){

            }
        }

        fetchRecipe()
    }, []);


    return(
        <>
            <Navbar />
            <button className='flex' onClick={() => navigate(-1)}>
                <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xmlSpace="preserve">
		            <polygon points="332.668,490 82.631,244.996 332.668,0 407.369,76.493 235.402,244.996 407.369,413.507 		"/>
                </svg>
                <span className='uppercase'>back</span>
            </button>
            {recipe !== undefined && (
                <div>
                    <h2 className='text-xl'>{recipe.title}</h2>
                    <img className='w-1/6' src={recipe.image} alt={recipe.title}/>
                    <ul>
                        {recipe.ingredients.map((ingredient) => (
                            <li key={recipe.id}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}