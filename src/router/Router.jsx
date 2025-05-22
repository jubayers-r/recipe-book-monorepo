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
                path: 'recipeDetails/:id',
                Component: RecipeDetails,
                loader: () => fetch('http://localhost:3000/recipes')
            },
            {
                path: 'myRecipes',
                Component: MyRecipes,
            },
            {
                path: 'edit',
                Component: UpdateRecipe,
            },
        ]
    }
])