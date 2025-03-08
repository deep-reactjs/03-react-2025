import React from "react";
import { NavLink, useLocation, useNavigation, useParams } from "react-router";
import Logo from "./Logo";
import SIDEBAR_MENUS from "../../constant/data";
import { twMerge } from "tailwind-merge";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="container max-h-screen flex mx-auto overflow-hidden">
      <div
        id="sidebar"
        className="pl-16 no-scrollbar pr-8 py-12 border-r-2 h-screen overflow-auto border-primary-400 shadow-2xl shadow-primary-400/40 space-y-6"
      >
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
        {/* <NavLink to="/">Home</NavLink>
        <NavLink to="/albums">Albums</NavLink>
        <NavLink to="/artists">Artists</NavLink>
        <NavLink to="/discover">Discover</NavLink> */}
      </div>
      <div
        id="layout"
        className="flex-1 h-screen overflow-y-auto no-scrollbar p-12"
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
