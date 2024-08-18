import React, { useEffect } from "react";
import BtnScrollTop from "../../../assets/components/BtnScrollTop";
import Navbar from "../../../assets/components/navigations/Navbar";
import Footer from "../../../assets/components/navigations/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../../assets/components/Loader";

export default function DetailCocktail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const drink = useSelector((state) => state.cocktail.cocktailDetail);
  const { isLoading } = useSelector((state) => state.cocktail);
  console.log("drink", drink);

  const tags =
    drink && drink[0]?.strTags
      ? drink[0]?.strTags
          .split(",")
          .filter((tag) => tag.trim() !== "")
          .map((tag, i) => (
            <span
              key={i}
              className="text-[#F29C33] border-2 border-[#F29C33] font-semibold px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))
      : [];

  const instructions =
    drink && drink[0]?.strInstructions
      ? drink[0]?.strInstructions
          .split(".")
          .filter((instruction) => instruction.trim() !== "")
          .map((instruction, i) => {
            const index = i + 1;
            return (
              <div className="flex items-start gap-2">
                <span className="bg-[#F29C33] px-2 text-center text-white rounded-full mt-2">
                  {index}
                </span>
                <p key={i} className="leading-loose my-1">
                  {instruction.trim()}
                </p>
              </div>
            );
          })
      : [];

  const ingredientElements = [];
  if (drink && !isLoading) {
    for (let i = 1; i <= 20; i++) {
      const measure = drink[0][`strMeasure${i}`];
      const ingredient = drink[0][`strIngredient${i}`];

      if (measure && ingredient) {
        ingredientElements.push(
          <div key={i} className="flex items-center gap-3">
            <p className="text-[#F29C33] font-semibold">{measure}</p>
            <p className="text-base font-medium">{ingredient}</p>
          </div>
        );
      }
    }
  }

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />

          <div className="border border-[#262522]/25 rounded-3xl mt-24 mb-16 mx-10 p-6 overflow-x-hidden">
            <div className="flex flex-col items-center gap-1">
              <span className="text-center uppercase text-sm font-semibold bg-[#EE6352] text-white px-2 py-1 rounded-full ">
                Recipe
              </span>
              <h1 className="md:text-4xl text-center text-lg uppercase font-bold tracking-wider">
                {drink[0]?.strDrink ? drink[0]?.strDrink : "Cocktail"}
              </h1>
              <div className="flex flex-col md:flex-row px-3 mt-2 gap-2">
                <span className="bg-[#9FDC26] border border-black px-3 py-1 rounded-full">
                  🥂 {drink[0]?.strGlass}
                </span>
                <span className="bg-[#9FDC26] border border-black px-3 py-1 rounded-full">
                  🍸 {drink[0]?.strCategory}
                </span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 my-8 justify-center items-center md:items-start">
              <div className="md:w-5/12 h-full">
                <img
                  src={drink[0]?.strDrinkThumb}
                  alt={drink[0]?.strDrink}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="md:w-5/12 ">
                <div className="mt-5 flex flex-wrap gap-2">{tags && tags}</div>
                <div
                  className={`${
                    drink[0]?.strTags !== null ? "my-6" : "my-0"
                  } mx-8 md:mx-0`}
                >
                  <span className="text-[#F29C33] font-medium">
                    Alcoholic :{" "}
                  </span>
                  {drink[0]?.strAlcoholic}
                </div>
                <div className="mt-5 mb-8">
                  <h1 className="text-2xl font-bold uppercase mb-3">
                    Ingredients
                  </h1>
                  <div className="bg-[#FFFBF2] md:w-7/12 rounded-3xl p-3 flex flex-col h-max">
                    <div>{ingredientElements}</div>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold uppercase text-center md:text-start">
                    Instructions
                  </h1>
                  {instructions && instructions}
                </div>
              </div>
            </div>
          </div>

          <BtnScrollTop />
          <Footer />
        </>
      )}
    </div>
  );
}
