import React from "react";

const AddRecipe = () => {
  return (
    <div>
      <form>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[70%] border p-4 mx-auto">
          <legend className="fieldset-legend font-bold sm:text-lg lg:text-2xl text-center">
            Share Your Recipe to the World
          </legend>

          <label className="label">Title</label>
          <input type="text" className="input w-full" placeholder="Title" required />
          <label className="label">Image URL</label>
          <input type="url" className="input w-full" placeholder="Image URL" />
          <label className="label">Ingredients</label>
          <input
            type="text"
            className="input w-full"
            placeholder="eg. Egg Yogurt Sugar"
            required
          />
          <label className="label">Instructions</label>
          <textarea
            className="input w-full min-h-[100px] resize-y rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Instructions"
            required
          ></textarea>
          <label className="label" htmlFor="cuisine">
            Cuisine Type
          </label>
          <div className="flex gap-2 items-center">
            <select
              className="bg-white h-10 rounded-sm px-2 hover:brightness-75 w-full"
              id="cuisine"
              name="cuisine"
              required
            >
              <option value="" disabled selected>
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
          <input type="number" className="input w-full" placeholder="eg. 10" />
          <fieldset className="border border-gray-300 rounded-md p-4">
            <legend className="text-lg font-semibold mb-2 px-2">
              Categories
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
              <div>
                <input
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
                <input type="checkbox" id="keto" name="category" value="keto" />
                <label htmlFor="keto" className="ml-2">
                  Keto
                </label>
              </div>
              <div>
                <input
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
                <input type="checkbox" id="soup" name="category" value="soup" />
                <label htmlFor="soup" className="ml-2">
                  Soup
                </label>
              </div>
              <div>
                <input
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
                <input type="checkbox" id="bbq" name="category" value="bbq" />
                <label htmlFor="bbq" className="ml-2">
                  BBQ
                </label>
              </div>
              <div>
                <input
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
          <button className="btn btn-neutral mt-4">Post</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddRecipe;
