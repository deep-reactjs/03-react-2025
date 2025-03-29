import ArtistSongsTable from "../components/artist/ArtistSongsTable";
import ArtistTopSection from "../components/artist/ArtistTopSection";
import SongsList from "../components/common/SongsList";
import { NEW_RELEASE_SONGS } from "../constant/data";

const Artists = () => {
  return (
    <div className="bg-artist-bg space-y-16">
      <ArtistTopSection />
      <ArtistSongsTable />
      <div>
        <SongsList
          text="Artist's"
          highlightedText="Albums"
          data={NEW_RELEASE_SONGS}
        />
      </div>
      <div>
        <SongsList
          text="Single  "
          highlightedText="Songs"
          data={NEW_RELEASE_SONGS}
        />
      </div>
      <div>
        <SongsList
          text="Artist's"
          highlightedText="Playlist"
          data={NEW_RELEASE_SONGS}
        />
      </div>
    </div>
  );
};

export default Artists;
