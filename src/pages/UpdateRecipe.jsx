import React, { use, useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../context/authcontext/AuthContext";
import { useLoaderData, useNavigate, useParams } from "react-router";

const UpdateRecipe = () => {
  const navigate = useNavigate();
  const id = useParams().id;
  const recipeData = useLoaderData();
  const selectedRecipe = recipeData.find((data) => data._id == id);

  const { user } = use(AuthContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  useEffect(() => {
    setSelectedCategories(selectedRecipe.category);
  }, []);
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;

    // interesting operation, that i dont forget the thinking way, in the future

    // 1. Take the old selected list (array)
    setSelectedCategories((prev) => {
      // 2. Convert to a Set (to modify easily)
      const categories = new Set(prev); //set also provides add/delete that makes operations easy

      // 3. Add or remove based on checkbox interaction
      if (checked) {
        categories.add(value); // Set { "breakfast", "lunch", "dinner" }
      } else {
        categories.delete(value); // Set { "breakfast", "dinner" }
      }

      // 4. Convert back to array for state
      return Array.from(categories); // ["breakfast", "dinner"]
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
      if (selectedCategories.length === 0) {
          toast.error("Please select at least one category.", {
            position: "top-right",
            autoClose: 5000,
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

    fetch(`https://recipe-book-app-eosin.vercel.app/myRecipes/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.modifiedCount) {
          toast.success("Post Updated Successfully", {
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
        }
        navigate(`/recipeDetails/${id}`);
        document.getElementById("my_modal_1").close();
      });
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[70%] border p-4 mx-auto dark:bg-slate-600 dark:text-white">
          <legend className="fieldset-legend font-bold sm:text-lg lg:text-2xl text-center">
            Update Your Recipe
          </legend>
          <label className="label">Title</label>
          <input
            dark:text-black
            name="title"
            type="text"
            className="input dark:text-black w-full"
            placeholder="Title"
            required
            defaultValue={selectedRecipe.title}
          />
          <label className="label">Image URL</label>
          <input
            dark:text-black
            name="image"
            type="url"
            className="input dark:text-black w-full"
            placeholder="Image URL"
            defaultValue={selectedRecipe.image}
          />
          <label className="label">Ingredients</label>
          <input
            dark:text-black
            name="ingredients"
            type="text"
            className="input dark:text-black w-full"
            placeholder="eg. Egg, White wine, Sugar "
            required
            defaultValue={selectedRecipe.ingredients}
          />
          <label className="label">Instructions</label>
          <textarea
            name="instructions"
            className="input dark:text-black w-full min-h-[100px] resize-y rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Instructions"
            required
            defaultValue={selectedRecipe.instructions}
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
            defaultValue={selectedRecipe.preparationTime}
          />
          <fieldset className="border border-gray-300 rounded-md p-4">
            <legend className="text-lg font-semibold mb-2 px-2">
              Categories
            </legend>
            <p className="mb-5 text-red-500">*(Add Atleast one category to continue)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div>
                <input
                  dark:text-black
                  onChange={handleCategoryChange}
                  type="checkbox"
                  id="breakfast"
                  name="category"
                  value="breakfast"
                  checked={selectedCategories.includes("breakfast")}
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
                  checked={selectedCategories.includes("lunch")}
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
                  checked={selectedCategories.includes("dinner")}
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
                  checked={selectedCategories.includes("dessert")}
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
                  checked={selectedCategories.includes("vegan")}
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
                  checked={selectedCategories.includes("vegetarian")}
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
                  checked={selectedCategories.includes("glutenFree")}
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
                  checked={selectedCategories.includes("keto")}
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
                  checked={selectedCategories.includes("paleo")}
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
                  checked={selectedCategories.includes("snacks")}
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
                  checked={selectedCategories.includes("drinks")}
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
                  checked={selectedCategories.includes("appetizer")}
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
                  checked={selectedCategories.includes("soup")}
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
                  checked={selectedCategories.includes("salad")}
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
                  checked={selectedCategories.includes("bbq")}
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
                  checked={selectedCategories.includes("holiday")}
                />
                <label htmlFor="holiday" className="ml-2">
                  Holiday Special
                </label>
              </div>
            </div>
          </fieldset>
          <button type="submit" className="btn btn-neutral mt-4">
            Update
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateRecipe;
