import { useState } from "react";
import "./App.scss";
import Choice from "../components/Choice/Choice";
import delivery from "../assets/delivery.png";
import burger from "../assets/burger.png";
import fries from "../assets/fries.png";
import hotDog from "../assets/hotDog.png";

function App() {
  const [basket, setBasket] = useState([
    {
      image: burger,
      nameRu: "Супер сырный",
      weight: "512г",
      price: 550,
      number: 0,
    },
    {
      image: fries,
      nameRu: "Картошка фри",
      weight: "180г",
      price: 245,
      number: 0,
    },
    {
      image: hotDog,
      nameRu: "Жгучий хот-дог",
      weight: "245г",
      price: 239,
      number: 0,
    },
  ]);

  const calculatePlus = (index) => {
    const newBasket = [...basket];
    newBasket[index].number += 1;
    setBasket(newBasket);
  };

  const calculateMinus = (index) => {
    const newBasket = [...basket];
    if (newBasket[index].number === 0) {
      return;
    } else {
      newBasket[index].number -= 1;
      setBasket(newBasket);
    }
  };

  const calculateAmount = () => {
    const amount = basket.reduce((acc, item) => {
      return (acc += item.number);
    }, 0);
    return amount;
  };

  const calculateSum = () => {
    const sum = basket.reduce((acc, item) => {
      return (acc += item.number * item.price);
    }, 0);
    return sum;
  };

  return (
    <>
      <main>
        <div className="container">
          <div className="basket">
            <h2>Корзина</h2>
            <div className="amount">
              <span>{calculateAmount()}</span>
            </div>
          </div>
          {basket.map((item, index) => {
            return (
              <Choice
                basket={item}
                key={index}
                calculateMinus={calculateMinus}
                calculatePlus={calculatePlus}
                index={index}
              />
            );
          })}
          <hr />
          <div className="inTotal">
            <h3>Итого</h3>
            <div className="totalPrice">
              <span>{calculateSum()}</span>
              <span>₽</span>
            </div>
          </div>
          <button className="toOrder">Оформить заказ</button>
          <div className="delivery">
            <div>
              <img src={delivery} alt="delivery" />
            </div>
            <span>Бесплатная доставка</span>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
