import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TrendingCarousel from "../components/TrendingCarousel";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <HeroSection />
      <TrendingCarousel />
    </div>
  );
}

export default Home;
