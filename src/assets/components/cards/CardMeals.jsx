import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRecipeDetail } from "../../../redux/actions/mealActions";

export default function CardMeals({ isLoading, meal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRecipeClick = (id) => {
    dispatch(getRecipeDetail(id));
    navigate(`/recipe-details/${id}`);
  };
  return (
    <div
      className={`bg-[#FFFBF2] rounded-3xl p-3 flex flex-col justify-center ${
        location.pathname === "/" ? "md:mx-5" : "md:mx-0"
      }`}
    >
      <img
        src={meal?.strMealThumb}
        alt={meal?.strMeal}
        className="w-full h-72 object-cover rounded-3xl"
      />

      <div className="px-3 mt-4">
        <h1 className="text-lg font-bold truncate">{meal?.strMeal}</h1>
      </div>

      <div className="px-3 mt-2">
        {meal?.strArea && (
          <span className="bg-[#F0EBE1] px-3 py-1 rounded-full mr-2">
            📍 {meal?.strArea}
          </span>
        )}
        {meal?.strCategory && (
          <span className="bg-[#F0EBE1] px-3 py-1 rounded-full mr-2">
            🍴 {meal?.strCategory}
          </span>
        )}
      </div>

      <div className="px-3 mt-4 flex justify-end">
        <button
          onClick={() => handleRecipeClick(meal?.idMeal)}
          className="py-2 px-3 rounded-full border font-medium border-[#262522]/30 uppercase text-sm hover:text-[#F29C33] transition-colors duration-300 hover:border-[#F29C33]"
        >
          view recipe
        </button>
      </div>
    </div>
  );
}
