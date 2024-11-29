import React, { useEffect } from "react";
import BtnScrollTop from "../../../assets/components/BtnScrollTop";
import Navbar from "../../../assets/components/navigations/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../../assets/components/navigations/Footer";
import Loader from "../../../assets/components/Loader";

export default function DetailMeal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const meal = useSelector((state) => state.meal.mealDetail);
  const { isLoading } = useSelector((state) => state.meal);

  const tags =
    meal && meal[0]?.strTags
      ? meal[0]?.strTags
          .split(",")
          .filter((tag) => tag.trim() !== "")
          .map((tag, i) => (
            <span
              key={i}
              className="text-[#F29C33] border-2 border-[#F29C33] font-semibold px-3 py-1 rounded-full mr-2"
            >
              #{tag}
            </span>
          ))
      : [];

  const instructions =
    meal && meal[0]?.strInstructions
      ? meal[0]?.strInstructions
          .split(".")
          .filter((instruction) => instruction.trim() !== "")
          .map((instruction, i) => {
            const index = i + 1;
            return (
              <div className="flex gap-1 items-start">
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
  if (meal && !isLoading) {
    for (let i = 1; i <= 20; i++) {
      const measure = meal[0][`strMeasure${i}`];
      const ingredient = meal[0][`strIngredient${i}`];

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

          <div className="border border-[#262522]/25 rounded-3xl mt-24 mb-16 mx-5 md:mx-10 p-6 overflow-x-hidden">
            <div className="flex flex-col items-center gap-1">
              <span className="text-center uppercase text-sm font-semibold bg-[#EE6352] text-white px-2 py-1 rounded-full ">
                Recipe
              </span>
              <h1 className="md:text-4xl text-center text-lg uppercase font-bold tracking-wider">
                {meal[0]?.strMeal}
              </h1>
              <div className="flex flex-col md:flex-row items-center px-3 mt-2 gap-2">
                <span className="bg-[#9FDC26] border border-black px-3 py-1 rounded-full text-center w-max">
                  📍 {meal[0]?.strArea}
                </span>
                <span className="bg-[#9FDC26] border border-black px-3 py-1 rounded-full text-center w-max">
                  🍴 {meal[0]?.strCategory}
                </span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 my-8 justify-center items-center md:items-start">
              <div className="md:w-5/12 h-full">
                <img
                  src={meal[0]?.strMealThumb}
                  alt={meal[0]?.strMeal}
                  className="w-full h-80 object-cover rounded-3xl"
                />
              </div>
              <div className="md:w-5/12 ">
                <div className="mt-5 flex flex-wrap gap-2">{tags && tags}</div>
                {meal[0]?.strSource && (
                  <div className={`${tags ? "my-6" : "my-5"}`}>
                    <span className="text-[#F29C33] font-medium">
                      Source :{" "}
                    </span>
                    <a
                      href={meal[0]?.strSource}
                      target="_blank"
                      className="hover:text-[#F29C33] hover:underline"
                    >
                      Click Here!
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div className="md:w-10/12">
                <h1 className="text-2xl font-bold uppercase text-center md:text-start">
                  Instructions
                </h1>
                {instructions && instructions}
              </div>
              <div className="md:w-10/12">
                <h1 className="text-2xl font-bold uppercase mb-3 text-center">
                  Ingredients
                </h1>
                <div className="bg-[#FFFBF2] md:w-7/12 rounded-3xl p-3 flex flex-col h-max mx-auto">
                  <div>{ingredientElements}</div>
                </div>
                <div className="my-6">
                  <h1 className="text-2xl font-bold uppercase mb-3 text-center">
                    Video
                  </h1>
                  {meal[0]?.strYoutube ? (
                    <iframe
                      className="w-full h-96 rounded-3xl"
                      src={`https://www.youtube.com/embed/${meal[0]?.strYoutube.slice(
                        -11
                      )}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  ) : (
                    <p className="text-center">No video available </p>
                  )}
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
