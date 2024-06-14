import React from "react";
import HeroSection from "./HeroSection";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Works from "./Works";
import Resume from "./Resume";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMe />
      <Works />
      <Resume />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default HomePage;
