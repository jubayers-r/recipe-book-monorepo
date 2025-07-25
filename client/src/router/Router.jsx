import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import AddRecipe from "../pages/AddRecipe";
import AllRecipes from "../pages/AllRecipes";
import RecipeDetails from "../pages/RecipeDetails";
import MyRecipes from "../pages/MyRecipes";
import UpdateRecipe from "../pages/UpdateRecipe";
import PrivetRoute from "./PrivetRoute";
import Home from "../pages/Home";
import Support from "../components/Support";
import Dashboard from "../pages/Dashboard/Dashboard";
import Gallery from "../pages/Gallery";
import DashAllRecipes from "../pages/Dashboard/DashAllRecipies";
import DashboardLayout from "../layout/DashboardLayout";
import DashMyRecipes from "../pages/Dashboard/DashMyRecipies";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
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
        Component: Gallery,
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
        Component: AllRecipes,
        loader: () => fetch("https://recipe-book-app-eosin.vercel.app/recipes"),
      },
      {
        path: "recipeDetails/:id",
        element: (
          <PrivetRoute>
            <RecipeDetails />
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
