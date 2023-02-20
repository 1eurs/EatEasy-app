import "./main.css"; // This line imports your CSS styles.
import Header from "./components/Header/Header";
import RecipeList from "./components/RecipeList/RecipeList";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MealPlanner from "./components/MealPlanner/MealPlanner";
import recipes from "./recipes";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/Hero/HowItWork";
import Benefits from "./components/Hero/Benefits";
import MealDetail from "./components/recipeDetails/recipeDetails";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/recipe/:id" element={<MealDetail recipes={recipes} />} />
        <Route
          path="/home"
          element={
            <>
              <Hero />
              <HowItWorks />
              <Benefits />
            </>
          }
        />
        <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
        <Route
          path="/meal-planner"
          element={<MealPlanner recipes={recipes} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
