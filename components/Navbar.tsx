import Link from "next/link";
import Image from "next/image";
import CarhubLogo from "../public/logo.svg";

import { CustomeButtom } from "./";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:16 py-4 sha">
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
          containerStyles="text-primary-blue rounded-full bg-zinc-100 min-w-[130px] font-bold shadow-md"
        />
      </nav>
    </header>
  );
};

export default Navbar;
