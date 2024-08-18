import React, { useEffect } from "react";
import BtnScrollTop from "../../../../assets/components/BtnScrollTop";
import Navbar from "../../../../assets/components/navigations/Navbar";
import Footer from "../../../../assets/components/navigations/Footer";
import { useDispatch, useSelector } from "react-redux";
import CardDrinks from "../../../../assets/components/cards/cardDrinks";
import {
  getDrinkByGlass,
  getGlassType,
} from "../../../../redux/actions/cocktailActions";
import { setSelectedGlass } from "../../../../redux/reducers/cocktailReducers";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ByGlasses() {
  const dispatch = useDispatch();
  const { glasses, selectedGlass, glassResult, isLoading } = useSelector(
    (state) => state.cocktail
  );

  const results = (selectedGlass) => {
    if (selectedGlass === "") {
      dispatch(getDrinkByGlass("Highball glass"));
    } else {
      dispatch(getDrinkByGlass(selectedGlass));
    }
    dispatch(setSelectedGlass(selectedGlass));
  };

  useEffect(() => {
    dispatch(getGlassType());

    dispatch(setSelectedGlass("Highball glass"));
    dispatch(getDrinkByGlass("Highball glass"));
  }, [dispatch]);
  return (
    <div>
      <Navbar />

      <div className="border border-[#262522]/25 rounded-3xl mt-24 mb-16 p-6 mx-5">
        <div className="flex flex-col items-center gap-1">
          <span className="text-center uppercase text-sm font-semibold bg-[#EE6352] text-white px-2 py-1 rounded-full ">
            search
          </span>
          <h1 className="text-3xl font-bold uppercase">Glass Type</h1>
        </div>

        <div className="mt-5">
          <div className="flex flex-row flex-nowrap overflow-x-auto overflow-y-hidden gap-6 py-2">
            {glasses &&
              glasses.map((glass) => (
                <div
                  key={glass.strGlass}
                  onClick={() => results(glass?.strGlass)}
                  className={`text-center text-nowrap cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedGlass === glass?.strGlass
                      ? ""
                      : "hover:text-[#F29C33]"
                  }`}
                >
                  <p
                    className={`font-medium border px-2 py-0.5 rounded-full ${
                      selectedGlass === glass?.strGlass
                        ? "bg-[#9FDC26] border-black hover:text-white"
                        : "bg-transparent border-transparent"
                    }`}
                  >
                    {glass?.strGlass}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-5">
          <div>
            <h3 className="font-medium text-xl">
              Showing {glassResult?.length} results for{" "}
              <span className="text-[#F29C33] font-semibold">
                {selectedGlass}
              </span>{" "}
              glasses
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
                  {glassResult &&
                    glassResult?.map((drink) => (
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
