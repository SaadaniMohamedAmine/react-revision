import React from "react";
import Navbar from "../../components/Navbar";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import About from "./sections/About";
import "./style.css";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
