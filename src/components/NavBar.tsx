import React, { FunctionComponent } from "react";
import bgImage from "../assets/topbg1.png";
import icon from "../assets/icon.png";

const NavBar: FunctionComponent<{}> = () => {
  return (
    <div
      className="fixed flex z-40 w-[1000px] h-16 pl-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex">
        <img
          className="rounded-full h-12 w-12 my-auto"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
          src={icon}
        ></img>
        <p className="pl-2 font-mont text-2xl text-white font-light my-auto text-shadow">
          Place Kaleidoscope
        </p>
      </div>
    </div>
  );
};
export default NavBar;
