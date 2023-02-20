import React from "react";
import RecipeItem from "../RecipeItem/RecipeItem";

function RecipeList(props) {
  const { recipes } = props;

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-6 "></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
