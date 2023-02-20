import React from "react";

function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">EatEasy</h1>
        <nav>
          <ul className="flex">
            <li>
              <a href="/home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="ml-6">
              <a href="/meal-planner" className="hover:text-gray-400">
                Meal Planner
              </a>
            </li>
            <li className="ml-6">
              <a href="/recipes" className="hover:text-gray-400">
                recipes
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
