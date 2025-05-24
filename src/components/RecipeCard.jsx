import { CiHeart } from "react-icons/ci";
import { LiaComments } from "react-icons/lia";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
  const { image, title, instructions, cuisineType, category, likeCount, _id } =
    recipe;
  // truncation function for show more ux
  const maxWords = 12;
  const truncatedInstructions = instructions
    ? instructions.split(" ").slice(0, maxWords).join(" ") +
      (instructions.split(" ").length > maxWords ? "..." : "")
    : "No instructions provided.";

  return (
    <div className="card bg-base-100 shadow-sm ">
      <figure className="w-full h-50">
        <img
          src={
            image
              ? image
              : "https://cdn-icons-png.flaticon.com/512/3875/3875148.png"
          }
          alt={title}
          className=" object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex flex-col sm:flex-row sm:gap-5 gap-2 items-center">
          <h2 className="card-title">{title}</h2>
          <div className="badge badge-secondary ">{cuisineType}</div>
        </div>
        <div className="card-actions justify-end grid grid-cols-2 2xl:grid-cols-3">
          {category.map((category, index) => (
            <p
              key={index}
              className="font-semibold border p-1 rounded-lg hover:bg-green-600 hover:text-white text-center"
            >
              {category}
            </p>
          ))}
        </div>
        <p>{truncatedInstructions}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 justify-center w-[80%] mx-auto">
        <div className="btn">
          <CiHeart size={25} /> {likeCount}
        </div>
        <div className="btn ">
          <LiaComments size={25} /> Discussion
        </div>
      </div>
      <div className="flex justify-center my-2">
        <Link to={`/recipeDetails/${_id}`}>
          <button className="btn w-fit">Read Full Recipe</button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
