import React from "react";

const ItemCard = ({ title, subTitle }) => {
  return (
    <div className="bg-inputBg px-4 py-1 w-min rounded-[10px] group cursor-pointer">
      <div className="space-y-3">
        <div className="h-36 w-36 rounded-[10px] overflow-hidden">
          <img
            alt="item"
            src="https://picsum.photos/200/300"
            className="group-hover:scale-110 ease-in-out duration-200"
          />
        </div>
        <div className="space-y-1">
          <h4 className="text-white font-medium line-clamp-1" title={title}>
            {title}
          </h4>
          <p
            className="text-xs text-white font-normal line-clamp-1"
            title={subTitle}
          >
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
