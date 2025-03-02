import React from "react";
import { NavLink } from "react-router";
import Logo from "./Logo";
import SIDEBAR_MENUS from "../../constant/data";

const Layout = ({ children }) => {
  return (
    <div className="container flex mx-auto">
      <div
        id="sidebar"
        className="pl-16 pr-8 py-12 border-r-2 h-screen border-primary-400 shadow-2xl shadow-primary-400/40 space-y-6"
      >
        <Logo />
        {Object.keys(SIDEBAR_MENUS).map((menu, index) => {
          return (
            <div key={index} className="space-y-6">
              <p className="text-xs font-light text-primary-400 capitalize">
                {menu}
              </p>
              {SIDEBAR_MENUS[menu]?.map((child) => {
                return (
                  <div>
                    <NavLink key={child.id} to={child.path}>
                      <p>{child.label}</p>
                    </NavLink>
                  </div>
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
      <div id="layout" className="flex-1 p-12">
        {children}
      </div>
    </div>
  );
};

export default Layout;
