import React from "react";
import { useLoaderData } from "react-router";
import TopRecipes from "../components/TopRecipes";
import FAQ from "../components/FAQ";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import TrustedCompaniesSection from "../components/TrustedCompaniesSection";

const Home = () => {
  const topRecipes = useLoaderData();
  return (
    <div>
      <Hero/>
      <TopRecipes topRecipes={topRecipes} />
      <Banner/>
      <TrustedCompaniesSection/>
      <FAQ/>
    </div>
  );
};

export default Home;
