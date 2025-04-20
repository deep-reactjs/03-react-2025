import React, { useEffect } from "react";
import VideosList from "../common/VideosList";
import { MUSIC_VIDEO } from "../../constant/data";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { musicVideosList } from "../../redux/songsSlice";

const MusicVideo = () => {
  const dispatch = useDispatch();
  const { musicVideos } = useSelector((state) => ({
    musicVideos: state.songs.musicVideos,
  }));
  useEffect(() => {
    dispatch(musicVideosList());
  }, []);
  return (
    <div>
      <VideosList
        text="Music"
        highlightedText="Video"
        isLoading={musicVideos?.isLoading}
        error={musicVideos?.error}
        data={musicVideos.data
          ?.map((song) => ({
            image: song.strMusicVid,
            title: song.strTrack,
            creatorName: song.strArtist,
            views: song.intDuration,
          }))
          ?.slice(0, 3)}
      />
    </div>
  );
};

export default MusicVideo;
