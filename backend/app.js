import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

const app = express();

// app.use(express.static('images))
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    next();
})


app.get('/recipes', async(req, res) => {
    const fileContent = await fs.readFile('./data/recipes.json');

    const recipesData = JSON.parse(fileContent);

    res.status(200).json({recipes: recipesData})
})

app.get('/recipes/:id', async(req, res) => {
    const recipeId = Number(req.params.id)


    try {
        const fileContent = await fs.readFile('./data/recipes.json')

        const recipesData = JSON.parse(fileContent)

        const recipe = recipesData.find(r => r.id === recipeId);

        if(recipe){
            res.status(200).json(recipe)
        } else {
            res.status(404).json({ message: 'Recipe not found'});
        }

    } catch (err){
        res.status(500).json({ message: 'error reading recipe'});
    }
})


app.use((req, res, next) => {
    if(req.method === 'OPTIONS'){
        return next();
    }
    res.status(404).json({message: '404 - Not found'});
})

app.listen(3000);