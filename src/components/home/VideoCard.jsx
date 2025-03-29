import React from "react";

const VideoCard = ({ title, subTitle, count, image }) => {
  return (
    <div className="bg-inputBg p-2 w-36 md:w-72 rounded-md group cursor-pointer">
      <div className="space-y-1">
        <div className="w-full h-28 md:h-40 rounded-md overflow-hidden">
          <img
            alt="item"
            src={image || "https://picsum.photos/200/300"}
            className="group-hover:scale-110 ease-in-out duration-200"
          />
        </div>
        <div>
          <h4
            className="text-white text-lg md:text-2xl font-semibold line-clamp-1"
            title={title}
          >
            {title}
          </h4>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            <p
              className="text-xs text-white font-light grow line-clamp-1"
              title={subTitle}
            >
              {subTitle}
            </p>
            <p className="text-xs text-white font-light">{count} views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
