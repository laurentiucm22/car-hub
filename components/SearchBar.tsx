"use client";

import React, { FC, useEffect, useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import magnifyIcon from "../public/magnifying-glass.svg";
import carModelIcon from "../public/model-icon.png";
import { useRouter, useSearchParams } from "next/navigation";
import { searchParamsScrollFixed } from "@/utils";

const SearchButton = () => (
  <button type="submit" className={"ml-1 z-10"}>
    <Image
      src={magnifyIcon}
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar: FC = () => {
  const [manufacturer, setManufacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    localStorage.setItem("persistentScroll", window.scrollY.toString());

    //prettier-ignore
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
  };

  useEffect(() => {
    searchParamsScrollFixed();
    return () => searchParamsScrollFixed();
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "")
      return alert("Please fill in the search bar!");

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());

    setManufacturer("");
    setModel("");
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item ">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />

        <div className="searchbar__item">
          <Image
            src={carModelIcon}
            alt="car model"
            width={25}
            height={25}
            className="absolute w-[1.25rem] h-[1.25rem] ml-4"
          />
          <input
            type="text"
            name="model"
            value={model}
            onChange={e => setModel(e.target.value)}
            placeholder="Tiguan"
            className="searchbar__input"
          />
        </div>

        <SearchButton />
      </div>
    </form>
  );
};

export default SearchBar;
