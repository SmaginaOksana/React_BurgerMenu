import { useState } from "react";
import "./App.scss";
import Choice from "../components/Choice/Choice";
import delivery from "../assets/delivery.png";
import burger from "../assets/burger.png";
import fries from "../assets/fries.png";
import hotDog from "../assets/hotDog.png";

function App() {
  const [countBurger, setCountBurger] = useState(0);
  const [countFries, setCountFries] = useState(0);
  const [countHotDog, setCountHotDog] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculate = (flag, name, number, price) => {
    if (flag === "plus") {
      if (name === "Burger") {
        setCountBurger(countBurger + 1);
      } else if (name === "Fries") {
        setCountFries(countFries + 1);
      } else if (name === "HotDog") {
        setCountHotDog(countHotDog + 1);
      }
      setTotalCount(totalCount + 1);
      setTotalPrice(totalPrice + price);
    } else if (flag === "minus") {
      if (number === 0) {
        return;
      } else {
        if (name === "Burger") {
          setCountBurger(countBurger - 1);
        } else if (name === "Fries") {
          setCountFries(countFries - 1);
        } else if (name === "HotDog") {
          setCountHotDog(countHotDog - 1);
        }
        setTotalCount(totalCount - 1);
        setTotalPrice(totalPrice - price);
      }
    }
  };

  const menu = [
    {
      image: burger,
      name: "Burger",
      nameRu: "Супер сырный",
      weight: "512г",
      price: 550,
      calculate: calculate,
      number: countBurger,
    },
    {
      image: fries,
      name: "Fries",
      nameRu: "Картошка фри",
      weight: "180г",
      price: 245,
      calculate: calculate,
      number: countFries,
    },
    {
      image: hotDog,
      name: "HotDog",
      nameRu: "Жгучий хот-дог",
      weight: "245г",
      price: 239,
      calculate: calculate,
      number: countHotDog,
    },
  ];

  return (
    <>
      <main>
        <div className="container">
          <div className="basket">
            <h2>Корзина</h2>
            <div className="amount">
              <span>{totalCount}</span>
            </div>
          </div>
          {menu.map((item, index) => {
            return <Choice menu={item} key={index} />;
          })}
          <hr />
          <div className="inTotal">
            <h3>Итого</h3>
            <div className="totalPrice">
              <span>{totalPrice}</span>
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
