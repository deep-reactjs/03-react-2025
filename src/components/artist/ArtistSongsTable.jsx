import React from "react";
import SongsTable from "../common/SongsTable";
import { TRENDING_SONGS } from "../../constant/data";

const ArtistSongsTable = () => {
  return <SongsTable data={TRENDING_SONGS} text="Popular" />;
};

export default ArtistSongsTable;
