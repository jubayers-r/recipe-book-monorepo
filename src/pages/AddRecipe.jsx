import React, { use, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../context/authcontext/AuthContext";
import { useNavigate } from "react-router";
import { Slide, Fade } from "react-awesome-reveal";

const AddRecipe = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) => prev.filter((c) => c !== value));
    }
  };

  const handleShare = (e) => {
    e.preventDefault();
    if (selectedCategories.length === 0) {
      toast.error("Please select at least one category.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // convert ingredients to an array
    const ingredientsArray = data.ingredients
      .split(",")
      .map((item) => item.trim());
    data.ingredients = ingredientsArray;
    // add category state array instead of one checkbox
    data.category = selectedCategories;
    // add useremail
    data.email = user.email;
    // like data
    data.likeCount = 0;

    fetch("https://recipe-book-app-eosin.vercel.app/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.acknowledged) {
          toast.success("Posted Successfully", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          form.reset();
          navigate("/recipes");
        }
      });
  };

  return (
    <Slide direction="left">
      <Fade duration={1000}>
        <form onSubmit={handleShare}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[70%] border p-4 mx-auto dark:bg-slate-600 dark:text-white">
            <legend className="fieldset-legend font-bold sm:text-lg lg:text-2xl text-center dark:text-white">
              Share Your Recipe to the World
            </legend>
            <label className="label">Title</label>
            <input
              dark:text-black
              name="title"
              type="text"
              className="input dark:text-black w-full"
              placeholder="Title"
              required
            />
            <label className="label">Image URL</label>
            <input
              dark:text-black
              name="image"
              type="url"
              className="input dark:text-black w-full"
              placeholder="Image URL"
            />
            <label className="label">Ingredients</label>
            <input
              dark:text-black
              name="ingredients"
              type="text"
              className="input dark:text-black w-full"
              placeholder="eg. Egg, White wine, Sugar "
              required
            />
            <label className="label">Instructions</label>
            <textarea
              name="instructions"
              className="input dark:text-black w-full min-h-[100px] resize-y rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Instructions"
              required
            ></textarea>
            <label className="label" htmlFor="cuisine">
              Cuisine Type
            </label>
            <div className="flex gap-2 items-center">
              <select
                className="bg-white h-10 rounded-sm px-2 hover:brightness-75 w-full text-black"
                id="cuisine"
                name="cuisineType"
                required
              >
                <option value="" disabled defaultValue>
                  Select Cuisine
                </option>
                <option value="italian">Italian</option>
                <option value="mexican">Mexican</option>
                <option value="indian">Indian</option>
                <option value="chinese">Chinese</option>
                <option value="japanese">Japanese</option>
                <option value="thai">Thai</option>
                <option value="french">French</option>
                <option value="greek">Greek</option>
                <option value="korean">Korean</option>
                <option value="vietnamese">Vietnamese</option>
                <option value="mediterranean">Mediterranean</option>
                <option value="middle-eastern">Middle Eastern</option>
                <option value="spanish">Spanish</option>
                <option value="american">American</option>
                <option value="african">African</option>
                <option value="caribbean">Caribbean</option>
                <option value="german">German</option>
                <option value="brazilian">Brazilian</option>
                <option value="others">Others</option>
              </select>
            </div>
            <label className="label">Preparation Time (in Minutes)</label>
            <input
              dark:text-black
              name="preparationTime"
              type="number"
              className="input dark:text-black w-full"
              placeholder="eg. 10"
            />
            <fieldset
              className="border border-gray-300 rounded-md p-4"
              required
            >
              <legend className="text-lg font-semibold mb-2 px-2">
                Categories
              </legend>
              <p className="mb-5 text-red-400">
                *(Add Atleast one category to continue)
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
                <div>
                  <input
                    dark:text-black
                    onChange={handleCategoryChange}
                    type="checkbox"
                    id="breakfast"
                    name="category"
                    value="breakfast"
                  />
                  <label htmlFor="breakfast" className="ml-2">
                    Breakfast
                  </label>
                </div>
                <div>
                  <input
                    dark:text-black
                    onChange={handleCategoryChange}
                    type="checkbox"
                    id="lunch"
                    name="category"
                    value="lunch"
                  />
                  <label htmlFor="lunch" className="ml-2">
                    Lunch
                  </label>
                </div>
                <div>
                  <input
                    dark:text-black
                    onChange={handleCategoryChange}
                    type="checkbox"
                    id="dinner"
                    name="category"
                    value="dinner"
                  />
                  <label htmlFor="dinner" className="ml-2">
                    Dinner
                  </label>
                </div>
                <div>
                  <input
                    dark:text-black
                    onChange={handleCategoryChange}
                    type="checkbox"
                    id="dessert"
                    name="category"
                    value="dessert"
                  />
                  <label htmlFor="dessert" className="ml-2">
                    Dessert
                  </label>
                </div>
                <div>
                  <input
                    dark:text-black
                    onChange={handleCategoryChange}
                    type="checkbox"
                    id="vegan"
                    name="category"
                    value="vegan"
                  />
                  <label htmlFor="vegan" className="ml-2">
                    Vegan
                  </label>
                </div>
                <div>
                  <input
                    dark:text-black
                    onChange={handleCategoryChange}
                    type="checkbox"
                    id="vegetarian"
                    name="category"
                    value="vegetarian"
                  />
                  <label htmlFor="vegetarian" className="ml-2">
                    Vegetarian
                  </label>
                </div>
                <div>
                  <input
                    dark:text-black
                    onChange={handleCategoryChange}
                    type="checkbox"
                    id="glutenFree"
                    name="category"
                    value="glutenFree"
                  />
                  <label htmlFor="glutenFree" className="ml-2">
                    Gluten-Free
                  </label>
                </div>
                <div>
                  <input
                    dark:text-black
                    onChange={handleCategoryChange}
                    type="checkbox"
                    id="keto"
                    name="category"
                    value="keto"
                  />
                  <label htmlFor="keto" className="ml-2">
                    Keto
                  </label>
                </div>
                <div>
                  <input
                    dark:text-black
                    onChange={handleCategoryChange}
                    type="checkbox"
                    id="paleo"
                    name="category"
                    value="paleo"
                  />
                  <label htmlFor="paleo" className="ml-2">
                    Paleo
                  </label>
                </div>
                <div>
                  <input
                    dark:text-black
                    onChange={handleCategoryChange}
                    type="checkbox"
                    id="snacks"
                    name="category"
                    value="snacks"
                  />
                  <label htmlFor="snacks" className="ml-2">
                    Snacks
                  </label>
                </div>
                <div>
                  <input
                    dark:text-black
                    onChange={handleCategoryChange}
                    type="checkbox"
                    id="drinks"
                    name="category"
                    value="drinks"
                  />
                  <label htmlFor="drinks" className="ml-2">
                    Drinks
                  </label>
                </div>
                <div>
                  <input
                    dark:text-black
                    onChange={handleCategoryChange}
                    type="checkbox"
                    id="appetizer"
                    name="category"
                    value="appetizer"
                  />
                  <label htmlFor="appetizer" className="ml-2">
                    Appetizer
                  </label>
                </div>
                <div>
                  <input
                    dark:text-black
                    onChange={handleCategoryChange}
                    type="checkbox"
                    id="soup"
                    name="category"
                    value="soup"
                  />
                  <label htmlFor="soup" className="ml-2">
                    Soup
                  </label>
                </div>
                <div>
                  <input
                    dark:text-black
                    onChange={handleCategoryChange}
                    type="checkbox"
                    id="salad"
                    name="category"
                    value="salad"
                  />
                  <label htmlFor="salad" className="ml-2">
                    Salad
                  </label>
                </div>
                <div>
                  <input
                    dark:text-black
                    onChange={handleCategoryChange}
                    type="checkbox"
                    id="bbq"
                    name="category"
                    value="bbq"
                  />
                  <label htmlFor="bbq" className="ml-2">
                    BBQ
                  </label>
                </div>
                <div>
                  <input
                    dark:text-black
                    onChange={handleCategoryChange}
                    type="checkbox"
                    id="holiday"
                    name="category"
                    value="holiday"
                  />
                  <label htmlFor="holiday" className="ml-2">
                    Holiday Special
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="btn justify-center mt-4 btn hover:bg-[#00ed64] hover:rounded-full hover:border hover:border-black btn-lg flex  w-fit my-3"
              >
                Post
              </button>
            </div>
          </fieldset>
        </form>
      </Fade>
    </Slide>
  );
};

export default AddRecipe;
