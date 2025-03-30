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
export const NAVBAR_MENU = SIDEBAR_MENUS.menu.slice(1, 4);
export const WEEKLY_TOP_SONGS = [
  {
    id: "1",
    name: "Blinding Lights",
    artist: "The Weeknd",
  },
  {
    id: "2",
    name: "Save Your Tears",
    artist: "The Weeknd",
  },
  {
    id: "3",
    name: "Levitating",
    artist: "Dua Lipa",
  },
  {
    id: "4",
    name: "Peaches",
    artist: "Justin Bieber",
  },
  {
    id: "5",
    name: "Montero (Call Me By Your Name)",
    artist: "Lil Nas X",
  },
];
export const NEW_RELEASE_SONGS = [
  {
    id: "6",
    name: "Good 4 U",
    artist: "Olivia Rodrigo",
  },
  {
    id: "7",
    name: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
  },
  {
    id: "8",
    name: "Kiss Me More",
    artist: "Doja Cat ft. SZA",
  },
  {
    id: "9",
    name: "Industry Baby",
    artist: "Lil Nas X, Jack Harlow",
  },
  {
    id: "10",
    name: "Shivers",
    artist: "Ed Sheeran",
  },
];
export const TRENDING_SONGS = [
  {
    rank: "#1",
    image: "https://picsum.photos/56/56",
    title: "Sorfcore",
    artist: "The Neighbourhood",
    date: "Nov 4, 2023",
    song: "Hard to Imagine the Neighbourhood Ever Changing",
    duration: "3:26",
  },
  {
    rank: "#2",
    image: "https://picsum.photos/56/56?2",
    title: "Rocky Hills",
    artist: "Lunar Shade",
    date: "Nov 5, 2023",
    song: "Tides of Change",
    duration: "4:02",
  },
  {
    rank: "#3",
    image: "https://picsum.photos/56/56?3",
    title: "City Lights",
    artist: "The Streetlights",
    date: "Nov 6, 2023",
    song: "Lost in the Moment",
    duration: "2:48",
  },
  {
    rank: "#4",
    image: "https://picsum.photos/56/56?4",
    title: "Crimson Wave",
    artist: "Shifting Waves",
    date: "Nov 7, 2023",
    song: "Echoes of Tomorrow",
    duration: "5:10",
  },
  {
    rank: "#5",
    image: "https://picsum.photos/56/56?5",
    title: "Fading Stars",
    artist: "Midnight Bloom",
    date: "Nov 8, 2023",
    song: "Stellar Dreams",
    duration: "3:50",
  },
  {
    rank: "#6",
    image: "https://picsum.photos/56/56?6",
    title: "Sunrise Drive",
    artist: "Golden Dawn",
    date: "Nov 9, 2023",
    song: "Golden Hours",
    duration: "4:20",
  },
  {
    rank: "#7",
    image: "https://picsum.photos/56/56?7",
    title: "Silver Echo",
    artist: "Echo Bloom",
    date: "Nov 10, 2023",
    song: "Resonating Memories",
    duration: "3:15",
  },
];
export const MUSIC_VIDEO = [
  {
    image: "https://picsum.photos/400/400?1",
    title: "The Future of AI",
    creatorName: "TechVision",
    views: "1.2M",
  },
  {
    image: "https://picsum.photos/400/400?2",
    title: "Exploring the Ocean Depths",
    creatorName: "Nature Channel",
    views: "850K",
  },
  {
    image: "https://picsum.photos/400/400?3",
    title: "Building a Smart Home",
    creatorName: "HomeTech DIY",
    views: "3.1M",
  },
  {
    image: "https://picsum.photos/400/400?4",
    title: "A Walk Through Time: Ancient Civilizations",
    creatorName: "History Discoveries",
    views: "420K",
  },
  {
    image: "https://picsum.photos/400/400?5",
    title: "Top 10 Travel Destinations in 2025",
    creatorName: "Wanderlust Adventures",
    views: "1.8M",
  },
  {
    image: "https://picsum.photos/400/400?6",
    title: "Cooking Secrets from a Master Chef",
    creatorName: "Gourmet Guide",
    views: "2.3M",
  },
];
export const FOOTER_LINKS = [
  {
    id: 1,
    title: "Melodies",
    links: [
      {
        id: 1,
        title: "Songs",
        url: "#",
      },
      {
        id: 2,
        title: "Radio",
        url: "#",
      },
      {
        id: 3,
        title: "Podcast",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Access",
    links: [
      {
        id: 1,
        title: "Explor",
        url: "#",
      },
      {
        id: 2,
        title: "Artists",
        url: "#",
      },
      {
        id: 3,
        title: "Playlists",
        url: "#",
      },
      {
        id: 4,
        title: "Albums",
        url: "#",
      },
      {
        id: 5,
        title: "Trending",
        url: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Contact",
    links: [
      {
        id: 1,
        title: "About",
        url: "#",
      },
      {
        id: 2,
        title: "Policy",
        url: "#",
      },
      {
        id: 3,
        title: "Social Media",
        url: "#",
      },
      {
        id: 4,
        title: "Soppurt",
        url: "#",
      },
    ],
  },
];
export const AUTH_TABS = {
  signIn: {
    id: 1,
    title: "Sign In",
  },
  signUp: {
    id: 2,
    title: "Sign Up",
  },
};
export default SIDEBAR_MENUS;
