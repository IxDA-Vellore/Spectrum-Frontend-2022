import "./App.css";

// Components Import
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";

//import SpeakerSection from "./Components/SpeakerSection/SpeakerSection";
import SponsorSection from "./Components/SponsorSection/SponsorSection";

import About from "./Components/About/About";
import PrizePool from "./Components/PrizePool/PrizePool";
import Register from "./Components/Register/Register";

import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <HeroSection />
      <About />
      {/* <SpeakerSection /> */}
      <PrizePool />
      <SponsorSection />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
