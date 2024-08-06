import React, { useEffect } from "react";
import BtnScrollTop from "../../../../assets/components/BtnScrollTop";
import Navbar from "../../../../assets/components/navigations/Navbar";
import Footer from "../../../../assets/components/navigations/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchMeal } from "../../../../redux/actions/mealActions";
import { setSearchKeyword } from "../../../../redux/reducers/mealReducers";
import CardMeals from "../../../../assets/components/cards/CardMeals";

export default function ByName() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchResults, searchKeyword } = useSelector((state) => state.meal);
  console.log("searchResults", searchResults);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchKeyword = e.target.value;
    dispatch(searchMeal(searchKeyword));
    dispatch(setSearchKeyword(searchKeyword));
  };

  useEffect(() => {
    dispatch(searchMeal("Beef"));
    dispatch(setSearchKeyword("Beef"));
  }, []);
  return (
    <div>
      <Navbar />

      <div className="border border-[#262522]/25 rounded-3xl mt-24 mb-16 p-6 mx-5">
        <div className="flex flex-col items-center gap-1">
          <span className="text-center uppercase text-sm font-semibold bg-[#EE6352] text-white px-2 py-1 rounded-full ">
            search
          </span>
          <h1 className="text-3xl font-bold uppercase">Meal Name</h1>
        </div>
        <div className="mt-5">
          {/* search bar */}
          <div className="w-full flex flex-col items-center gap-3">
            <form className="form relative" onSubmit={handleSearch}>
              <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                <svg
                  width="17"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-labelledby="search"
                  className="w-5 h-5 text-gray-700"
                >
                  <path
                    d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                    stroke="currentColor"
                    strokeWidth="1.333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <input
                className="rounded-full px-8 py-3 border-2 md:w-96 w-full border-transparent focus:outline-none focus:border-[#EE6352] placeholder-gray-400 transition-all duration-300 shadow-md"
                placeholder="Search..."
                required=""
                type="text"
                value={searchKeyword}
                onChange={handleSearch}
              />
              <button
                type="reset"
                onClick={() => {
                  dispatch(searchMeal("")), dispatch(setSearchKeyword(""));
                }}
                className="absolute right-3 -translate-y-1/2 top-1/2 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </form>
          </div>

          {/* search result */}
          <div className="my-6">
            {Array.isArray(searchResults) &&
              searchResults.length > 0 &&
              searchKeyword && (
                <h3 className="font-medium text-xl">
                  Showing {searchResults.length} results for{" "}
                  <span className="text-[#F29C33] font-semibold">
                    {searchKeyword}
                  </span>
                </h3>
              )}
            {searchResults === null && searchKeyword && (
              <h3 className="font-medium text-xl">
                No results for{" "}
                <span className="text-[#F29C33] font-semibold">
                  {searchKeyword}
                </span>
              </h3>
            )}
          </div>

          <div className="mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults ? (
                searchResults?.map((meal) => (
                  <CardMeals key={meal.idMeal} meal={meal} />
                ))
              ) : (
                <p className="text-center">No results found</p>
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
