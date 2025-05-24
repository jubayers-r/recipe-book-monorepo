import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/authcontext/AuthContext";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router";

const MyRecipes = () => {
  const { user, loading } = use(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!loading) {
      fetch(
        `https://recipe-book-app-eosin.vercel.app/myRecipes?email=${user.email}`
      )
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  }, [loading]);
  if (loading) {
    return (
      <span className="loading loading-bars loading-xl flex mx-auto"></span>
    );
  }
  return (
    <div className=" w-9/11 mx-auto">
      <h3 className="dark:text-white text-2xl sm:text-3xl my-5 text-center font-bold">My Posts</h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.length == 0 ? (
        <div className="space-y-10 mx-auto text-center col-span-4 mt-10">
          <p className="font-bold text-2xl dark:text-white">You Haven't Post any recipe yet</p>
          <Link to={"/addRecipe"}>
            <button className="btn">Post Now</button>
          </Link>
        </div>
      ) : (
        data.map((recipe) => <RecipeCard key={recipe._id} recipe={recipe} />)
      )}
      </div>
    </div>
  );
};

export default MyRecipes;
