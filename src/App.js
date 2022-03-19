import "./App.css";
import About from "./Components/About/About";

// Components Import
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <HeroSection />
      <About />
    </div>
  );
}

export default App;
