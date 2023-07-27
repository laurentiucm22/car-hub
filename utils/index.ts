import { CarsProp } from "@/types";
import { nanoid } from "nanoid";

export const options: {} = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.CARS_API_KEY,
    "X-RapidAPI-Host": process.env.CARS_API_HOST,
  },
};

export const fetchCars = async () => {
  const baseUrl: string = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla&limit=6`;

  try {
    const response = await fetch(`${baseUrl}`, options);

    const result = await response.json();

    const transformedDataObj = result.map((data: CarsProp) => {
      return { id: nanoid(), ...data };
    });

    return transformedDataObj;
  } catch (e) {
    console.error(e);
  }
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};