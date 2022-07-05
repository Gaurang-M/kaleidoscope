import React, { FunctionComponent } from "react";
import bgImage from "../assets/topbg1.png";

const NavBar: FunctionComponent<{}> = () => {
  return (
    <div
      className="fixed flex z-40 w-full h-16 pl-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <p className="font-mont text-2xl text-white font-light pt-3 text-shadow">
        Place Kaleidoscope
      </p>
    </div>
  );
};
export default NavBar;
