// import './IngredientList.css'
import React from 'react';

function RecipeStepsList(props) {
    // Create the list items using map
    const recipeStepsListItems = props.recipeSteps.map((step, index) => {
        return (
            // Return the desired HTML for each ingredient
            <li key={index} >
                { step.name }
            </li>
        );
    });

    // return the HTML for the component
    // ingredientListItems will be rendered as li elements
    return (
        <ol>
            { recipeStepsListItems }
        </ol>
    );
}

export default RecipeStepsList;
