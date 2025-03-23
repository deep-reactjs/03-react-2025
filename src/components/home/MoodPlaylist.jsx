import React from "react";
import SongsList from "../common/SongsList";
import { NEW_RELEASE_SONGS } from "../../constant/data";

const MoodPlaylist = () => {
  return (
    <div>
      <SongsList
        text="Mood"
        highlightedText="Playlist"
        data={NEW_RELEASE_SONGS}
      />
    </div>
  );
};

export default MoodPlaylist;
