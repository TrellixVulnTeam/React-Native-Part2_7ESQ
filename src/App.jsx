import './index.css'
import React from 'react';
// TODO: Import RecipeTitle
import RecipeTitle from './RecipeTitle';
// TODO: Import IngredientList
import IngredientList from './IngredientList';
// TODO: Import IngredientList
import RecipeStepsList from './RecipeStepsList';

function App() {
    // TODO: Add recipe object
    const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
        recipeSteps: [
            {name: 'Add cut potatoes to a pot of heavily salted water.'},
            {name: 'Bring pot to a boil.'},
            {name: 'Boil the potatoes until fork tender, about 15-20 minutes.'},
            {name: 'Strain the potatoes.'},
            {name: 'Return potatoes to pot.'},
            {name: 'Add butter, cream, salt, and pepper to taste.'},
            {name: 'Mash potatoes.'},
            {name: 'Reseason and add butter and cream as desired.'},
            
        ]
    };

    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title={ recipe.title } feedback={ recipe.feedback} />
            <h4>The recipe is including:</h4>
            {/* TODO: Add IngredientList component */}
            <IngredientList ingredients={recipe.ingredients} />
            <h4>The recipe steps are as follows:</h4>
            {/* TODO: Add RecipeSteps component */}
            <RecipeStepsList recipeSteps={recipe.recipeSteps} />
        </article>
    )
}

export default App;
