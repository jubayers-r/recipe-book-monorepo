import React, { use } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../context/authcontext/AuthContext";
import { CgProfile } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

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
    email,
  } = selectedRecipe;

  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/myRecipes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your recipe has been deleted.",
                icon: "success",
              });
            }
            navigate(-1);
          });
      }
    });
  };

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
              {category.map((category, index) => (
                <p
                  key={index}
                  className="font-semibold border p-1 rounded-lg hover:bg-green-600 hover:text-white"
                >
                  {category}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-2 font-black mt-5 mb-2 items-center">
          Ingredients:
          {ingredients.map((ingredient, index) => (
            <p
              key={index}
              className="font-semibold border p-1 rounded-lg hover:bg-green-600 hover:text-white"
            >
              {ingredient}
            </p>
          ))}
        </div>
        <p className="font-bold">
          Estimated making time:
          <span className="font-medium">
            {preparationTime ? `${preparationTime} Minutes` : "Not Provided"}{" "}
          </span>
        </p>
        <p className="text-2xl">{instructions}</p>
        {email && (
          <div className="mx-auto my-auto text-center ">
            <div className="flex justify-center">
              <div className="flex">
                <Link to={"/edit"}>
                  <button className="btn btn-xs sm:btn-lg sm:m-7  hover:bg-[#00ed64] hover:rounded-full hover:border hover:border-black  mt-5 flex w-fit">
                    Update <FaEdit />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-xs sm:btn-lg sm:m-7  hover:bg-[#00ed64] hover:rounded-full hover:border hover:border-black  mt-5 flex w-fit"
                >
                  Delete <FaEdit />
                </button>
              </div>
            </div>
          </div>
        )}
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
