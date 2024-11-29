import React, { useState, useEffect, Fragment } from "react";
import Logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { MdRestaurantMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className={`fixed w-full z-20 top-0 start-0 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#f0ebe1] shadow font-medium"
          : `${
              location.pathname === "/"
                ? "bg-transparent text-[#FFFBF2] font-medium"
                : "bg-transparent font-medium"
            }`
      }`}
    >
      <div className="flex justify-between items-center px-10 my-2 lg:px-24">
        <Link to="/">
          <img src={Logo} alt="Nyummy's Logo" className="w-16 h-16" />
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/"
            className={`${
              location.pathname === "/"
                ? "bg-[#F29C33] px-3 py-1 rounded-full hover:bg-[#EE6352] text-[#f0ebe1] transition-colors duration-300"
                : "hover:text-[#F29C33] transition-colors duration-300"
            }`}
          >
            Home
          </Link>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button>
                <span className="sr-only">Open options</span>
                <span
                  className={`${
                    location.pathname === "/meal-categories" ||
                    location.pathname === "/search-meal" ||
                    location.pathname === "/meal-area"
                      ? "bg-[#F29C33] px-3 py-1 rounded-full hover:bg-[#EE6352] text-[#f0ebe1] transition-colors duration-300"
                      : "hover:text-[#F29C33] transition-colors duration-300"
                  }`}
                >
                  Search Meals
                </span>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/search-meal"
                        className={`${
                          active
                            ? "bg-[#F0EBE1] text-gray-900"
                            : "text-gray-700"
                        }
                        px-4 py-2 text-sm flex items-center
                      `}
                      >
                        Search by name
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/meal-area"
                        className={`${
                          active
                            ? "bg-[#F0EBE1] text-gray-900"
                            : "text-gray-700"
                        }
                        px-4 py-2 text-sm flex items-center
                      `}
                      >
                        Search by area
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/meal-categories"
                        className={`${
                          active
                            ? "bg-[#F0EBE1] text-gray-900"
                            : "text-gray-700"
                        }
                        px-4 py-2 text-sm flex items-center
                      `}
                      >
                        Search by category
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button>
                <span className="sr-only">Open options</span>
                <span
                  className={`${
                    location.pathname === "/search-drink" ||
                    location.pathname === "/drink-glasses" ||
                    location.pathname === "/drink-categories" ||
                    location.pathname === "/drink-filter"
                      ? "bg-[#F29C33] px-3 py-1 rounded-full hover:bg-[#EE6352] text-[#f0ebe1] transition-colors duration-300"
                      : "hover:text-[#F29C33] transition-colors duration-300"
                  }`}
                >
                  Search Cocktails
                </span>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 rounded-lg shadow-xl bg-white divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/search-drink"
                        className={`${
                          active
                            ? "bg-[#F0EBE1] text-gray-900"
                            : "text-gray-700"
                        }
                        px-4 py-2 text-sm flex items-center
                      `}
                      >
                        Search by name
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/drink-categories"
                        className={`${
                          active
                            ? "bg-[#F0EBE1] text-gray-900"
                            : "text-gray-700"
                        }
                        px-4 py-2 text-sm flex items-center
                      `}
                      >
                        Search by category
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/drink-glasses"
                        className={`${
                          active
                            ? "bg-[#F0EBE1] text-gray-900"
                            : "text-gray-700"
                        }
                        px-4 py-2 text-sm flex items-center
                      `}
                      >
                        Search by glasses
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/drink-filter"
                        className={`${
                          active
                            ? "bg-[#F0EBE1] text-gray-900"
                            : "text-gray-700"
                        }
                        px-4 py-2 text-sm flex items-center
                      `}
                      >
                        Search by alcoholic
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          {/* MOBILE AND TABLET MENU */}
          <div
            onClick={showMenuHandler}
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <MdRestaurantMenu className="text-3xl hover:text-[#F29C33]" />
          </div>

          <div>
            <div
              className={`bg-[#FCF8F0] w-7/12 h-screen fixed top-0 right-0 z-10 transition-all duration-300 text-black ${
                showMenu ? "" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col items-center h-full p-5">
                <Link to="/home">
                  <h2 className="text-2xl font-bold text-center title">
                    Nyummy
                  </h2>
                </Link>

                <div className="flex flex-col space-y-4 mt-10 w-full">
                  <Link to="/" className="hover:text-[#F29C33]">
                    Home
                  </Link>
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between hover:text-[#F29C33]">
                      <span> Search Meals </span>

                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>
                    <ul className="mt-2 space-y-1 px-4">
                      <li>
                        <a
                          href="/search-meal"
                          className="block rounded-lg px-4 py-2 text-sm font-medium hover:text-[#F29C33]"
                        >
                          Search by name
                        </a>
                      </li>

                      <li>
                        <a
                          href="/meal-area"
                          className="block rounded-lg px-4 py-2 text-sm font-medium hover:text-[#F29C33]"
                        >
                          Search by area
                        </a>
                      </li>

                      <li>
                        <a
                          href="/meal-categories"
                          className="block rounded-lg px-4 py-2 text-sm font-medium hover:text-[#F29C33]"
                        >
                          Search by category
                        </a>
                      </li>
                    </ul>
                  </details>
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between hover:text-[#F29C33]">
                      <span> Search Cocktails </span>

                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <ul className="mt-2 space-y-1 px-4">
                      <li>
                        <a
                          href="/search-drink"
                          className="block rounded-lg px-4 py-2 text-sm font-medium hover:text-[#F29C33]"
                        >
                          Search by name
                        </a>
                      </li>

                      <li>
                        <a
                          href="/drink-categories"
                          className="block rounded-lg px-4 py-2 text-sm font-medium hover:text-[#F29C33]"
                        >
                          Search by category
                        </a>
                      </li>

                      <li>
                        <a
                          href="/drink-glasses"
                          className="block rounded-lg px-4 py-2 text-sm font-medium hover:text-[#F29C33]"
                        >
                          Search by glasses
                        </a>
                      </li>

                      <li>
                        <a
                          href="/drink-filter"
                          className="block rounded-lg px-4 py-2 text-sm font-medium hover:text-[#F29C33]"
                        >
                          Search by alcoholic
                        </a>
                      </li>
                    </ul>
                  </details>
                </div>
                <div className="absolute top-5 right-5">
                  <button
                    onClick={showMenuHandler}
                    className="bg-transparent hover:bg-[#F29C33] rounded-full p-2 transition-all duration-300"
                  >
                    <IoMdClose className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
