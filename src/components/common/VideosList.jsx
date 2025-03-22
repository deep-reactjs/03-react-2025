import React from "react";
import SectionHeading from "./SectionHeading";
import ItemCard from "../home/ItemCard";
import { IoAdd } from "react-icons/io5";
import VideoCard from "../home/VideoCard";

const VideosList = ({ text, highlightedText, data }) => {
  return (
    <div className="space-y-3.5">
      <SectionHeading text={text} highlightedText={highlightedText} />
      <div className="max-w-full flex items-center overflow-auto gap-6">
        <div className="flex items-center flex-wrap gap-6">
          {data?.map((video, index) => (
            <VideoCard
              key={index + 1}
              title={video.title}
              subTitle={video.creatorName}
              count={video.views}
              image={video.image}
            />
          ))}
        </div>
        <button className="space-y-1 text-center cursor-pointer">
          <p className="h-16 w-16 rounded-full bg-stone-800 flex items-center justify-center">
            <IoAdd className="size-6" />
          </p>
          <p className="text-base font-medium">View All</p>
        </button>
      </div>
    </div>
  );
};

export default VideosList;
