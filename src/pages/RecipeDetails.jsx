import React, { use } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../context/authcontext/AuthContext";
import { CgProfile } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const RecipeDetails = () => {
  const mongoId = useParams().id;
  const recipesData = useLoaderData();

  const selectedRecipe = recipesData.find((recipe) => recipe._id === mongoId);
  const {
    image,
    title,
    ingredients,
    instructions,
    cuisineType,
    preparationTime,
    category,
    likeCount,
    _id,
  } = selectedRecipe;

  const { user } = use(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-2xl font-semibold p-7 text-center">
        {likeCount} people liked this recipe
      </p>

      <div className="p-5 border rounded-lg my-10 mx-auto flex flex-col w-[70%]  ">
        <div className="flex">
          <div className="w-[50%]  flex ">
            <img className="rounded-lg " src={image} alt={title} />
          </div>
          <div className="place-items-center mx-auto my-auto">
            <h3 className="sm:text-4xl font-semibold">{title}</h3>
            <h3 className="sm:text-lg my-2">({cuisineType})</h3>
            <div className="flex gap-2 font-black my-2 items-center">
              {category.map((ingredient) => (
                <p className="font-semibold border p-1 rounded-lg hover:bg-green-600 hover:text-white">
                  {ingredient}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-2 font-black mt-5 items-center">
          Ingredients:
          {ingredients.map((ingredient) => (
            <p className="font-semibold border p-1 rounded-lg hover:bg-green-600 hover:text-white">
              {ingredient}
            </p>
          ))}
        </div>
        <p className="font-bold">
          Estimated making time:{" "}
          <span className="font-medium">{preparationTime} Minutes</span>
        </p>
        <p className="text-2xl">{instructions}</p>
        {/* <div className="mx-auto my-auto text-center ">
          <div className="flex justify-center">
            <Link to={"/edit"}>
              <button className="btn btn-xs sm:btn-lg sm:m-7  hover:bg-[#00ed64] hover:rounded-full hover:border hover:border-black  mt-5 flex w-fit">
                Update <FaEdit />
              </button>
            </Link>
          </div>
        </div> */}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate(-1)}
          className="btn hover:bg-[#00ed64] hover:rounded-full hover:border hover:border-black  mt-5 btn-lg flex w-fit"
        >
          Go to the previous page
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
