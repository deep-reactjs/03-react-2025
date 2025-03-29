import React from "react";
import SongsTable from "../common/SongsTable";
import { TRENDING_SONGS } from "../../constant/data";

const AlbumSongs = () => {
  return (
    <div className="bg-black/30">
      <SongsTable showViewAll={false} data={TRENDING_SONGS} />
    </div>
  );
};

export default AlbumSongs;
