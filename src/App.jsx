import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import DetailMeal from "./pages/user/meal/DetailMeal";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* AUTH */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

        {/* RECIPE */}
        <Route path="/" element={<Home />} />
        <Route path="/recipe-details/:id" element={<DetailMeal />} />

        {/* 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}
