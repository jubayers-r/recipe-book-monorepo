import React, { useState, useEffect, use } from "react";
import { useLoaderData, useParams } from "react-router";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { CiHeart } from "react-icons/ci";
import UpdateRecipe from "./UpdateRecipe";
import { AuthContext } from "../context/authcontext/AuthContext";

const RecipeDetails = () => {
  // dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initially if 'dark' class exists
    setIsDarkMode(document.documentElement.classList.contains("dark"));

    // Optional: observe changes to html classList (if you toggle dark mode dynamically)
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // dark mode

  const { user } = use(AuthContext);

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
    if (email == user.email) {
      Swal.fire({
        title: "Sorry! You Cannot Like Your Own Post Bruh :)",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/nyancat-rainbow-cat.gif")
          left 100px
          no-repeat
        `,
      });
    } else {
      const updatedLike = like + 1;
      fetch(`https://recipe-book-app-eosin.vercel.app/recipes/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ like: updatedLike }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.modifiedCount) {
            setLike((prev) => prev + 1);
          }
        })
        .catch((err) => {
          console.error("Like failed:", err);
        });
    }
  };

  return (
    <div className="dark:text-white ">
      <p className="text-2xl font-semibold p-7 text-center ">
        {like} people are interested in this recipe
      </p>

      <div className="p-5 border rounded-lg my-10 mx-auto flex flex-col w-[70%] bg-white dark:bg-[#373737a1]">
        <div className="flex flex-col md:flex-row ">
          <div className="w-full md:w-[50%]">
            <img
              className="rounded-lg"
              src={
                image
                  ? image
                  : isDarkMode
                  ? "https://cdn-icons-png.flaticon.com/512/3875/3875172.png" // dark mode fallback image
                  : "https://cdn-icons-png.flaticon.com/512/3875/3875148.png" // light mode fallback image
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
            <div
              className=" hover:bg-red-500 hover:text-white hover:rounded-full "
              onClick={handleLike}
            >
              <CiHeart size={40} />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-9 gap-2 font-black mt-5 mb-2 items-center text-center">
          <h3 className="border-b-1 w-fit sm:text-xl">Ingredients:</h3>
          {ingredients.map((ingredient, index) => (
            <p
              key={index}
              className="font-semibold border p-1 rounded-lg hover:bg-green-600 hover:text-white"
            >
              {ingredient}
            </p>
          ))}
        </div>
        <div className="grid gap-3">
          <p className="font-bold">
            <span className="border-b-1 sm:text-xl">
              {" "}
              Estimated making time:
            </span>
            <span className="font-medium sm:text-xl">
              {preparationTime ? ` ${preparationTime} Minutes` : "Not Provided"}{" "}
            </span>
          </p>
          <p className="sm:text-xl">
            <span className="font-bold border-b-1 ">
              Here the instruction goes:
            </span>{" "}
            {instructions}
          </p>
        </div>
        {email == user.email && (
          <div className="mx-auto my-auto text-center ">
            <div className="flex gap-2">
              <Link to={`/edit/${_id}`}>
                <button></button>
              </Link>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn btn-xs sm:btn-lg sm:m-7  hover:bg-[#00ed64] hover:rounded-full hover:border hover:border-black  mt-5 flex w-fit"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Update <FaEdit />
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <UpdateRecipe />
                </div>
              </dialog>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-xs sm:btn-lg sm:m-7  hover:bg-[#00ed64] hover:rounded-full hover:border hover:border-black  mt-5 flex w-fit"
              >
                Delete <FaEdit />
              </button>
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
