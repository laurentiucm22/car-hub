"use client";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import Image from "next/image";
import carIcon from "@/public/car-logo.svg";
import { manufacturersList } from "@/constants";
import { Fragment, useState } from "react";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState<string>("");

  const filteredManufacturer =
    query === ""
      ? manufacturersList
      : manufacturersList.filter(m =>
          m
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full flex items-center">
          <Combobox.Button className="absolute top-['0.875rem']">
            <Image
              src={carIcon}
              alt="car icon"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={e => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="search-manufacturer__options custome__scrollbar z-50">
              {filteredManufacturer.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option font-medium"
                >
                  {`No results for ${query}`}
                </Combobox.Option>
              ) : (
                filteredManufacturer.map(item => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) =>
                      `realtive search-manufacturer__option ${
                        active
                          ? "bg-primary-blue text-white"
                          : "bg-white text-gray-900"
                      } transition-all ease-in-out`
                    }
                  >
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
