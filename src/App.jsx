import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import DetailMeal from "./pages/user/meal/DetailMeal";
import ByCategories from "./pages/user/meal/search/ByCategories";
import ByName from "./pages/user/meal/search/ByName";
import ByArea from "./pages/user/meal/search/ByArea";
import DetailCocktail from "./pages/user/cocktail/DetailCocktail";
import SearchByName from "./pages/user/cocktail/search/ByName";
import SearchByCategories from "./pages/user/cocktail/search/ByCategories";
import SearchByGlasses from "./pages/user/cocktail/search/ByGlasses";
import SearchByFilter from "./pages/user/cocktail/search/ByFilter";
import NotFound from "./pages/extra/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* MEAL */}
        <Route path="/recipe-details/:id" element={<DetailMeal />} />
        {/* SEARCH */}
        <Route path="/meal-categories" element={<ByCategories />} />
        <Route path="/search-meal" element={<ByName />} />
        <Route path="/meal-area" element={<ByArea />} />

        {/* COCKTAIL */}
        <Route path="/drinks-details/:id" element={<DetailCocktail />} />
        <Route path="/search-drink" element={<SearchByName />} />
        <Route path="/drink-glasses" element={<SearchByGlasses />} />
        <Route path="/drink-categories" element={<SearchByCategories />} />
        <Route path="/drink-filter" element={<SearchByFilter />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
