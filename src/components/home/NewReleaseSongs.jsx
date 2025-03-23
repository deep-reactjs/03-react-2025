import React from "react";
import SongsList from "../common/SongsList";
import { NEW_RELEASE_SONGS, TRENDING_SONGS } from "../../constant/data";

const NewReleaseSongs = () => {
  return (
    <div>
      <SongsList
        text="New Release"
        highlightedText="Songs"
        data={NEW_RELEASE_SONGS}
      />
    </div>
  );
};

export default NewReleaseSongs;
