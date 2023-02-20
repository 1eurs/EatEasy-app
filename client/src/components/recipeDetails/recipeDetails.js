import React from "react";
import { useParams } from "react-router-dom";
const MealDetail = ({ recipes }) => {
  let { id } = useParams();
  console.log(id);
  const {
    title,
    description,
    image,
    ingredients,
    prepTime,
    cookTime,
    servings,
  } = recipes.find((recipe) => recipe.id === parseInt(id));
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <img
          src={image}
          alt={title}
          className="rounded-lg shadow-lg w-full h-auto"
        />
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mt-8">
          {title}
        </h1>
        <div className="mt-8">
          <div className="prose prose-lg text-gray-500">{description}</div>
          <div className="mt-8 flex items-center justify-between">
            <div>
              <span className="text-gray-900 font-bold">Prep time:</span>{" "}
              {prepTime}
            </div>
            <div>
              <span className="text-gray-900 font-bold">Cook time:</span>{" "}
              {cookTime}
            </div>
            <div>
              <span className="text-gray-900 font-bold">Servings:</span>{" "}
              {servings}
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl mb-4">
              Ingredients
            </h2>
            <ul className="list-disc list-inside">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
