import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import AddRecipe from "../pages/AddRecipe";
// import AllRecipes from "../pages/AllRecipes";
const AllRecipes = lazy(() => import("../pages/AllRecipes"));
const RecipeDetails = lazy(() => import("../pages/RecipeDetails"));
// import RecipeDetails from "../pages/RecipeDetails";
// import MyRecipes from "../pages/MyRecipes";
const MyRecipes = lazy(() => import("../pages/MyRecipes"));
import UpdateRecipe from "../pages/UpdateRecipe";
import PrivetRoute from "./PrivetRoute";
// import Home from "../pages/Home";
const Home = lazy(() => import("../pages/Home"));
import Dashboard from "../pages/Dashboard/Dashboard";
// import Gallery from "../pages/Gallery";
const Gallery = lazy(() => import("../pages/Gallery"));
import DashAllRecipes from "../pages/Dashboard/DashAllRecipies";
import DashboardLayout from "../layout/DashboardLayout";
import DashMyRecipes from "../pages/Dashboard/DashMyRecipies";
import LazyLoader from "../components/LazyLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LazyLoader component={Home} />,

        loader: () =>
          fetch("https://recipe-book-app-eosin.vercel.app/topRecipes"),
      },
      {
        path: "signin",
        Component: Signin,
      },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "gallery",
        element:<LazyLoader component={ Gallery} />,
      },
      {
        path: "addRecipe",
        element: (
          <PrivetRoute>
            <AddRecipe />
          </PrivetRoute>
        ),
      },
      {
        path: "recipes",
        element:<LazyLoader component={ AllRecipes} />,
        loader: () => fetch("https://recipe-book-app-eosin.vercel.app/recipes"),
      },
      {
        path: "recipeDetails/:id",
        element: (
          <PrivetRoute>
             element:<LazyLoader component={ RecipeDetails} />,
          </PrivetRoute>
        ),
        loader: () => fetch("https://recipe-book-app-eosin.vercel.app/recipes"),
      },
      {
        path: "myRecipes",
        element: (
          <PrivetRoute>
            <MyRecipes />
          </PrivetRoute>
        ),
      },

      {
        path: "edit/:id",
        element: (
          <PrivetRoute>
            <UpdateRecipe />
          </PrivetRoute>
        ),
        loader: () => fetch("https://recipe-book-app-eosin.vercel.app/recipes"),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    children: [
      {
        index: true,
        Component: Dashboard,
        loader: () => fetch("https://recipe-book-app-eosin.vercel.app/recipes"),
      },
      {
        path: "recipes",
        Component: DashAllRecipes,
        loader: () => fetch("https://recipe-book-app-eosin.vercel.app/recipes"),
      },
      {
        path: "myRecipes",
        Component: DashMyRecipes,
      },
    ],
  },
]);
