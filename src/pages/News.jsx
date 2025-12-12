import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/News/Hero";
import Card from "../components/News/Card";
import Contact from "../components/Contact";
import Futer from "../components/Futer";

const News = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Contact />
      <Futer />
    </>
  );
};

export default News;
