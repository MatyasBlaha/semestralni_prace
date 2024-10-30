import Navbar from "../../../Components/Navbar.jsx";
import {usePageTitle} from "../../../hooks/usePageTitle.jsx";
import {RECIPES} from "./data/recipes.js";

export default function Recipes () {
    usePageTitle('appRecipes')

    return (
        <>
            <Navbar />
            <div className='w-3/4 mx-auto'>
                <h2 className='mb-8'>RECIPES APP</h2>
                <div className='flex flex-wrap'>
                    {RECIPES.map((recipe) => (
                        <div key={recipe.id} className='w-96 px-4'>
                            <div className='h-24'>
                                <h3>{recipe.title}</h3>
                                <p>{recipe.description}</p>
                            </div>
                            <div>
                                <img className='w-full h-48 object-cover' src={recipe.image} alt=""/>
                            </div>
                            <ul>
                            {recipe.ingredients.map((ingredient) => (
                                    <li key={ingredient}>{ingredient}</li>
                                ))}
                            </ul>
                            <p>{recipe.instructions}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}