import React, { useState } from "react";
import { NavLink, useLocation } from "react-router";
import Logo from "./Logo";
import SIDEBAR_MENUS from "../../constant/data";
import { twMerge } from "tailwind-merge";
import Footer from "./Footer";
import { IoMenu } from "react-icons/io5";
import { CgClose } from "react-icons/cg";

const Layout = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="md:container max-h-screen md:flex mx-auto overflow-hidden">
      <div
        id="sidebar"
        className={`absolute ease-in-out duration-200 z-30 backdrop-blur-xl bg-black/80 md:translate-x-0 md:relative  pl-16 no-scrollbar pr-8 py-12 border-r-2 h-screen overflow-auto border-primary-400 shadow-2xl shadow-primary-400/40 space-y-6 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <div
          className="absolute md:hidden top-6 right-6 p-4"
          onClick={() => setSidebarOpen(false)}
        >
          <CgClose />
        </div> */}
        <Logo />
        {Object.keys(SIDEBAR_MENUS).map((menu, index) => {
          return (
            <div key={index} className="space-y-6">
              <p className="text-xs font-light text-primary-400 capitalize">
                {menu}
              </p>
              {SIDEBAR_MENUS[menu]?.map((child) => {
                if (child?.isButton) {
                  return (
                    <button className="flex items-center gap-2 text-primary-400 hover:text-primary-600 ease-in-out duration-200">
                      {child.icon}
                      <p>{child.label}</p>
                    </button>
                  );
                }
                return (
                  <NavLink
                    // as per the figma design, but not looks good so updated:
                    // className="flex items-center gap-2 hover:bg-primary-400 rounded-[9px] hover:px-2 hover:py-1.5 hover:text-xl transition-all ease-in-out duration-200"
                    className={twMerge(
                      "flex items-center gap-2  ease-in-out duration-200",
                      location.pathname === child.path
                        ? "text-white/20"
                        : "text-white/70 hover:text-white"
                    )}
                    key={child.id}
                    to={child.path}
                  >
                    {child.icon}
                    <p>{child.label}</p>
                  </NavLink>
                );
              })}
            </div>
          );
        })}
      </div>
      <div
        id="layout"
        className="md:flex-1 h-screen overflow-y-auto no-scrollbar"
      >
        <div
          className="fixed p-4 bg-primary-400 rounded-full top-2 left-2 z-30 md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <CgClose /> : <IoMenu />}
        </div>
        <div className="p-6 md:p-12">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
