import "./SponsorSection.css";
import sponsor1 from "../../Assets/sponsor1.svg";
import sponsor2 from "../../Assets/sponsor2.svg";
import sponsor3 from "../../Assets/sponsor3.svg";
import sponsor4 from "../../Assets/sponsor4.svg";

function SponsorSection() {
  return (
    <div className="sponsor-section">
      <p className="font-primary mt-24">🙌WOULDN'T BE POSSIBLE WITHOUT YOU</p>
      <p className="font-secondary">OUR SPONSORS</p>
      <div className="sponsor-container ">
        <div className="sponsor-logo">
          <img src={sponsor1} alt="img" />
        </div>
        <div className="sponsor-logo">
          <img src={sponsor2} alt="img" />
        </div>
        <div className="sponsor-logo">
          <img src={sponsor3} alt="img" />
        </div>
        <div className="sponsor-logo">
          <img src={sponsor4} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default SponsorSection;
