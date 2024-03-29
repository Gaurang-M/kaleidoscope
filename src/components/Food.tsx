import React, { FunctionComponent, useContext } from "react";
import element from "../assets/element1.svg";
import { KaleidoscopeData } from "../types/types";
import { kaleidoscopeAppContext } from "../context/city-context";
import food from "../assets/food.svg";

const Food: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;

  // Sloppy logic written here to extract food items from a AI generated sentence.
  const index = data?.food?.indexOf("are") as number;
  let foodStr = data?.food?.substring(index + 3);
  if (foodStr?.includes("include")) {
    const indexFound = foodStr.indexOf("include") as number;
    foodStr = foodStr.substring(indexFound + 7);
  }
  const tags = foodStr
    ?.replace("are", "")
    .replace("include", "")
    .replace(/and/g, "")
    .replace(".", "")
    .split(",");

  const onTagCLick = (tag: string) => {
    window
      ?.open(`https://www.google.com/search?q=google+images+${tag}`, "_blank")
      ?.focus();
  };

  return (
    <div className="flex flex-col justify-between w-full md:mr-2 mr-0">
      <div className="flex flex-col w-full justify-end relative">
        <div className="h-[250px] w-full border-2 border-stone-300 rounded-3xl drop-shadow-lg bg-white">
          <div className="h-[250px] flex flex-col justify-start">
            <div className="flex justify-center p-4">
              <img src={food}></img>
            </div>
            <p className="pt-2 text-[#DF7D76] text-xl mx-auto font-mont font-bold">
              POPULAR FOOD
            </p>
          </div>
        </div>
        <div className="h-[254px] w-full rounded-3xl absolute">
          <img className="mx-auto z-40" src={element}></img>
          <div className="flex flex-wrap justify-center pt-32 w-full h-fit">
            {tags?.map((tag: any, i: number) => {
              return (
                <div key={i}>
                  {tag.length > 0 && (
                    <div
                      onClick={() => onTagCLick(tag)}
                      className="border-2 bg-[#1D97DC] rounded-3xl mx-1 cursor-pointer"
                    >
                      <p className="capitalize text-sm text-white font-noto p-1 px-3">
                        {tag}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Food;
