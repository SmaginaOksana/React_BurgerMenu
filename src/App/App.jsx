import { useState } from "react";
import "./App.scss";
import Choice from "../components/Choice/Choice";
import delivery from "../assets/delivery.png";
import { menu } from "../content/content";
import burger from "../assets/burger.png";
import fries from "../assets/fries.png";
import hotDog from "../assets/hotDog.png";

function App() {
  const [countBurger, setCountBurger] = useState(0);
  const [countFries, setCountFries] = useState(0);
  const [countHotDog, setCountHotDog] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const toCountBurgerPlus = () => {
    setCountBurger(countBurger + 1);
    setTotalCount(totalCount + 1);
    setTotalPrice(totalPrice + 550);
  };
  const toCountBurgerMinus = () => {
    if (countBurger === 0) {
      return;
    } else {
      setCountBurger(countBurger - 1);
      setTotalCount(totalCount - 1);
      setTotalPrice(totalPrice - 550);
    }
  };

  const toCountFriesPlus = () => {
    setCountFries(countFries + 1);
    setTotalCount(totalCount + 1);
    setTotalPrice(totalPrice + 245);
  };
  const toCountFriesMinus = () => {
    if (countFries === 0) {
      return;
    } else {
      setCountFries(countFries - 1);
      setTotalCount(totalCount - 1);
      setTotalPrice(totalPrice - 245);
    }
  };

  const toCountHotDogPlus = () => {
    setCountHotDog(countHotDog + 1);
    setTotalCount(totalCount + 1);
    setTotalPrice(totalPrice + 239);
  };
  const toCountHotDogMinus = () => {
    if (countHotDog === 0) {
      return;
    } else {
      setCountHotDog(countHotDog - 1);
      setTotalCount(totalCount - 1);
      setTotalPrice(totalPrice - 239);
    }
  };

  const menu = [
    {
      food: burger,
      name: "Супер сырный",
      weight: "512г",
      price: "550₽",
      minus: toCountBurgerMinus,
      number: countBurger,
      plus: toCountBurgerPlus,
    },
    {
      food: fries,
      name: "Картошка фри",
      weight: "180г",
      price: "245₽",
      minus: toCountFriesMinus,
      number: countFries,
      plus: toCountFriesPlus,
    },
    {
      food: hotDog,
      name: "Жгучий хот-дог",
      weight: "245г",
      price: "239₽",
      minus: toCountHotDogMinus,
      number: countHotDog,
      plus: toCountHotDogPlus,
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
