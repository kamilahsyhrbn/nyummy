import React, { useState, useEffect, Fragment } from "react";
import Logo from "../../images/Logo.png";
import User from "../../images/User.png";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

        <div className="flex items-center gap-4">
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
                      <a
                        href="/search-meal"
                        className={`${
                          active
                            ? "bg-[#F0EBE1] text-gray-900"
                            : "text-gray-700"
                        }
                        px-4 py-2 text-sm flex items-center
                      `}
                      >
                        Search by name
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/meal-area"
                        className={`${
                          active
                            ? "bg-[#F0EBE1] text-gray-900"
                            : "text-gray-700"
                        }
                        px-4 py-2 text-sm flex items-center
                      `}
                      >
                        Search by area
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/meal-categories"
                        className={`${
                          active
                            ? "bg-[#F0EBE1] text-gray-900"
                            : "text-gray-700"
                        }
                        px-4 py-2 text-sm flex items-center
                      `}
                      >
                        Search by category
                      </a>
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
                      <a
                        href="/search-drink"
                        className={`${
                          active
                            ? "bg-[#F0EBE1] text-gray-900"
                            : "text-gray-700"
                        }
                        px-4 py-2 text-sm flex items-center
                      `}
                      >
                        Search by name
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/drink-categories"
                        className={`${
                          active
                            ? "bg-[#F0EBE1] text-gray-900"
                            : "text-gray-700"
                        }
                        px-4 py-2 text-sm flex items-center
                      `}
                      >
                        Search by category
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/drink-glasses"
                        className={`${
                          active
                            ? "bg-[#F0EBE1] text-gray-900"
                            : "text-gray-700"
                        }
                        px-4 py-2 text-sm flex items-center
                      `}
                      >
                        Search by glasses
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/drink-filter"
                        className={`${
                          active
                            ? "bg-[#F0EBE1] text-gray-900"
                            : "text-gray-700"
                        }
                        px-4 py-2 text-sm flex items-center
                      `}
                      >
                        Search by alcoholic
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}
