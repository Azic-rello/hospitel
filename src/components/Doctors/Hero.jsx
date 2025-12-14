import hero from "../../../public/assets/aboutHero.png";
import shakil from "../../../public/assets/Group 203.png";
import hira from "../../../public/assets/Rectangle 4.png";
const Hero = () => {
  return (
    <section
      className="h-[250px]  bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <img className="w-full h-[250px]" src={shakil} alt="" />
      <img className="w-full h-[250px] -mt-64" src={hira} alt="" />
      <div className="grid relative -mt-43 ml-58 h-full text-[#2d076e]">
        <p className="text-lg md:text-2xl">Home / Doctors</p>
        <h1 className="text-4xl md:text-6xl mt-7 -left-4 font-bold absolute">
          Our Doctors
        </h1>
      </div>
    </section>
  );
};

export default Hero;
