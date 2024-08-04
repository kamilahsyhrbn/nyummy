import React, { useEffect } from "react";
import BtnScrollTop from "../../assets/components/BtnScrollTop";
import Navbar from "../../assets/components/navigations/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getRandomMeal } from "../../redux/actions/mealActions";
import { getRandomDrinks } from "../../redux/actions/cocktailActions";

import background from "../../assets/images/background.png";

import CardMeals from "../../assets/components/cards/CardMeals";
import CardDrinks from "../../assets/components/cards/cardDrinks";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../assets/components/navigations/Footer";

export default function Home() {
  const { randomMeal, category } = useSelector((state) => state.meal);
  const { randomCocktail } = useSelector((state) => state.cocktail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomMeal());
    dispatch(getCategories());
    dispatch(getRandomDrinks());
  }, [dispatch]);

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="scroll-smooth">
      <Navbar />

      <div>
        {/* HERO SECTION */}
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(33,33,33,0.522), rgba(33,33,33,0.522)), url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full"
        >
          <div className="flex flex-col justify-center items-center pt-32 pb-12 mx-5 md:mx-0">
            <h1 className="title text-5xl uppercase font-bold text-white tracking-wider text-center">
              Best food and drink for your taste
            </h1>

            <p
              className="my-10 leading-normal text-lg md:w-1/2 text-center text-white"
              id="mealRecc"
            >
              Explore a World of Flavors, Discover Handcrafted Recipes, and Let
              the Aroma of Our Passion for Cooking and Mixology Fill Your
              Kitchen
            </p>

            <a
              href="#mealRecc"
              className="py-3 px-10 rounded-full bg-gradient-to-tr from-[#F29C33] to-[#EE6352] hover:bg-gradient-to-bl text-white transition-colors duration-300 uppercase"
            >
              explore recipes
            </a>
          </div>
        </div>
      </div>

      {/* RANDOM/RECOMMENDATION MEAL SECTION */}
      <div className="border border-[#262522]/25 rounded-3xl my-12 mx-5 p-6">
        <h1 className="md:text-3xl text-center md:text-start text-lg uppercase font-bold tracking-wider">
          Meal Recipe Recommendations
        </h1>

        <Slider {...settings}>
          {randomMeal?.map((meal) => {
            return (
              <div key={meal?.idMeal} className="mt-5">
                <CardMeals meal={meal} />
              </div>
            );
          })}
        </Slider>
      </div>

      {/* CATEGORIES SECTION */}

      <div className=" my-12 mx-5 p-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <h1 className="md:text-3xl text-center md:text-start text-lg uppercase font-bold tracking-wider">
            popular meal Categories
          </h1>
          <div className="mt-2 flex justify-end md:mt-0">
            <button className="py-2 px-5 text-sm md:text-md rounded-full bg-[#9FDC26] border border-black hover:bg-transparent font-medium transition-colors duration-300 uppercase">
              View All Categories
            </button>
          </div>
        </div>

        <Slider {...settings2}>
          {category?.slice(0, 5).map((category) => {
            return (
              <div key={category?.idCategory} className="my-5">
                <div className="flex flex-col items-center text-center cursor-pointer hover:text-[#F29C33] transition-all duration-300 hover:scale-105">
                  <img src={category?.strCategoryThumb} className="w-48" />

                  <p className="mt-2 font-medium">{category?.strCategory}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* COCKTAILS RECOMMENDATION SECTION */}
      <div className="border border-[#262522]/25 rounded-3xl my-12 mx-5 p-6">
        <h1 className="md:text-3xl text-center md:text-start text-lg uppercase font-bold tracking-wider">
          Drinks Recommendations
        </h1>

        <Slider {...settings}>
          {randomCocktail?.map((drinks) => {
            return (
              <div key={drinks?.idDrink} className="mt-5">
                <CardDrinks drinks={drinks} />
              </div>
            );
          })}
        </Slider>
      </div>

      <BtnScrollTop />

      <Footer />
    </div>
  );
}
