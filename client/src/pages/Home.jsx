import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import BurgerMenu from "../components/BurgerMenu";

const Home = ({ isOver, setIsOver }) => {
  return (
    <div>
      <NavBar isOver={isOver} setIsOver={setIsOver} />
      <Banner isOver={isOver} />
    </div>
  );
};

export default Home;
