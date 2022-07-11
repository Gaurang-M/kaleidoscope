import React, { FunctionComponent } from "react";
import bgImage from "../assets/topbg1.png";
import icon from "../assets/icon.svg";

const NavBar: FunctionComponent<{}> = () => {
  return (
    <div
      className="fixed flex z-40 w-[1000px] h-16 pl-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex">
        <img
          className="rounded-full my-auto"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
          src={icon}
        ></img>
        <div className="pl-2 flex flex-col justify-start">
          <p className=" font-mont text-2xl text-white font-light text-shadow">
            Place Kaleidoscope
          </p>
          <p className="font-mont text-lg text-white font-bold">Cityscape</p>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
