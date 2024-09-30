import "./Choice.scss";

function Choice(props) {
  const { image, name, calculate, nameRu, weight, price, number } = props.menu;

  return (
    <div className="containerFood">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="description">
        <div>
          <span className="name">{nameRu}</span>
        </div>
        <div>
          <span className="weight">{weight}</span>
        </div>
        <div>
          <span className="price">{price} ₽</span>
        </div>
      </div>
      <div className="amount">
        <button
          onClick={() => {
            calculate("minus", name, number, price);
          }}
        >
          -
        </button>
        <span className="number">{number}</span>
        <button
          onClick={() => {
            calculate("plus", name, number, price);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Choice;
