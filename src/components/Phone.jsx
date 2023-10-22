import { Link } from "react-router-dom";
import "./Card.css";

const Phone = ({ card }) => {
  return (
    <Link
      to={`${card.firstpage}-${card.secondpage}-${card.color}`}
      className="card"
    >
      <img src={card.image} alt="Phone"/>
      <h3>{card.price}</h3>
      <h5 className="grey">{card.installment}</h5>
      <h4>{card.model}</h4>
    </Link>
  );
};

export default Phone;
