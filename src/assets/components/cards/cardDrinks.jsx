import React from "react";
import { useNavigate } from "react-router-dom";
import { getDetailDrink } from "../../../redux/actions/cocktailActions";
import { useDispatch } from "react-redux";

export default function cardDrinks({ isLoading, drinks }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDrinkClick = (id) => {
    dispatch(getDetailDrink(id));
    navigate(`/drinks-details/${id}`);
  };
  return (
    <div
      className={`bg-[#FFFBF2] rounded-3xl p-3 flex flex-col justify-center ${
        location.pathname === "/" ? "md:mx-5" : "md:mx-0"
      }`}
    >
      <img
        src={drinks?.strDrinkThumb}
        alt={drinks?.strDrink}
        className="w-full h-72 object-cover rounded-3xl"
      />

      <div className="px-3 mt-4">
        <h1 className="text-lg font-bold truncate">{drinks?.strDrink}</h1>
      </div>
      {drinks?.strGlass && drinks.strCategory && (
        <div className="flex px-3 mt-2">
          <span className="bg-[#F0EBE1] px-3 py-1 rounded-full mr-2 truncate">
            🥂 {drinks?.strGlass}
          </span>
          <span className="bg-[#F0EBE1] px-3 py-1 rounded-full mr-2 truncate">
            🍸 {drinks?.strCategory}
          </span>
        </div>
      )}

      <div className="px-3 mt-4 flex justify-end">
        <button
          onClick={() => handleDrinkClick(drinks?.idDrink)}
          className="py-2 px-3 rounded-full border font-medium border-[#262522]/30 uppercase text-sm hover:text-[#F29C33] transition-colors duration-300 hover:border-[#F29C33]"
        >
          view drink
        </button>
      </div>
    </div>
  );
}
