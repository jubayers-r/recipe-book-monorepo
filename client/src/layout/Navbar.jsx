import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import * as Tooltip from "@radix-ui/react-tooltip";
import { IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../context/authcontext/AuthContext";
import DarkModeToggle from "../context/themeContext/DarkModeToggle";

const navLinks = (
  <>
    <NavLink to={"/"}>
      <p className="hover:text-[#00684a] text-right">Home</p>
    </NavLink>
    <NavLink to={"/recipes"}>
      <p className="hover:text-[#00684a] text-right">All Recipes</p>
    </NavLink>
    <NavLink to={"/addRecipe"}>
      <p className="hover:text-[#00684a] text-right">Add Recipe</p>
    </NavLink>
    <NavLink to={"/myRecipes"}>
      <p className="hover:text-[#00684a] text-right">My Recipes</p>
    </NavLink>
    <NavLink to={"/gallery"}>
      <p className="hover:text-[#00684a] text-right">Gallery</p>
    </NavLink>
    <NavLink to={"/dashboard"}>
      <p className="hover:text-[#00684a] text-right">Dashboard</p>
    </NavLink>
  </>
);
const authenticationLG = (
  <div className=" hidden sm:flex gap-4 ">
    <Link to={"/signin"} className="btn btn-xs sm:btn-md lg:btn-lg lg:text-xl bg-white rounded-xl">
      Sign In
    </Link>
    <Link to={"/signup"} className="btn btn-xs sm:btn-md lg:btn-lg lg:text-xl bg-white rounded-xl">
      Sign Up
    </Link>
  </div>
);
const authenticationSM = (
  <div className="flex gap-2 my-2">
    <Link to={"/signup"} className="btn btn-xs sm:btn-md lg:btn-lg lg:text-xl">
      Sign Up
    </Link>
    <Link to={"/signin"} className="btn btn-xs sm:btn-md lg:btn-lg lg:text-xl">
      Sign In
    </Link>
  </div>
);

const Navbar = () => {
  const { user, logout, loading } = use(AuthContext);
  return (
    <div className="bg-base-100 shadow-sm rounded-2xl mt-7 px-8 py-2 sticky top-0 z-100">
      <div className=" mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
              {user ? "" : authenticationSM}
            </ul>
          </div>
          <Link to={"/"} className="text-xl">
            <div className="flex gap-2 items-center justify-center">
              <div className="w-15 hidden sm:block">
                <img
                  src="https://www.svgrepo.com/show/383674/menu-food-fork.svg"
                  alt=""
                />
              </div>
              <h3 className="text-xl sm:text-3xl lg:text-3xl font-semibold font-[Poetsen_One]">
                TasteScript
              </h3>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal px-1 gap-9 text-xl">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-7 ">
          <DarkModeToggle />
          {loading ? (
            <span className="loading loading-bars loading-xl " />
          ) : user ? (
            <Tooltip.Root>
              <div className="relative dropdown dropdown-end select-none">
                <div tabIndex={0} role="button">
                  <Tooltip.Trigger asChild>
                    <div
                      className="w-12 sm:w-18 h-12 sm:h-18 border border-gray-200 rounded-full
                        transition duration-150 ease-in-out hover:brightness-90 active:brightness-70
                        hover:shadow-md cursor-pointer"
                    >
                      {!user.photoURL ? (
                        <CgProfile className="rounded-full object-cover w-full h-full" />
                      ) : (
                        <img
                          className="rounded-full object-cover w-full h-full"
                          src={user.photoURL}
                          alt="avatar"
                        />
                      )}

                      <RiArrowDropDownLine className="sm:w-6 sm:h-6 absolute top-8 sm:top-12 left-8 sm:left-12 rounded-full border-2 border-white bg-gray-200" />
                    </div>
                  </Tooltip.Trigger>
                </div>

                {/* Dropdown Menu */}
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 min-w-80 max-w-screen p-2 shadow"
                >
                  <div className="flex rounded-lg gap-2 p-2 items-center mb-2">
                    <div className="w-10 sm:w-12 h-10 sm:h-12">
                      {!user.photoURL ? (
                        <CgProfile className="rounded-full object-cover w-full h-full" />
                      ) : (
                        <img
                          className="rounded-full object-cover w-full h-full"
                          src={user.photoURL}
                          alt="avatar"
                        />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-xl">
                        {user.displayName}
                      </p>
                      <p className=" text-lg">{user.email}</p>
                    </div>
                  </div>
                  <hr className="text-gray-300" />
                  <button
                    onClick={() => logout()}
                    className="lg:text-lg font-semibold hover:bg-gray-200 rounded-lg gap-2 p-2 flex items-center "
                  >
                    <IoLogOutOutline size={25} />
                    Sign Out
                  </button>
                </ul>
              </div>

              {/* Tooltip Content */}
              <Tooltip.Portal>
                <Tooltip.Content
                  side="bottom"
                  align="center"
                  sideOffset={8}
                  style={{
                    backgroundColor: "#3a3b3c",
                    color: "#fff",
                    padding: "6px 12px",
                    borderRadius: "12px",
                    fontSize: "14px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    zIndex: 9999,
                    userSelect: "none",
                  }}
                >
                  Account
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          ) : (
            authenticationLG
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
