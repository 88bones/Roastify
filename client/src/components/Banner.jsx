import React from "react";
import BurgerMenu from "./BurgerMenu";

const Banner = ({ isOver }) => {
  return (
    <div className="flex justify-center h-100">
      <div className="absolute z-10 right-0">
        {isOver == true ? (
          <div>
            <BurgerMenu />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex w-full">
        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6">
          <p className="max-w-xs">
            Get <span className="text-green-500">roasted</span> by your own
            playlist based on your{" "}
            <span className="font-bold text-green-500">Spotify</span> listening
            history.
          </p>
          <button className="bg-green-600 px-16 py-4 rounded-2xl text-2xl cursor-pointer">
            Login with Spotify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
