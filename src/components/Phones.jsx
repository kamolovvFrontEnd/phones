import Phone from "./Phone";
import { add } from "./store/reducer/cartReducer";

const Phones = ({ cards }) => {

  return (
    <div className="wrap">
      {cards.map((card) => {
        return <Phone card={card} handleClick={add} name="Add to Cart"/>;
      })}
    </div>
  );
};

export default Phones;
