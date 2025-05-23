import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { CiHeart } from "react-icons/ci";
import { handleLikeAPI } from "../API/handleLikeAPI";

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
        fetch(`https://recipe-book-app-eosin.vercel.app/myRecipes/${id}`, {
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

  const [like, setLike] = useState(likeCount);
  const handleLike = () => {
    handleLikeAPI(_id, like, email).then(
      (res) => res == "Approved" && setLike(like + 1)
    );
  };

  return (
    <div>
      <p className="text-2xl font-semibold p-7 text-center ">
        {like} people are interested in this recipe
      </p>

      <div className="p-5 border rounded-lg my-10 mx-auto flex flex-col w-[70%] ">
        <div className="flex flex-col md:flex-row ">
          <div className="w-full md:w-[50%]">
            <img
              className="rounded-lg"
              src={
                image
                  ? image
                  : "https://cdn-icons-png.flaticon.com/512/3875/3875148.png"
              }
              alt={title}
            />
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
            <div className="btn " onClick={handleLike}>
              <CiHeart size={25} /> {like}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-9 gap-2 font-black mt-5 mb-2 items-center text-center">
          <h3 className="border-b-1 w-fit">Ingredients:</h3>
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
          <span className="border-b-1"> Estimated making time:</span>
          <span className="font-medium">
            {preparationTime ? ` ${preparationTime} Minutes` : "Not Provided"}{" "}
          </span>
        </p>
        <p className="text-xl">
          <span className="font-bold border-b-1">
            Here the instruction goes:
          </span>{" "}
          {instructions}
        </p>
        {email && (
          <div className="mx-auto my-auto text-center ">
            <div className="flex justify-center">
              <div className="flex">
                <Link to={`/edit/${_id}`}>
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
