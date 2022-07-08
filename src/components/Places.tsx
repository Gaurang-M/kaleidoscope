import React, {
  FunctionComponent,
  useContext,
  useState,
  useEffect,
} from "react";
import element from "../assets/element1.svg";
import { KaleidoscopeData } from "../types/types";
import { kaleidoscopeAppContext } from "../context/city-context";
import { FaMapMarkerAlt } from "react-icons/fa";
import { debug } from "util";

const Places: FunctionComponent<{}> = () => {
  const data: KaleidoscopeData = useContext(
    kaleidoscopeAppContext
  ).KaleidoscopeData;

  const Prev_Selected_Tag = 1;

  const places_source = [
    {
      name: "#Malls",
      selected: false,
      id: 1,
      data: data.malls,
    },
    {
      name: "#Cafes",
      selected: false,
      id: 2,
      data: data.cafes,
    },
    {
      name: "#Picnic_Spots",
      selected: false,
      id: 3,
      data: data.picnicSpots,
    },
  ];

  const [placeData, setPlaceData] = useState<any>([]);

  useEffect(() => {
    for (let i = 0; i < places_source.length; i++) {
      if ((places_source[i]?.data?.length as number) > 0) {
        places_source[i].selected = true;
        setPlaceData(places_source[i]?.data);
        break;
      }
    }
    return () => {};
  }, []);

  const [selectedTag, setSelectedTag] = useState<any>(places_source);

  const setActiveTag = (id: number) => {
    var places_source_deep_clone = JSON.parse(JSON.stringify(places_source));
    places_source_deep_clone[Prev_Selected_Tag - 1].selected = false;
    places_source_deep_clone[id - 1].selected = true;
    setSelectedTag(places_source_deep_clone as any);
    setPlaceData(places_source_deep_clone[id - 1].data);
  };

  return (
    <div className="flex flex-col w-full relative justify-end md:mx-4 pt-8 md:pt-0">
      <div className="h-[332px] w-full border-2 border-stone-300 rounded-3xl drop-shadow-lg bg-white">
        <div className="h-[332px] flex flex-col justify-start">
          <FaMapMarkerAlt className="pt-4 h-12 w-12 mx-auto text-rose-400" />
          <p className="pt-2 text-[#DF7D76] text-xl mx-auto font-mont font-bold">
            POPULAR PLACES
          </p>
        </div>
      </div>
      <div className="h-[336px] w-full rounded-3xl absolute">
        <img className="mx-auto z-40" src={element}></img>
        <div className="flex justify-center pt-[84px]">
          {selectedTag.map((tag: any, i: number) => {
            return (
              <div key={i}>
                {tag.selected && tag.data.length > 0 && (
                  <div className="border-2 bg-indigo-900 rounded-3xl mx-1 cursor-pointer">
                    <p className="text-sm text-white p-1 px-3 font-noto">
                      {tag.name}
                    </p>
                  </div>
                )}
                {!tag.selected && tag.data.length > 0 && (
                  <div
                    key={i}
                    onClick={() => setActiveTag(tag.id)}
                    className="border-2 bg-[#1D97DC] rounded-3xl mx-1 cursor-pointer"
                  >
                    <p className="text-sm text-white font-noto p-1 px-3">
                      {tag.name}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="pt-1">
          <ul>
            {placeData.map((place: any, i: number) => {
              return (
                <div key={i}>
                  {place.name && (
                    <li className="h-fit py-1 flex flex-col justify-center text-lg border-b-2 border-zinc-200">
                      <div className="flex flex-wrap justify-between">
                        <a
                          className="px-2 md:px-8 w-1/2 text-[#1D97DC] font-noto font-bold text-sm cursor-pointer break-words"
                          href={`https://www.google.com/maps/search/?api=1&query=${place.long},${place.lat}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {place.name}
                        </a>

                        <p className="px-4 md:px-8 w-1/2 text-zinc-500 text-sm font-noto font-bold">{`${(
                          place.dist * 0.001
                        ).toFixed(1)} km away`}</p>
                      </div>
                    </li>
                  )}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Places;
