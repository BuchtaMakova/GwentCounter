import "./cards.css";

function Cards(props) {
  return (
    <div className="cards">
      <div>{props.card.numberInput}</div>
      <div>{props.card.selectedOption}</div>
    </div>
  );
}
export default Cards;
