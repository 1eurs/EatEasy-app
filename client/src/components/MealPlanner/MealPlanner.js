import { useState } from "react";

const MealPlanner = (props) => {
  const { recipes } = props;

  const [planner, setPlanner] = useState({});

  const buttonClicked = () => {
    console.log(planner);
  };
  const handleDragStart = (event, recipe) => {
    event.dataTransfer.setData("recipeId", recipe.id);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, day) => {
    event.preventDefault();
    const recipeId = event.dataTransfer.getData("recipeId");
    const recipe = recipes.find((recipe) => recipe.id === Number(recipeId));
    if (!recipe) return;
    setPlanner({ ...planner, [day]: recipe });
  };

  const handleDragEnd = () => {
    // Remove the recipe from the planner if it was dragged from one day to another
    const keys = Object.keys(planner);
    for (let i = 0; i < keys.length; i++) {
      const day = keys[i];
      const recipe = planner[day];
      if (!recipes.includes(recipe)) {
        const newPlanner = { ...planner };
        delete newPlanner[day];
        setPlanner(newPlanner);
        break;
      }
    }
  };

  const renderPlannerItem = (day) => {
    const recipe = planner[day];
    return (
      <div
        className="p-4 rounded-lg shadow-lg bg-white"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, day)}
      >
        {recipe ? (
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
            <ul className="list-disc ml-8">{recipe.description}</ul>
          </div>
        ) : (
          <div className="text-gray-400">Drag a recipe here</div>
        )}
      </div>
    );
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/2 m-4">
        <h2 className="text-2xl font-bold mb-4">Recipes</h2>
        <div className="grid grid-cols-2 gap-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="p-2 mb-2 rounded-lg shadow-lg bg-white"
              draggable
              onDragStart={(event) => handleDragStart(event, recipe)}
              onDragEnd={handleDragEnd}
            >
              <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
              <ul className="list-disc ml-8">{recipe.description}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 m-4">
        <h2 className="text-2xl font-bold mb-4">Meal Planner</h2>
        <div className="grid grid-cols-2 gap-4">
          {["monday", "tuesday", "wednesday", "thursday", "friday", 6, 7].map(
            (day) => (
              <div key={day}>{renderPlannerItem(day)}</div>
            )
          )}
          <button
            onClick={buttonClicked}
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealPlanner;
