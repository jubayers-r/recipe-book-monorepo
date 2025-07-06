import React from "react";
import { useLoaderData } from "react-router";
import TopRecipes from "../components/TopRecipes";
import FAQ from "../components/FAQ";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import TrustedCompaniesSection from "../components/TrustedCompaniesSection";
import NewsletterCard from "../components/Newsletter";

const Home = () => {
  const topRecipes = useLoaderData();
  return (
    <>
      <Hero/>
      <TopRecipes topRecipes={topRecipes} />
      <Banner/>
      <TrustedCompaniesSection/>
      <FAQ/>
      <NewsletterCard/>
    </>
  );
};

export default Home;
