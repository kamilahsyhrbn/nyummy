import React, { useEffect } from "react";
import BtnScrollTop from "../../../../assets/components/BtnScrollTop";
import Navbar from "../../../../assets/components/navigations/Navbar";
import Footer from "../../../../assets/components/navigations/Footer";
import { useDispatch, useSelector } from "react-redux";
import CardDrinks from "../../../../assets/components/cards/cardDrinks";
import {
  getCategories,
  getDrinksByCategory,
} from "../../../../redux/actions/cocktailActions";
import { setSelectedCategory } from "../../../../redux/reducers/cocktailReducers";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ByCategories() {
  const dispatch = useDispatch();
  const { category, categoryList, selectedCategory, isLoading } = useSelector(
    (state) => state.cocktail
  );

  const results = (selectedCategory) => {
    if (selectedCategory === "") {
      dispatch(getDrinksByCategory("Cocktail"));
    } else {
      dispatch(getDrinksByCategory(selectedCategory));
    }
    dispatch(setSelectedCategory(selectedCategory));
  };

  useEffect(() => {
    dispatch(getCategories());

    dispatch(getDrinksByCategory("Cocktail"));
    dispatch(setSelectedCategory("Cocktail"));
  }, []);

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

        <div className="mt-5">
          <div className="flex flex-row flex-nowrap overflow-x-auto overflow-y-hidden gap-6 py-2">
            {categoryList &&
              categoryList.map((category) => (
                <div
                  key={category.strCategory}
                  onClick={() => results(category?.strCategory)}
                  className={`text-center text-nowrap cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category?.strCategory
                      ? ""
                      : "hover:text-[#F29C33]"
                  }`}
                >
                  <p
                    className={`font-medium border px-2 py-0.5 rounded-full ${
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

        <div className="mt-5">
          <div>
            <h3 className="font-medium text-xl">
              Showing {category?.length} results for{" "}
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
                  {category &&
                    category?.map((drink) => (
                      <CardDrinks key={drink.idDrink} drinks={drink} />
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
