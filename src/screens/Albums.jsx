import AlbumSongs from "../components/album/AlbumSongs";
import AlbumTopSection from "../components/album/AlbumTopSection";

const Albums = () => {
  return (
    <div className="bg-album-bg rounded-xl">
      <AlbumTopSection />
      <AlbumSongs />
    </div>
  );
};

export default Albums;
