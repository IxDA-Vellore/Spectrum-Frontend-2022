import SpeakerCard from "../SpeakerCard/SpeakerCard";

function SpeakerSection() {
  return (
    <div
      className="w-screen flex container flex-col justify-center items-center"
      id="speakers"
    >
      <div>LEARN FROM THE BEST!</div>
      <div>OUR SPEAKERS</div>
      <SpeakerCard />
    </div>
  );
}

export default SpeakerSection;
