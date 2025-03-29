import React from "react";
import ChildPageNavbar from "../common/ChildPageNavbar";

const ArtistTopSection = () => {
  return (
    <div className="p-6 bg-[url(https://picsum.photos/seed/picsum/800)] relative flex bg-bg-no-repeat bg-cover min-h-[422px] rounded-xl">
      <div className="absolute h-full w-full left-0 top-0 bg-black/30"></div>
      <div className="flex flex-col justify-between relative z-20">
        <ChildPageNavbar />
        <h1 className="text-8xl font-black text-white">Eminem</h1>
      </div>
    </div>
  );
};

export default ArtistTopSection;
