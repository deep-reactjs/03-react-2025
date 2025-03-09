import React from "react";
import Button from "../common/Button";

const HeroSectionContent = () => {
  return (
    <div className="mt-28 max-w-[352px] space-y-4">
      <h1 className="text-[40px] text-white font-bold">
        All the <span className="text-primary-400">Best Songs</span> in One
        Place
      </h1>
      <p className="text-xs text-white font-normal">
        On our website, you can access an amazing collection of popular and new
        songs. Stream your favorite tracks in high quality and enjoy without
        interruptions. Whatever your taste in music, we have it all for you!
      </p>
      <div className="flex items-center gap-6">
        <Button size="medium" type="fill" variant="primary">
          Discover Now
        </Button>
        <Button size="medium" type="outline" variant="secondary">
          Create Playlist
        </Button>
      </div>
    </div>
  );
};

export default HeroSectionContent;
