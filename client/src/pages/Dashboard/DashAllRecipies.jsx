import React, { useState } from "react";
import { useLoaderData } from "react-router";

const DashAllRecipes = () => {
  const recipesData = useLoaderData();
  const [type, setType] = useState("Default");
  const [sort, setSort] = useState("Release Time");
  const [query, setQuery] = useState("");

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handleRowClick = (recipe) => {
    // Example: Navigate to recipe detail or do something on click
    // For now just log
    console.log("Clicked recipe:", recipe);
    // You could also use react-router's useNavigate here:
    // navigate(`/recipes/${recipe._id}`);
  };

  const filteredData = recipesData
    .filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    )
    .filter((recipe) => (type === "Default" ? true : recipe.cuisineType === type))
    .sort((a, b) => {
      if (sort === "Ascending (A-Z)") {
        return a.title.localeCompare(b.title);
      } else if (sort === "Descending (Z-A)") {
        return b.title.localeCompare(a.title);
      } else {
        return 0; // No sorting
      }
    });

  return (
    <div className="p-4">
      <input
        placeholder="Search"
        className="w-full text-center text-xl my-5 px-4 py-3 rounded-xl border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#2e8251] "
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />

      <div className="flex flex-col lg:flex-row justify-between items-center mb-5">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-5 ">
          Taste Your Buds Out
        </h3>

        <div className="grid md:flex gap-5 py-1">
          <div className="flex gap-2 items-center">
            <p className="">Sort by:</p>
            <select
              onChange={handleSort}
              className="bg-white lg:h-10 h-8 rounded-sm px-2 hover:brightness-75"
              value={sort}
            >
              <option>Release Time</option>
              <option>Ascending (A-Z)</option>
              <option>Descending (Z-A)</option>
            </select>
          </div>

          <div className="flex gap-2 items-center">
            <p className="">Filter by:</p>
            <select
              onChange={handleType}
              className="bg-white lg:h-10 h-8 rounded-sm px-2 hover:brightness-75"
              value={type}
            >
              <option>Default</option>
              {[...new Set(recipesData.map((data) => data.cuisineType))].map(
                (type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
      </div>

      {filteredData.length ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300  rounded-lg overflow-hidden">
            <thead className="bg-gray-200 ">
              <tr>
                <th className="text-left px-4 py-2 border-b border-gray-300  cursor-pointer">
                  Title
                </th>
                <th className="text-left px-4 py-2 border-b border-gray-300  cursor-pointer">
                  Cuisine Type
                </th>
                <th className="text-left px-4 py-2 border-b border-gray-300  cursor-pointer">
                  People Liked
                </th>
                {/* Add more columns here as needed */}
              </tr>
            </thead>

            <tbody>
              {filteredData.map((recipe) => (
                <tr
                  key={recipe._id}
                  className="hover:bg-gray-100  cursor-pointer"
                  onClick={() => handleRowClick(recipe)}
                >
                  <td className="px-4 py-3 border-b border-gray-300 ">
                    {recipe.title}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-300 ">
                    {recipe.cuisineType}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-300 ">
                    {recipe.likeCount || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-full text-center py-10">
          <h3 className="text-2xl font-semibold ">No Data Found</h3>
        </div>
      )}
    </div>
  );
};

export default DashAllRecipes;
