import React from "react";
import { CiHeart } from "react-icons/ci";
import { LiaComments } from "react-icons/lia";
import { FaShareAlt } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
  const {
    image,
    title,
    ingredients,
    instructions,
    cuisineType,
    preparationTime,
    category,
    likeCount,
  } = recipe;
// truncation function for show more ux
  const maxWords = 12;
  const truncatedInstructions = instructions
    ? instructions.split(" ").slice(0, maxWords).join(" ") +
      (instructions.split(" ").length > maxWords ? "..." : "")
    : "No instructions provided.";

  console.log(cuisineType);
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="w-full h-50">
        <img src={image} alt={title} className=" object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{cuisineType}</div>
        </h2>
        <p>{truncatedInstructions}</p>
        <div className="card-actions justify-end">
          {
            // category?.map((cat, index) => <div key={index} className="badge badge-outline">{cat}</div>)
          }
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 justify-center w-[80%] mx-auto">
        <div className="btn "><CiHeart size={25} /> {likeCount}</div>
        <div className="btn "><LiaComments size={25} /> Discussion</div>

      </div>
      <div className="flex justify-center my-2">
      <button className="btn w-fit">Read Full Recipe</button>
      </div>
    </div>
  );
};

export default RecipeCard;
