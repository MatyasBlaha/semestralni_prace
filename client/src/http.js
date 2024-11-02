export async function fetchAvailableRecipes(){
    const response = await fetch('http://localhost:3000/recipes');
    const resData = await response.json();

    if(!response.ok){
        throw new Error('failed to fetch recipes')
    }

    return resData.recipes;
}


export async function fetchRecipeById(id){
    const response = await fetch(`http://localhost:3000/recipes/${id}`)
    const resData = await response.json();

    if(!response.ok){
        throw new Error('failed to fetch recipe')
    };

    return resData;
}