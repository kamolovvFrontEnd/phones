import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Phones from "./Phones";
import "./Card.css";
import AboutPhoneModel from "./AboutPhoneModel";
import AllProducts from "./AllProducts";
import AppBar from "./SearchAppBar";

function Cards() {
  const [iphoneCards, setIphoneCards] = useState([]);
  const [samsungCards, setSamsungCards] = useState([]);
  const [data, setData] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const responce = await fetch("http://localhost:3001/phones");
        const card = await responce.json();
        setIphoneCards(card.iphone);
        setSamsungCards(card.samsung);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const searchResult = iphoneCards.filter((el) =>
      el.model.toLowerCasse().includes(data)
    );
    console.log(searchData);
    setSearchData(searchResult)
  }, [data]);


  console.log(data)
  return (
    <div className="container">
      <AppBar data={data} setData={setData} />

      <hr />

      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Cards;
