import React, { FunctionComponent, useContext } from "react";
import element from "../assets/element1.svg";
import { KaleidoscopeData } from "../types/types";
import { kaleidoscopeAppContext } from "../context/city-context";
import food from "../assets/food.svg";

const Food: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;

  const index = data?.food?.indexOf("are") as number;
  const foodStr = data?.food?.substring(index + 3);
  const foodStr_altered = foodStr
    ?.replace("are", "")
    .replace(/,/g, "")
    .replace(".", "")
    .split(" ");

  let tags = [];
  let lastTag = "";
  let flag = false;
  foodStr_altered?.forEach((e) => {
    if (e && e.length > 0) {
      if (e.trim() === "and") {
        flag = true;
      } else if (!flag) {
        tags.push(e);
      } else {
        lastTag = lastTag + e + " ";
      }
    }
  });

  tags.push(lastTag);

  const onTagCLick = (tag: string) => {
    window
      ?.open(`https://www.google.com/search?q=google+images+${tag}`, "_blank")
      ?.focus();
  };

  return (
    <div className="flex flex-col w-full md:w-1/2 relative justify-end md:ml-2">
      <div className="h-[200px] w-full border-2 border-stone-300 rounded-3xl md:mx-2 drop-shadow-lg bg-white">
        <div className="h-[200px] flex flex-col justify-start">
          <div className="flex justify-center p-4">
            <img src={food}></img>
          </div>
          <p className="pt-2 text-[#DF7D76] text-xl md:text-2xl mx-auto font-mont font-bold">
            POPULAR FOOD
          </p>
        </div>
      </div>
      <div className="h-[204px] w-full rounded-3xl md:mx-2 absolute">
        <img className="mx-auto z-40" src={element}></img>
        <div className="flex justify-center pt-32">
          {tags.map((tag: any, i: number) => {
            return (
              <>
                {tags.length > 0 && (
                  <div
                    key={i}
                    onClick={() => onTagCLick(tag)}
                    className="border-2 bg-[#1D97DC] rounded-3xl mx-1 cursor-pointer"
                  >
                    <p className="text-lg md:text-xl text-white font-noto px-4">
                      {tag}
                    </p>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Food;
