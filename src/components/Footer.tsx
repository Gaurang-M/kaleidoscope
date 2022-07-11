import React, { FunctionComponent } from "react";

const Footer: FunctionComponent<{}> = () => {
  return (
    <div className="flex flex-col justify-center w-full h-fit bg-black">
      {/* <p className="font-mont pt-2 text-2xl text-white mx-auto">Kaleidoscope</p>
      <p className="font-mont py-1 text-lg text-white font-bold mx-auto">
        Cityscape
      </p> */}
      <p className="font-mont text-white text-lg mx-auto pt-2">Project By</p>
      <p className="font-mont text-white text-xs mx-auto py-4">
        Abhishek Dwivedi | Sumit Sarkar | Yashraj Chawathey | Gaurang Manjrekar
      </p>
    </div>
  );
};
export default Footer;
