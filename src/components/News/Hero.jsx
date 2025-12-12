export default function Hero() {
  return (
    <div
      className="w-full h-[300px] md:h-[400px] bg-cover bg-center relative flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(0, 123, 255, 0.65), rgba(0, 200, 180, 0.65))
        `
      }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50"></div>

      <div className="absolute w-40 h-40 bg-white/10 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-32 h-32 bg-white/10 blur-3xl rounded-full bottom-10 right-16"></div>

      <div className="relative text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg tracking-wide">
          Our News
        </h1>
        <p className="text-md md:text-xl mt-4 text-white/90">
          Latest medical updates & articles
        </p>

        <div className="mt-4 mx-auto w-24 h-1 bg-white/70 rounded-full"></div>
      </div>
    </div>
  );
}
