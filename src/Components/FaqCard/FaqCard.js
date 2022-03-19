import plusCircle from "../../Assets/plus-circle.svg";
import "./FaqCard.css";

function FaqCard(props) {
  return (
    <div className="faq-card p-2 pt-6 pb-6 m-3 rounded-xl">
      <p className="font-primary text-xl">{props.text}</p>
      <div className="ml-8 ">
        <img src={plusCircle} alt="img" />
      </div>
    </div>
  );
}

export default FaqCard;
