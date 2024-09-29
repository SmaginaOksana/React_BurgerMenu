import "./Choice.scss";
import burger from "../../assets/burger.png";

function Choice(props) {
  const { food, minus, name, plus, weight, price, number } = props.menu;

  return (
    <div className="containerFood">
      <div className="image">
        <img src={food} alt={name} />
      </div>
      <div className="description">
        <div>
          <span className="name">{name}</span>
        </div>
        <div>
          <span className="weight">{weight}</span>
        </div>
        <div>
          <span className="price">{price}</span>
        </div>
      </div>
      <div className="amount">
        <button
          onClick={() => {
            minus();
          }}
        >
          -
        </button>
        <span className="number">{number}</span>
        <button
          onClick={() => {
            plus();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Choice;
