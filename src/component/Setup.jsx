import React from "react";
import Marquee from "react-fast-marquee";
import Marquee1 from "../assets/marquee1.svg";
import Marquee2 from "../assets/marquee2.svg";
import Marquee3 from "../assets/marquee3.svg";
import Marquee4 from "../assets/marquee4.svg";
import Marquee5 from "../assets/marquee5.svg";
import Marquee6 from "../assets/marquee6.svg";
import Marquee7 from "../assets/marquee7.svg";
import Marquee8 from "../assets/marquee8.svg";

const Setup = () => {
  return (
    <div>
      <p className="text-md font-semibold mb-4 text-center">
        Share your setup with
      </p>
      <h2 className="text-4xl font-bold text-primary mb-4 text-center">
        #Renting Carnival
      </h2>
      <Marquee pauseOnHover={true} className="cursor-pointer flex gap-4">
      {[Marquee1, Marquee2, Marquee3, Marquee4, Marquee5, Marquee6, Marquee8].map((image, index) => (
        <div key={index} className="group relative">
          <img
            src={image}
            alt={`image-${index}`}
            className="w-80 h-80 p-4 object-cover transition-transform transform group-hover:scale-105"
          />
          <div className="absolute inset-0 border border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      ))}
    </Marquee>


    </div>
  );
};

export default Setup;
