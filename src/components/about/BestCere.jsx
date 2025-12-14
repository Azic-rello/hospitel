import React from "react";
import Img1 from "../../../public/assets/rasm1.png";
import Nuqta from "../../../public/assets/rasm2.png";

const BestCere = () => {
  return (
    <div className="w-full flex">
      <div className="h-[509px] mx-auto mt-20 flex">
        <img src={Img1} alt="jpg" />
        <div className="ml-19 grid gap-y-4">
          <h2 className="text-xl tracking-[5px] text-[#2290f0] font-extrabold">
            WELCOME TO HOSPITAL NAME
          </h2>
          <h1 className="font-extrabold text-6xl text-[#2d076e] -mt-4">
            Best Care for Your <br /> Good Health
          </h1>
          <div className="flex gap-x-15">
            <div className="flex items-center gap-x-3 text-sm font-mono">
              <img src={Nuqta} alt="" />
              <h1 className="text-[130%]">A Passion for Healing</h1>
            </div>
            <div className="flex items-center gap-x-3 text-sm font-mono">
              <img src={Nuqta} alt="" />
              <h1 className="text-[130%]">5-Star Care</h1>
            </div>
          </div>
          <div className="flex gap-x-39.5">
            <div className="flex items-center gap-x-3 text-sm font-mono">
              <img src={Nuqta} alt="" />
              <h1 className="text-[130%]">All our best</h1>
            </div>
            <div className="flex items-center gap-x-3 text-sm font-mono">
              <img className="" src={Nuqta} alt="" />
              <h1 className="text-[130%]">Believe in Us</h1>
            </div>
          </div>
          <div className="flex gap-x-37">
            <div className="flex items-center gap-x-3 text-sm font-mono">
              <img src={Nuqta} alt="" />
              <h1 className="text-[130%]">Always Caring</h1>
            </div>
            <div className="flex items-center gap-x-3 text-sm font-mono">
              <img className="" src={Nuqta} alt="" />
              <h1 className="text-[130%]">A Legacy of Excellence</h1>
            </div>
          </div>
          <div>
            <p className="tracking-[1px] w-155">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Quisque placerat
              scelerisque tortor ornare ornare Convallis felis vitae tortor
              augue. Velit nascetur proin massa in. Consequat faucibus porttitor
              enim et.
            </p>
          </div>
          <div>
            <p className="tracking-[1px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              <br /> placerat scelerisque. Convallis felis vitae tortor augue.
              Velit nascetur <br /> proin massa in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCere;
