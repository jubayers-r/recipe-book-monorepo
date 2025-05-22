import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/authcontext/AuthContext";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router";

const MyRecipes = () => {
  const { user, loading } = use(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!loading) {
      fetch(`http://localhost:3000/myRecipes?email=${user.email}`)
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
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
      {data ? (
        data.map((recipe) => <RecipeCard key={recipe._id} recipe={recipe} />)
      ) : (
        <div className="space-y-10 mx-auto text-center col-span-4 mt-10">
          <p className="font-bold text-2xl">You Haven't Post any recipe yet</p>
          <Link to={"/addRecipe"}>
            <button className="btn">Post Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyRecipes;
