import "./FaqSection.css";
import FaqCard from "../FaqCard/FaqCard";

function FaqSection() {
  return (
    <div className="faq-section">
      <p className="font-primary">🤔NEED HELP?</p>
      <p className="font-secondary text-3xl mb-10">FAQs</p>
      <div className="cards-container">
        <FaqCard text={"I am not a designer, can I still apply?"} />
        <FaqCard text={"Do we get prizes or schwags?"} />
        <FaqCard text={"How do we register for workshops?"} />
      </div>
    </div>
  );
}

export default FaqSection;
// What platform will be used for communication?
