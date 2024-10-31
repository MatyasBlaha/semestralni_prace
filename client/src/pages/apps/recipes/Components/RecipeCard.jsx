import { memo } from "react";

import LinkButton from "../../../../Components/UI/LinkButton.jsx";
import {getPathByName} from "../../../../utils/getPathByName.jsx";

const RecipeCard = memo(({recipe}) => {

    console.log(recipe)

    return(
            <div key={recipe.id}>
                <LinkButton to={getPathByName('recipe').replace(':recipeId', recipe.id)}>
                    <div key={recipe.id} className='w-96 px-4'>
                        <div className='h-24'>
                            <h3>{recipe.title}</h3>
                        </div>
                        <div>
                            <img src={recipe.image} alt={recipe.title}/>
                        </div>
                        <p>{recipe.instructions}</p>
                    </div>
                </LinkButton>
            </div>
    )
})

export default RecipeCard;