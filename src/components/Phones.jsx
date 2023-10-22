import Phone from "./Phone";

const Phones = ({ cards }) => {
  return (
    <div className="wrap">
      {cards.map((card) => {
        return <Phone card={card} />;
      })}
    </div>
  );
};

export default Phones;
