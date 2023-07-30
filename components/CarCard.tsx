"use client";

import { useState } from "react";
import Image from "next/image";
import { CarsProp } from "@/types";
import { CarDetails, CustomeButtom } from ".";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import steeringWheelImg from "../public/steering-wheel.svg";
import tireImg from "../public/tire.svg";
import gasImg from "../public/gas.svg";
import rightArrowImg from "../public/right-arrow.svg";

interface CarsCardProps {
  car: CarsProp;
}

const CarCard = ({ car }: CarsCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    city_mpg,
    class: carClass,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[2rem] font-extrabold">
        {carRent}
        <span className="text-[0.875rem] font-semibold">$</span>
        <span className="self-center text-[0.875rem] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          priority
          className="object-contain"
          quality={100}
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={steeringWheelImg}
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p className="text-[0.875rem]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={tireImg} alt="tire" width={20} height={20} />
            <p className="text-[0.875rem]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={gasImg} alt="gas" width={20} height={20} />
            <p className="text-[0.875rem]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomeButtom
            title="View More"
            containerStyles="w-full py-[1rem] rounded-full bg-primary-blue"
            textStyles="text-slate-200 text-[0.875rem] leading-[1.063rem] font-semibold"
            rightIcon={rightArrowImg}
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
