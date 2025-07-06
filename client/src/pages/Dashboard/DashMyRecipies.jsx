import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router";
import { AuthContext } from "../../context/authcontext/AuthContext";

const DashMyRecipes = () => {
  const { user, loading } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!loading && user?.email) {
      fetch(
        `https://recipe-book-app-eosin.vercel.app/myRecipes?email=${user.email}`
        // `https://recipe-book-app-eosin.vercel.app/recipes`
      )
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  }, [loading, user]);

  if (loading) {
    return (
      <span className="loading loading-bars loading-xl flex mx-auto"></span>
    );
  }

  const handleRowClick = (recipe) => {
    // For example: Navigate to recipe detail page or do something
    console.log("Clicked recipe:", recipe);
    // You can use react-router's useNavigate here if needed
  };

  return (
    <div className="p-4 ">
      <h3 className=" text-2xl sm:text-3xl my-5 text-center font-bold">
        My Posts
      </h3>

      {data.length === 0 ? (
        <div className="space-y-10 mx-auto text-center mt-10">
          <p className="font-bold text-2xl ">
            You Haven't posted any recipe yet
          </p>
          <Link to="/addRecipe">
            <button className="btn">Post Now</button>
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300  rounded-lg overflow-hidden">
            <thead className="bg-gray-200 ">
              <tr>
                <th className="text-left px-4 py-2 border-b border-gray-300">
                  Title
                </th>
                <th className="text-left px-4 py-2 border-b border-gray-300">
                  Cuisine Type
                </th>
                <th className="text-left px-4 py-2 border-b border-gray-300">
                  People Liked
                </th>
                {/* Add other columns if needed */}
              </tr>
            </thead>
            <tbody>
              {data.map((recipe) => (
                <tr
                  key={recipe._id}
                  className="hover:bg-gray-100  cursor-pointer"
                  onClick={() => handleRowClick(recipe)}
                >
                  <td className="px-4 py-3 border-b border-gray-300">
                    {recipe.title}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-300">
                    {recipe.cuisineType}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-300">
                    {recipe.likeCount || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashMyRecipes;
