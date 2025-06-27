import { CiHeart } from "react-icons/ci";
import { LiaComments } from "react-icons/lia";
import { Link } from "react-router";
import { Slide, Fade } from "react-awesome-reveal";

const RecipeCard = ({ recipe }) => {
  const { image, title, instructions, cuisineType, likeCount, _id } = recipe;
  // truncation function for show more ux
  const maxWords = 10;
  const truncatedInstructions = instructions
    ? instructions.split(" ").slice(0, maxWords).join(" ") +
      (instructions.split(" ").length > maxWords ? "..." : "")
    : "No instructions provided.";

  return (
    <Slide direction="left">
      <Fade duration={1000}>
        <div className="card bg-base-100 shadow-sm hover:shadow-lg dark:shadow-white pb-2">
          <figure className="w-full h-50">
            <Link to={`/recipeDetails/${_id}`}>
              <img
                src={
                  image
                    ? image
                    : "https://cdn-icons-png.flaticon.com/512/3875/3875148.png"
                }
                alt={title}
                className=" object-cover hover:brightness-105 h-65"
              />
            </Link>
          </figure>
          <div className="card-body py-3">
            <div className="flex flex-col sm:flex-row sm:gap-5 gap-2 items-center">
              <Link to={`/recipeDetails/${_id}`}>
                <h2 className="card-title hover:border-b border-[#00684a]  hover:text-[#00684a] ">
                  {title}
                </h2>
              </Link>
            </div>
            <div className="badge badge-secondary ">{cuisineType}</div>
            {/* <div className="card-actions justify-end grid grid-cols-2 2xl:grid-cols-3">
              {category.map((category, index) => (
                <p
                  key={index}
                  className="font-semibold border p-1 rounded-lg hover:bg-green-600 hover:text-white text-center"
                >
                  {category}
                </p>
              ))}
            </div> */}
            <p className="h-[40px]">{truncatedInstructions}</p>
          </div>

          <div className="flex gap-3 justify-center my-2">
            <Link to={`/recipeDetails/${_id}`}>
              <button className="btn btn-lg">
                <CiHeart size={25} /> {likeCount}
              </button>
            </Link>
            <Link to={`/recipeDetails/${_id}`}>
              <button className="btn btn-lg">See More</button>
            </Link>
          </div>
        </div>
      </Fade>
    </Slide>
  );
};

export default RecipeCard;
