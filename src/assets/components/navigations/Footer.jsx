import React from "react";
import Logo from "../../images/Logo.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#262522] text-white px-20 py-5">
      <div className="flex justify-between mb-5">
        <div
          className="flex flex-col md:flex-row items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="" className="w-28 h-28" />
          <h2 className="title text-3xl font-bold uppercase">Nyummy</h2>
        </div>
        <div className="flex flex-col md:flex-row  gap-10">
          <div>
            <h2 className="text-xl font-medium text-center mb-3">Meal</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-sm">
                <a
                  href="/search-meal"
                  className="hover:text-[#EE6352] hover:underline transition-colors duration-300"
                >
                  Search by name
                </a>
              </li>
              <li className="text-sm">
                <a
                  href="/meal-area"
                  className="hover:text-[#EE6352] hover:underline transition-colors duration-300"
                >
                  Search by area
                </a>
              </li>
              <li className="text-sm">
                <a
                  href="/meal-categories"
                  className="hover:text-[#EE6352] hover:underline transition-colors duration-300"
                >
                  Search by category
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium text-center mb-3">Cocktail</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-sm">
                <a
                  href="/search-drink"
                  className="hover:text-[#EE6352] hover:underline transition-colors duration-300"
                >
                  Search by name
                </a>
              </li>
              <li className="text-sm">
                <a
                  href="/drink-categories"
                  className="hover:text-[#EE6352] hover:underline transition-colors duration-300"
                >
                  Search by category
                </a>
              </li>
              <li className="text-sm">
                <a
                  href="/drink-glasses"
                  className="hover:text-[#EE6352] hover:underline transition-colors duration-300"
                >
                  Search by glasses
                </a>
              </li>
              <li className="text-sm">
                <a
                  href="/drink-filter"
                  className="hover:text-[#EE6352] hover:underline transition-colors duration-300"
                >
                  Search by alcoholic
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center pt-5 border-t-2">
        <p className="text-sm">
          Copyright 2024{" "}
          <span
            onClick={() => navigate("/")}
            className="hover:text-[#EE6352] hover:underline transition-colors duration-300 cursor-pointer"
          >
            Nyummy
          </span>{" "}
          . All rights reserved
        </p>
      </div>
    </div>
  );
}
