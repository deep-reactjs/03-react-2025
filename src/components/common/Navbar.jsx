import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { NAVBAR_MENU } from "../../constant/data";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="bg-inputBg px-2 py-1.5 rounded-[10px] w-80 flex items-center text-white gap-1">
        <IoSearchOutline size={20} className="-scale-x-100 scale-y-100" />
        <input
          type="text"
          placeholder="Search For Musics, Artists ..."
          className="text-xs font-normal w-full bg-transparent outline-none"
        />
      </div>
      <div className="flex flex-1 items-center justify-center">
        {NAVBAR_MENU?.map((item) => (
          <div
            key={item.id}
            className="text-white/60 hover:text-white px-5 cursor-pointer font-medium"
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Button
          size="small"
          type="outline"
          variant="primary"
          className="min-w-32"
        >
          Login
        </Button>
        <Button size="small" type="fill" variant="primary" className="min-w-32">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
