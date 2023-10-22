import "./Card.css";

const AboutPhoneModel = ({card}) => {
  return (
    <div className="characteristic">
      <img src={card.image} alt="iPhone" className="img-size"/>
      <div className="inOneLine">
        <h2>{card.model}</h2>
        <h1>{card.price}</h1>
        <h3 className="grey">{card.installment}</h3>
        <hr />
        <p><span>Бренд</span> {card.brand}</p>
        <p><span>Объём встроенной памяти</span> {card.memory}</p>
        <p><span>Частота обновления экрана</span> {card.frequency}</p>
        <p><span>Объём оперативной памяти</span> {card.ram}</p>
        <p><span>Тип дисплея</span> {card.display}</p>
      </div>
    </div>
  );
};

export default AboutPhoneModel;
