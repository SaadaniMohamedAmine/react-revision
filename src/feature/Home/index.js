import React from "react";
import Navbar from "../../components/Navbar";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import About from "./sections/About";
import "./style.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
    </>
  );
};

export default HomePage;
