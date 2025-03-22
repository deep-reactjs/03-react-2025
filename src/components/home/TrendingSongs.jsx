import React from "react";
import SongsTable from "../common/SongsTable";
import { TRENDING_SONGS } from "../../constant/data";

const TrendingSongs = () => {
  return (
    <div>
      <SongsTable
        text="Trending"
        highlightedText="Songs"
        data={TRENDING_SONGS}
      />
    </div>
  );
};

export default TrendingSongs;
