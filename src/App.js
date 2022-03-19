import "./App.css";

// Components Import
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import SpeakerSection from "./Components/SpeakerSection/SpeakerSection";
import SponsorSection from "./Components/SponsorSection/SponsorSection";

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <HeroSection />
      <SpeakerSection />
      <SponsorSection />
    </div>
  );
}

export default App;
