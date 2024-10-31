import Navbar from "../../../../Components/Navbar.jsx";
import { useParams, useNavigate } from "react-router-dom";
import {RECIPES} from "../data/recipes.js";

export default function RecipeDetails(){

    const navigate = useNavigate();
    let { recipeId } = useParams()

    const recipe = RECIPES.find((r) => r.id === parseInt(recipeId, 10));

    if (!recipe) {
        return <p>Recipe not found.</p>;
    }


    return(
        <>
            <Navbar />
            <button className='flex' onClick={() => navigate(-1)}>
                <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve">
		            <polygon points="332.668,490 82.631,244.996 332.668,0 407.369,76.493 235.402,244.996 407.369,413.507 		"/>
                </svg>
                <span className='uppercase'>back</span>
            </button>
            <div>
                <h2 className='text-xl'>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title}/>
                <ul>
                    {recipe.ingredients.map((ingredient) => (
                        <li key={recipe.id}>{ingredient}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}