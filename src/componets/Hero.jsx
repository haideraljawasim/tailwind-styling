import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className=" text-white flex items-center justify-center h-screen">
      <div className="max-w-[800px] w-full text-center flex flex-col">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-6xl pb-3">Grow with data.</h1>
        <div className="flex justify-center items-center">
          <p className="pr-2">Fast, flexible financing for</p>
          <ReactTyped
            className="text-gray-400 font-bold text-xl"
            strings={["BTC", "SASS", "BTB"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          ></ReactTyped>
        </div>
        <button className="bg-[#00df9a] w-[200px] my-6 mx-auto rounded-md py-3 text-black hover:bg-[#113e31] hover:text-white ease-in-out duration-200">
          Get start
        </button>
      </div>
    </div>
  );
}

export default Hero;
