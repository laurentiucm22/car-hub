"use client";

import Link from "next/link";
import Image from "next/image";
import CarhubLogo from "../public/logo.svg";

import { CustomeButtom } from "./";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[90rem] mx-auto flex justify-between items-center px-6 sm:16 py-4 sha">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src={CarhubLogo}
            alt="carhub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomeButtom
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-zinc-100 hover:bg-zinc-300 transition-all ease-in-out min-w-[8.125rem] font-extrabold shadow-md"
        />
      </nav>
    </header>
  );
};

export default Navbar;
