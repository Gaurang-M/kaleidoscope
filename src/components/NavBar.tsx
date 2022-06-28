import React, { FunctionComponent } from "react";
import bgImage from "../assets/topbg1.png";

const NavBar: FunctionComponent<{}> = () => {
  return (
    <div
      className="fixed flex z-40 w-full h-16 pl-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <p className="font-sans text-xl md:text-2xl text-white font-semibold pt-3">
        Place Kaleidoscope
      </p>
    </div>
  );
};
export default NavBar;
