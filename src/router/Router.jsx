import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import AddRecipe from "../pages/AddRecipe";
import AllRecipes from "../pages/AllRecipes";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <Error/>,
        children: [
            {
                path: 'signin',
                Component: Signin
            },
            {
                path: 'signup',
                Component: Signup
            },
            {
                path: 'addRecipe',
                Component: AddRecipe
            },
            {
                path: 'recipes',
                Component: AllRecipes,
                loader: () => fetch('http://localhost:3000/recipes')
            },
            {
                path: 'recipeDetails',
                Component: AddRecipe
            },
        ]
    }
])