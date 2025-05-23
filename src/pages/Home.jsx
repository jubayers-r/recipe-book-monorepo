import React from "react";
import { useLoaderData } from "react-router";
import TopRecipes from "../components/TopRecipes";
import FAQ from "../components/FAQ";
import Banner from "../components/Banner";

const Home = () => {
  const topRecipes = useLoaderData();
  return (
    <div>
      <TopRecipes topRecipes={topRecipes} />
      <Banner/>
      <FAQ/>
    </div>
  );
};

export default Home;
