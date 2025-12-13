const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="relative h-[300px] md:h-[380px] w-full overflow-hidden">
        <img
          src="/assets/Rectangle 3.png"
          alt="Hospital"
          className="absolute z-0 inset-0 w-full h-full"
        />
        <img
          className="absolute z-0 inset-0 w-full h-full"
          src="/assets/Rectangle 4.png"
          alt="jpg"
        />
        <img
          className="absolute z-0 inset-0 w-full h-full"
          src="/assets/Group 203.png"
          alt="jpg"
        />

        <div className="absolute inset-0 bg-blue-900/40" />

        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 text-[#2d076e]">
          <p className=" text-xl mb-1 ml-2">
            Home / <span className="opacity-80">News</span>
          </p>
          <h1 className="text-6xl font-extrabold">Blog Posts</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
