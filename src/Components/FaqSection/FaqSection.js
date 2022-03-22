import "./FaqSection.css";
import Card from "../FaqCard/Card";

function FaqSection() {
  return (
    <>
      <div className="container mb-8">
        <div>
          <p className="Header"> 🤔NEED HELP?</p>
          <p className="SubHeader">FAQs</p>
        </div>
        <div className="w-full h-auto md:flex">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <Card
              value="What platform will be used for communication?"
              answer="Answer to be added"
            />
            <Card
              value="I am not a designer, can I still apply?"
              answer="Answer to be added"
            />
            <Card
              value="Do we get prizes or schwags?"
              answer="Answer to be added"
            />
            <Card
              value="After registration how do I get notified about the Designathon?"
              answer="Answer to be added"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <Card
              value="Who can apply, can groups participate?"
              answer="Answer to be added"
            />
            <Card
              value="Is it necessary for all the members of the team to fill out the registration?"
              answer="Answer to be added"
            />
            <Card
              value="How do we register for workshops?"
              answer="Answer to be added"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqSection;
