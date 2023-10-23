import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Phones from "./Phones";
import "./Card.css";
import AboutPhoneModel from "./AboutPhoneModel";
import AllProducts from "./AllProducts";
import AppBar from "./SearchAppBar";
import Cart from "./Cart";
import { setIphoneCards, setSamsungCards } from "./store/reducer/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import { useCartSelector } from "./hooks/useSelector";

function Cards() {
  const { iphoneCards, samsungCards } = useCartSelector();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const responce = await fetch("http://localhost:3001/phones");
        const card = await responce.json();
        dispatch(setIphoneCards(card.iphone));
        dispatch(setSamsungCards(card.samsung));
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <AppBar />
        <Link to="../" relative="path" className="back">
          Back
        </Link>
        <Routes>
          <Route
            path="/"
            element={
              <AllProducts samsung={samsungCards} iphone={iphoneCards} />
            }
          />
          <Route path="/iphone" element={<Phones cards={iphoneCards} />} />
          {iphoneCards.map((card) => {
            return (
              <Route
                path={`/iphone/iphone-14pro-${card.color}`}
                element={<AboutPhoneModel card={card} />}
              />
            );
          })}
          <Route path={`/samsung`} element={<Phones cards={samsungCards} />} />
          {samsungCards.map((card) => {
            return (
              <Route
                path={`/${card.firstpage}/${card.firstpage}-${card.secondpage}-${card.color}`}
                element={<AboutPhoneModel card={card} />}
              />
            );
          })}
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Cards;
