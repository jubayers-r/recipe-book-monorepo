import React from "react";
import Hero from "../components/Hero";
import { useLoaderData } from "react-router";
import TopRecipes from "../components/TopRecipes";

const Home = () => {
  const topRecipes = useLoaderData();
  return (
    <div>
      <TopRecipes topRecipes={topRecipes} />
    </div>
  );
};

export default Home;
