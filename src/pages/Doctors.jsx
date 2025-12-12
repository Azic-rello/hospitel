import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Doctors/Hero";
import Card from "../components/Doctors/Card";
import Info from "../components/Info";
import News from "../components/News";
import Contact from "../components/Contact";
import Futer from "../components/Futer";

const Doctors = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Info />
      <News />
      <Contact />
      <Futer />
    </>
  );
};

export default Doctors;
