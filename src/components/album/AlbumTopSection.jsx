import React from "react";
import AlbumImage from "../../images/album-image.png";
import SectionHeading from "../common/SectionHeading";
import { IoPlayCircleOutline } from "react-icons/io5";
import ChildPageNavbar from "../common/ChildPageNavbar";
const AlbumTopSection = () => {
  return (
    <div className="p-6 rounded-xl">
      <ChildPageNavbar />
      <div className="flex flex-col md:flex-row md:items-end mt-8 justify-between gap-4">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-14">
          <div>
            <img src={AlbumImage} className="md:max-w-64" alt="album" />
          </div>
          <div className="space-y-5 md:space-y-11 w-full md:max-w-96">
            <SectionHeading
              showViewAll={false}
              text="Trending songs"
              highlightedText="mix"
            />
            <p className="text-white text-xl font-medium tracking-tight">
              tate mcree, nightmares, the neighberhood, doja cat and ...
            </p>
            <div className="flex items-center text-white text-xl font-medium gap-5">
              <p>20 songs</p>
              <div className="h-2 w-2 rounded-full bg-primary-400"></div>
              <p>1h 36m</p>
            </div>
          </div>
        </div>
        <div className="flex items-center text-primary-400 gap-4">
          <p className="text-2xl font-semibold ">Play All</p>
          <IoPlayCircleOutline className="size-14" />
        </div>
      </div>
    </div>
  );
};

export default AlbumTopSection;
