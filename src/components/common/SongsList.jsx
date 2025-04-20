import React from "react";
import SectionHeading from "./SectionHeading";
import ItemCard from "../home/ItemCard";
import { IoAdd } from "react-icons/io5";
import { WEEKLY_TOP_SONGS } from "../../constant/data";
import Button from "./Button";

const SongsList = ({
  isLoading = false,
  error = false,
  text,
  highlightedText,
  data,
}) => {
  console.log(error);
  return (
    <div className="space-y-3.5">
      <SectionHeading text={text} highlightedText={highlightedText} />
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Error...."
      ) : (
        <div className="flex items-center max-w-full overflow-auto gap-6">
          {data?.map((song) => (
            <ItemCard key={song.id} title={song.name} subTitle={song.artist} />
          ))}
          <button className="hidden md:block space-y-1 text-center cursor-pointer">
            <p className="h-16 w-16 rounded-full bg-stone-800 flex items-center justify-center">
              <IoAdd className="size-6" />
            </p>
            <p className="text-base font-medium">View All</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default SongsList;
