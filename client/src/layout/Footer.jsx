import { Link } from "react-router";
export const links = (
  <>
    <Link to={"/"}>
      <p className="hover:border-b hover:text-[#00684a]  border-[#00684a]  text-right">
        Home
      </p>
    </Link>
    <Link to={"/recipes"}>
      <p className="hover:border-b hover:text-[#00684a]  border-[#00684a]  text-right">
        All Recipes
      </p>
    </Link>
    <Link to={"/addRecipe"}>
      <p className="hover:border-b hover:text-[#00684a]  border-[#00684a]  text-right">
        Add Recipe
      </p>
    </Link>
    <Link to={"/myRecipes"}>
      <p className="hover:border-b hover:text-[#00684a]  border-[#00684a]  text-right">
        My Recipes
      </p>
    </Link>
    <Link to={"/support"}>
      <p className="hover:border-b hover:text-[#00684a]  border-[#00684a]  text-right">
        Support
      </p>
    </Link>
  </>
);

const Footer = () => {
  return (
    <footer className=" bg-black rounded-3xl footer footer-horizontal text-white dark:bg-white dark:text-black footer-center  my-10 ">
      <div className=" footer place-items-center  py-20 px-5 md:px-20 pb-0 grid mx-auto gap-6">
        <div className="text-md sm:text-xl text-center">
          <div className="w-15 hidden sm:block mx-auto">
            <img
              src="https://www.svgrepo.com/show/383674/menu-food-fork.svg"
              alt=""
            />
          </div>
          <h3 className="font-bold font-[Poetsen_One] text-lg sm:text-2xl w-full">
            TasteScript
          </h3>
          <p className="font-[Playwrite_HU]">Recipes, Written to Remember.</p>
        </div>
        {/* <div className="sm:text-lg/7 place-items-center text-center xl:col-span-2 ">
            <p className="font-bold">Office Address</p>
            <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
            <p>Support: help@tastescript.com</p>
            <p> Helpline: 01322-901105 , 01322-810874</p>
            <p> (Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
          </div> */}

        <hr className="border-dashed text-white dark:text-black  w-full mt-3" />
        <nav className="flex flex-wrap justify-center gap-10 text-lg font-medium">
          {links}
        </nav>
        <hr className="border-dashed text-white dark:text-black  w-full mb-3" />

        <nav className="xl:navbar-center xl:grid place-items-center">
          <div className="grid grid-flow-col gap-5">
            <a href="https://x.com/jubayers_r">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://youtube.com/@jubayers_r">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
      <div>
        <p className="footer sm:footer-horizontal footer-center  p-4 text-lg">
          © TasteScript {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
