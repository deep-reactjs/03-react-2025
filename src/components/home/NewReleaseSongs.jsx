import React, { useEffect } from "react";
import SongsList from "../common/SongsList";
import { NEW_RELEASE_SONGS, TRENDING_SONGS } from "../../constant/data";
import { getNewReleaseSongsList } from "../../redux/songsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const NewReleaseSongs = () => {
  const dispatch = useDispatch();
  const { songs } = useSelector((state) => ({
    songs: state.songs.songs,
  }));
  useEffect(() => {
    dispatch(getNewReleaseSongsList());
  }, []);
  return (
    <div>
      <SongsList
        text="New Release"
        highlightedText="Songs"
        isLoading={songs?.isLoading}
        error={songs?.error}
        data={songs.data
          ?.map((song) => ({
            id: song.idTrack,
            name: song.strTrack,
            artist: song.strArtist,
          }))
          ?.slice(0, 5)}
      />
    </div>
  );
};

export default NewReleaseSongs;
