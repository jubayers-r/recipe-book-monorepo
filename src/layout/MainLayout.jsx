import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    const location = useLocation();

    useEffect(() => {
      const path = location.pathname;
      if (path === "/") {
        document.title = "TasteScript - Home";
      } else if (path === "/recipes") {
        document.title = "All Recipe List";
      } else if (path === "/addRecipe") {
        document.title = "Share a Recipe";
      } else if (path === "/myRecipes") {
        document.title = "My Recipe List";
      } else if (path.startsWith("/recipeDetails/:id")) {
        document.title = "Recipe Details";
      }
    }, [location]);
  return (
    <div className="min-h-screen flex flex-col dark:bg-black">
      <Navbar />
      <hr className="text-gray-200" />
      <main className="flex-grow flex flex-col justify-center mb-15">
        <Outlet />
      </main>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default MainLayout;
