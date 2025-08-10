import React from "react";
import Banner from "../pages/Banner";
import FeaturedPackages from "../components/FeaturedPackages";
import BecomeGuide from "../components/BecomeGuide";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import MostPopularPackages from "../components/MostPopularPackages";
import ClientExperienceCards from "../components/ClientExperinceCards";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedPackages></FeaturedPackages>

      <MostPopularPackages></MostPopularPackages>

      <BecomeGuide></BecomeGuide>
      <ClientExperienceCards></ClientExperienceCards>
      <FAQ></FAQ>

      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
