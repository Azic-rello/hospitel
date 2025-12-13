import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="relative h-[300px] md:h-[380px] w-full overflow-hidden">
        <img
          src="/assets/2774587a7039a2fd00b07bdbf3cd43b8d71b2b1b.jpg"
          alt="Hospital"
          className="absolute inset-0 w-full h-full  object-center"
        />

        <div className="absolute inset-0 bg-blue-900/40" />

        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
          <p className="text-white text-sm mb-1">
            Home / <span className="opacity-80">About</span>
          </p>
          <h1 className="text-white text-4xl font-bold">
            Blog Posts
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;