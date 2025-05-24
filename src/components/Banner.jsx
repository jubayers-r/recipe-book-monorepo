import { Slide, Fade } from "react-awesome-reveal";
import { Link } from "react-router";

const Banner = () => {
  return (
    <Slide direction="left">
      <Fade duration={1000}>
        <section className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24 my-20 rounded-4xl w-9/11 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Block */}
            <div>
              <h3 className="text-3xl sm:text-5xl font-semibold font-[Poetsen_One] my-5">
                TasteScript
              </h3>
              <h2 className="text-2xl sm:text-4xl  font-bold mb-4 font-[Playwrite_HU]">
                Your ultimate kitchen companion.
              </h2>
              <p className="text-lg mb-6">
                Tried, tested & loved by thousands of home cooks. TasteScript is
                free to use
                <span className="block text-sm text-gray-300 mt-1">
                  * With OpenSource Codebase
                </span>
              </p>
              <Link to={"/signin"}>
                <button href="/get-started" className="btn">
                  GET STARTED
                </button>
              </Link>
            </div>

            {/* Image Block */}
            <div>
              <img
                src="https://cdn.prod.website-files.com/63bb7fe09d70bb7dc8e86719/63d1db61192f1ded4ea55b61_All-recipes---phone-recipe-no-padding%20(1).webp"
                alt="CookBook mobile preview"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </section>
      </Fade>
    </Slide>
  );
};

export default Banner;
