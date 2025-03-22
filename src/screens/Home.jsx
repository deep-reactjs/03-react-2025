import HeroSection from "../components/home/HeroSection";
import MoodPlaylist from "../components/home/MoodPlaylist";
import MusicVideo from "../components/home/MusicVideo";
import NewReleaseSongs from "../components/home/NewReleaseSongs";
import TopAlbums from "../components/home/TopAlbums";
import TrendingSongs from "../components/home/TrendingSongs";
import WeeklyTopSongs from "../components/home/WeeklyTopSongs";

const Home = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <WeeklyTopSongs />
      <TrendingSongs />
      <NewReleaseSongs />
      <MusicVideo />
      <TopAlbums />
      <MoodPlaylist />
    </div>
  );
};
export default Home;
