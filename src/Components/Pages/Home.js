import React from "react";
import Card from "./Card";
import Card1 from "./Card1";
import Card2 from "./Card2";
import "./home.css";
const Home = () => {
  return (
    <>
      <section className="main-container">
        <div>
          <h1 className="title">RIGHT STAGE TO CUSTOMIZATION</h1>
          <p className="ptitle">TO SUPPLY CHAIN MANAGE</p>
        </div>
        <div className="allcards">
          <div className="ptext">
            <h1 className="planetitle">PLANE YOUR IDIAS</h1>
            <p className="detailp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              iusto non nobis dicta reprehenderit iure debitis, deleniti
              voluptates, aliquam ratione maiores inventore excepturi.
              Doloremque.
            </p>
          </div>
          <Card />
          <Card1 />
          <Card2 />
        </div>
      </section>
    </>
  );
};

export default Home;

// <section className="hero-section">
// <p>Welcome to</p>
// <h1>Vishwa page</h1>
// </section>
