import React from "react";
import Icon from "../../public/assets/icon.png";
import Icon1 from "../../public/assets/icon1.png";
import Icon2 from "../../public/assets/icon2.png";
import Doctor1 from "../../public/assets/Doctor1.png";
import Doctor2 from "../../public/assets/Doctor2.png";
import Doctor3 from "../../public/assets/Doctor3.png";

import Nuqta from "../../public/assets/nuqta.png";

const OurDoctors = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="">
        <h3 className="ml-[35%] mt-[4%] text-[#2290f0] tracking-[2px] text-xl font-extrabold">
          TRUSTED CARE
        </h3>
        <h1 className="ml-[32%] mt-3 text-4xl text-blue-950 font-extrabold">
          Our Doctors
        </h1>
        <div className="flex gap-20 -ml-134 mt-20">
          <div className="h-100">
            <img className="ml-[85%]" src={Doctor1} alt="" />
            <div className="w-[317px] h-30 bg-blue-300 ml-[14.1%] mt-[-1%] absolute">
              <h1 className="ml-[30%] mt-[5%] text-blue-600 relative">
                Doctor's Name
              </h1>
              <h1 className="ml-[25%] font-bold text-blue-900">
                N E U R O L O G Y
              </h1>
              <div className="flex flex-wrap gap-4">
                <img className="ml-[28%] " src={Icon} alt="" />
                <img className=" " src={Icon1} alt="" />
                <img src={Icon2} alt="" />
              </div>
              <div className="w-full h-10 bg-blue-950 mt-7.5 absolute ">
                <h1 className="ml-[30%] mt-[3%] text-white relative">
                  View Profile
                </h1>
              </div>
            </div>
          </div>
          <div className="h-100">
            <img className="ml-[85%]" src={Doctor2} alt="" />
            <div className="w-[317px] h-30 bg-blue-300 ml-[14.1%] mt-[-1%] absolute">
              <h1 className="ml-[30%] mt-[5%] text-blue-600 relative">
                Doctor's Name
              </h1>
              <h1 className="ml-[25%] font-bold text-blue-900">
                N E U R O L O G Y
              </h1>
              <div className="flex flex-wrap gap-4">
                <img className="ml-[28%] " src={Icon} alt="" />
                <img className=" " src={Icon1} alt="" />
                <img src={Icon2} alt="" />
              </div>
              <div className="w-full h-10 bg-blue-950 mt-7.5 absolute ">
                <h1 className="ml-[30%] mt-[3%] text-white relative">
                  View Profile
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className="h-100">
              <img className="ml-[85%]" src={Doctor3} alt="" />
              <div className="w-[317px] h-30 bg-blue-300 ml-[14.1%] mt-[-1%] absolute">
                <h1 className="ml-[30%] mt-[5%] text-blue-600 relative">
                  Doctor's Name
                </h1>
                <h1 className="ml-[25%] font-bold text-blue-900">
                  N E U R O L O G Y
                </h1>
                <div className="flex flex-wrap gap-4">
                  <img className="ml-[28%] " src={Icon} alt="" />
                  <img className=" " src={Icon1} alt="" />
                  <img src={Icon2} alt="" />
                </div>
                <div className="w-full h-10 bg-blue-950 mt-7.5 absolute ">
                  <h1 className="ml-[30%] mt-[3%] text-white relative">
                    View Profile
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="mx-auto mt-30" src={Nuqta} alt="" />
      </div>
    </div>
  );
};

export default OurDoctors;
