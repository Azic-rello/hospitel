import { DoctorsCard, servicCard } from "../../constants";
import Passion from "./Passion";
import HealingIcon from "@mui/icons-material/Healing";

export default function Card() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8 p-4">
        {servicCard.map((item) => (
          <div className="bg-white rounded-1xl shadow-md hover:shadow-lg transition duration-300">
            <div className="relative w-full h-48">
              <img src={item.serImg} alt="Service" className="w-full h-full" />
              <div className="absolute bottom-[-20.1px] right-5 bg-indigo-700 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-xl">
                <HealingIcon />
              </div>
            </div>

            <div className="p-6 pt-10">
              <h1 className="font-semibold text-lg mb-2">{item.serHeader}</h1>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.serText}
              </p>
              <button className="text-blue-500 font-medium flex items-center gap-1 hover:underline">
                {item.serMore}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Passion />
      <div className="mt-[60px]">
        <h3 className="text-center text-blue-400 font-bold text-2xl">
          MEET THE
        </h3>
        <h1 className="text-center text-indigo-900 font-bold text-3xl">
          Team Members
        </h1>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DoctorsCard.map((item) => (
            <div className="bg-white rounded-1xl shadow-md overflow-hidden flex flex-col">
              <div className="w-full bg-white">
                <img
                  src={item.docImg}
                  alt="Doctor"
                  className=" w-full h-[320.1px] md:h-[360px] lg:h-[380px] object-cover object-top"
                />
              </div>

              <div className="bg-indigo-200 text-center px-4 py-6 flex-1">
                <h2 className="text-sm text-gray-700 mb-1">{item.docName}</h2>

                <h1 className="text-indigo-900 font-bold text-sm tracking-widest mb-4">
                  {item.docJob}
                </h1>

                <div className="flex justify-center gap-4 mb-4">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-700 text-white text-sm">
                    in
                  </span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-700 text-white text-sm">
                    f
                  </span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-700 text-white text-sm">
                    i
                  </span>
                </div>
              </div>
              <button className="w-full  bg-indigo-900  text-white  py-3 text-sm font-medium hover:bg-indigo-800 transition cursor-pointer">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
