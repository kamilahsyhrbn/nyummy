import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import DetailMeal from "./pages/user/meal/DetailMeal";
import ByCategories from "./pages/user/meal/search/ByCategories";
import ByName from "./pages/user/meal/search/ByName";
import ByArea from "./pages/user/meal/search/ByArea";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* AUTH */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

        <Route path="/" element={<Home />} />
        {/* MEAL */}
        <Route path="/recipe-details/:id" element={<DetailMeal />} />
        {/* SEARCH */}
        <Route path="/meal-categories" element={<ByCategories />} />
        <Route path="/search-meal" element={<ByName />} />
        <Route path="/meal-area" element={<ByArea />} />

        {/* COCKTAIL */}

        {/* 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}
