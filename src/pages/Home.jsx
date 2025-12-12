import Contact from "../components/Contact";
import Futer from "../components/Futer";
import Navbar from "../components/Navbar";
import News from "../components/News";
import OurDoctors from "../components/OurDoctors";
import Hero from "../components/home/Hero";
import OurServices from "../components/home/OurServices";
import OurSpecialties from "../components/home/OurSpecialties";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurServices />
      <OurSpecialties />
      <OurDoctors />
      <News />
      <Contact />
      <Futer />
    </>
  );
};

export default Home;
