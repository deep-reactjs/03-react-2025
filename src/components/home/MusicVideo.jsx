import React from "react";
import VideosList from "../common/VideosList";
import { MUSIC_VIDEO } from "../../constant/data";

const MusicVideo = () => {
  return (
    <div>
      <VideosList
        text="Music"
        highlightedText="Video"
        data={MUSIC_VIDEO.slice(0, 3)}
      />
    </div>
  );
};

export default MusicVideo;
