import React from "react";
import SongsList from "../common/SongsList";
import { NEW_RELEASE_SONGS } from "../../constant/data";

const TopAlbums = () => {
  return (
    <div>
      <SongsList text="Top" highlightedText="Albums" data={NEW_RELEASE_SONGS} />
    </div>
  );
};

export default TopAlbums;
