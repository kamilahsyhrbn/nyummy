import React, { useEffect } from "react";
import BtnScrollTop from "../../../../assets/components/BtnScrollTop";
import Navbar from "../../../../assets/components/navigations/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../../assets/components/navigations/Footer";
import {
  getCategories,
  getMealsByCategory,
} from "../../../../redux/actions/mealActions";
import { setSelectedCategory } from "../../../../redux/reducers/mealReducers";
import CardMeals from "../../../../assets/components/cards/CardMeals";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ByCategories() {
  const dispatch = useDispatch();

  const { category, categoryResult, selectedCategory, isLoading } = useSelector(
    (state) => state.meal
  );

  const results = (selectedCategory) => {
    if (selectedCategory === "") {
      dispatch(getMealsByCategory("Beef"));
    } else {
      dispatch(getMealsByCategory(selectedCategory));
    }
    dispatch(setSelectedCategory(selectedCategory));
  };

  useEffect(() => {
    dispatch(getCategories());
    if (selectedCategory === null) {
      dispatch(getMealsByCategory("Beef"));
      dispatch(setSelectedCategory("Beef"));
    }
  }, [dispatch]);

  return (
    <div>
      <Navbar />

      <div className="border border-[#262522]/25 rounded-3xl mt-24 mb-16 p-6 mx-5">
        <div className="flex flex-col items-center gap-1">
          <span className="text-center uppercase text-sm font-semibold bg-[#EE6352] text-white px-2 py-1 rounded-full ">
            search
          </span>
          <h1 className="text-3xl font-bold uppercase">Categories</h1>
        </div>

        <div className="mt-10">
          <div className="flex flex-row flex-nowrap overflow-x-auto overflow-y-hidden gap-6 py-2">
            {category &&
              category.map((category) => (
                <div
                  key={category.strCategory}
                  onClick={() => results(category?.strCategory)}
                  className={`flex flex-col flex-shrink-0 items-center text-center cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category?.strCategory
                      ? ""
                      : "hover:text-[#F29C33]"
                  }`}
                >
                  <img
                    src={category?.strCategoryThumb}
                    className={`w-32 rounded-full p-2 border ${
                      selectedCategory === category?.strCategory
                        ? "bg-[#9FDC26] border-black"
                        : "bg-transparent border-transparent"
                    }`}
                  />

                  <p
                    className={`mt-2 font-medium border px-2 py-0.5 rounded-full ${
                      selectedCategory === category?.strCategory
                        ? "bg-[#9FDC26] border-black hover:text-white"
                        : "bg-transparent border-transparent"
                    }`}
                  >
                    {category?.strCategory}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-10">
          <div>
            <h3 className="font-medium text-xl">
              Showing {categoryResult?.length} results for{" "}
              <span className="text-[#F29C33] font-semibold">
                {selectedCategory}
              </span>{" "}
              category
            </h3>
          </div>

          <div className="mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {isLoading ? (
                Array.from({ length: 24 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-[#FFFBF2] rounded-3xl p-3 flex flex-col justify-center m-2 overflow-hidden"
                  >
                    <Skeleton
                      height={250}
                      style={{
                        borderRadius: "24px",
                      }}
                    />
                    <Skeleton height={30} width={250} className="mt-10" />
                    <div className="flex justify-end">
                      <Skeleton
                        height={40}
                        width={120}
                        className="mt-4"
                        style={{
                          borderRadius: "24px",
                        }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <>
                  {categoryResult &&
                    categoryResult?.map((meal) => (
                      <CardMeals key={meal.idMeal} meal={meal} />
                    ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <BtnScrollTop />
      <Footer />
    </div>
  );
}
