import React from "react";
import Card from "./Card";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Hcss from "./home.module.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <section className={Hcss.maincontainer}>
        <div>
          <h1 className={Hcss.title}>RIGHT STAGE TO CUSTOMIZATION</h1>
          <p className={Hcss.ptitle}>TO SUPPLY CHAIN MANAGE</p>
        </div>
        <div className={Hcss.allcards}>
          <div className={Hcss.ptext}>
            <h1 className={Hcss.planetitle}>PLANE YOUR IDIAS</h1>
            <p className={Hcss.detailp}>
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
      <Footer />
    </>
  );
};

export default Home;

// <section className="hero-section">
// <p>Welcome to</p>
// <h1>Vishwa page</h1>
// </section>
