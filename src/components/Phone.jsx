import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Card.css";
import { useDispatch } from "react-redux";

const Phone = ({ card, handleClick, name }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <Link
        to={`${card.firstpage}-${card.secondpage}-${card.color}`}
      >
        <img src={card.image} alt="Phone" />
        <h3>{card.price}</h3>
        <h5 className="grey">{card.installment}</h5>
        <h4>{card.model}</h4>
      </Link>
      <Button
        size="small"
        variant="contained"
        onClick={() => dispatch(handleClick(card.price))}
      >
        {name}
      </Button>
    </div>
  );
};

export default Phone;
