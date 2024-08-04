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
    <div className="relative bg-[#FFFBF2] rounded-3xl p-3 flex flex-col justify-center md:mx-5">
      <button
        // onClick={() => handleClickHeart(e)}
        className="absolute top-5 right-6 bg-white p-1.5 rounded-full z-10"
      >
        <svg
          fill="#a8a8a8"
          className="w-5 h-5 hover:fill-[#FF6363]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
        </svg>
      </button>
      <img
        src={meal?.strMealThumb}
        alt={meal?.strMeal}
        className="w-full h-64 object-cover rounded-3xl"
      />

      <div className="px-3 mt-4">
        <h1 className="text-lg font-bold truncate">{meal?.strMeal}</h1>
      </div>

      <div className="px-3 mt-2">
        <span className="bg-[#F0EBE1] px-3 py-1 rounded-full mr-2">
          📍 {meal?.strArea}
        </span>
        <span className="bg-[#F0EBE1] px-3 py-1 rounded-full mr-2">
          🍴 {meal?.strCategory}
        </span>
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
