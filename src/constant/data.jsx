import { FaRegUserCircle } from "react-icons/fa";
import {
  IoCompassOutline,
  IoDiscOutline,
  IoHomeOutline,
  IoLogOutOutline,
  IoSettingsOutline,
  IoTimeOutline,
  IoTimerOutline,
} from "react-icons/io5";

const SIDEBAR_MENUS = {
  menu: [
    { id: 1, label: "Home", path: "/", icon: <IoHomeOutline /> },
    { id: 2, label: "Discover", path: "/discover", icon: <IoCompassOutline /> },
    { id: 3, label: "Albums", path: "/albums", icon: <IoDiscOutline /> },
    { id: 4, label: "Artists", path: "/artists", icon: <FaRegUserCircle /> },
  ],
  library: [
    { id: 1, label: "Recently Added", path: "#", icon: <IoTimeOutline /> },
    { id: 2, label: "Most Played", path: "#", icon: <IoTimerOutline /> },
  ],
  general: [
    { id: 1, label: "Setting", path: "#", icon: <IoSettingsOutline /> },
    {
      id: 2,
      label: "Logout",
      icon: <IoLogOutOutline />,
      isButton: true,
    },
  ],
};

export default SIDEBAR_MENUS;
