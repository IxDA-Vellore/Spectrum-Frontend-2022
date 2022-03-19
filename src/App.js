import "./App.css";

// Components Import
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import PrizePool from "./Components/PrizePool/PrizePool";

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <HeroSection />
      <PrizePool />
    </div>
  );
}

export default App;
