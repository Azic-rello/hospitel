function Info() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-cover bg-center">
        {" "}
        <img
          src="/public/assets/3872cf531b67c6202c38dc53126a3cc49440d867.jpg"
          alt="xatolik"
          className="w-full h-[600px]"
        />{" "}
      </div>

      <div className="absolute inset-0 bg-blue-900/60 w-full h-[600px]"></div>

      <div className="relative max-w-4xl px-6 text-white">
        <div className="text-6xl font-bold mb-6">“</div>

        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Quisque placerat
          scelerisque felis vitae tortor augue. Velit nascetur consequat
          faucibus porttitor enim et.
        </p>

        <div className="w-32 h-[2.1px] bg-white/60 mx-auto mb-4"></div>

        <h3 className="text-2xl font-semibold">John Doe</h3>

        <div className="flex gap-3 justify-center mt-6">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white/40 rounded-full"></div>
          <div className="w-3 h-3 bg-white/40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
export default Info;
