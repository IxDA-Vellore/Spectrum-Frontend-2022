import "./App.css";
import Register from "./Components/Header/Register";

// Components Import
import Header from "./Components/Header/Header";
import Hero from "./Components/Header/Hero"; 
import PrizePool from "./Components/Header/PrizePool";

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <PrizePool />
      <Register />
    </div>
  );
}

export default App;
