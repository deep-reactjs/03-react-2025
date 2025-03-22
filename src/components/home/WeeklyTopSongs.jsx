import React from "react";
import SongsList from "../common/SongsList";
import { WEEKLY_TOP_SONGS } from "../../constant/data";

const WeeklyTopSongs = () => {
  return (
    <div>
      <SongsList
        text="Weekly Top"
        highlightedText="Songs"
        data={WEEKLY_TOP_SONGS}
      />
    </div>
  );
};

export default WeeklyTopSongs;
