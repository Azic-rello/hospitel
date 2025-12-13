import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="relative h-[300px] md:h-[380px] w-full overflow-hidden">
        <img
          src="/assets/6fcce8f0b03205463c35480c0da07b25515c4be0.png"
          alt="Hospital"
          className="absolute inset-0 w-full h-full  object-center"
        />

        <div className="absolute inset-0 bg-blue-900/40" />

        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
          <p className="text-white text-sm mb-1">
            Home / <span className="opacity-80">About</span>
          </p>
          <h1 className="text-white text-4xl font-bold">
            About us
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="/assets/fd23e4c9ed490a90412c8dda9d2f0b3ab784eeae.jpg"
            alt="Nurses"
            className="rounded-md w-full object-cover"
          />
        </div>

        <div>
          <p className="text-blue-600 uppercase tracking-wide font-semibold mb-3">
            Welcome to Hospital Name
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Best Care for Your <br /> Good Health
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              "A Passion for Healing",
              "5-Star Care",
              "All our best",
              "Believe in Us",
              "Always Caring",
              "A Legacy of Excellence",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-600 rounded-full" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Convallis felis vitae
            tortor augue.
          </p>

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
