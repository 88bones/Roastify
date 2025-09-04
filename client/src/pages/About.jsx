import React from "react";
import BurgerMenu from "../components/BurgerMenu";

const About = ({ isOver }) => {
  return (
    <div>
      <div className="absolute z-10 right-0 top-20">
        {isOver == true ? (
          <div className="md:hidden">
            <BurgerMenu />
          </div>
        ) : (
          ""
        )}
      </div>
      <h1>About</h1>
    </div>
  );
};

export default About;
