"use client";

import { useState, Fragment, useEffect } from "react";
import Image from "next/image";
import chevronIcon from "../public/chevron-up-down.svg";
import { Listbox, Transition } from "@headlessui/react";
import { CustomeFilterProps } from "@/types";
import { searchParamsScrollFixed, updateSearchParans } from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";

const CustomFilter = ({ title, options }: CustomeFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleUpdateParams = (e: { title: string; value: string }) => {
    localStorage.setItem("persistentScroll", window.scrollY.toString());

    const newPathName = updateSearchParans(
      title.toLowerCase(),
      e.value.toLowerCase()
    );
    router.push(newPathName);
  };

  useEffect(() => {
    searchParamsScrollFixed();
    return () => searchParamsScrollFixed();
  }, [searchParams]);

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={e => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src={chevronIcon}
              alt="chevron up down icon"
              width={20}
              height={20}
              className="cursor-pointer ml-4 object-contain"
            />
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options custome__scrollbar">
              {options.map(option => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
