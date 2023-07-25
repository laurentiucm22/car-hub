"use client";

import { FC } from "react";
import { CustomeButtom } from "./index";
import Image from "next/image";
import HeroCar from "@/public/hero.png";

const Hero: FC = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experince with our effortless booking
          process.
        </p>

        <CustomeButtom
          title="Explore Cars"
          containerStyles="bg-primary-blue hover:bg-indigo-700 transition-all ease-in-out text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={HeroCar} alt="Car" fill objectFit="contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
