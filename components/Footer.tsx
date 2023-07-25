import Image from "next/image";
import Link from "next/link";
import CarhubLogo from "@/public/logo.svg";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 md:py-14">
        <div className="flex flex-col justify-start items-start gap-4">
          <Image
            src={CarhubLogo}
            alt="logo"
            width={118}
            height={18}
            objectFit="contain"
          />
          <p className="font-bold text-black text-sm">
            The best cars since 1992
          </p>
          <p className="font-bold text-black md:text-lg">@carhub</p>
        </div>

        <div className="footer__links">
          {footerLinks.map(({ title, links }) => (
            <div key={title} className="footer__link">
              <h3 className="font-bold">{title}</h3>
              {links.map(({ title, url }) => (
                <Link
                  key={title}
                  href={url}
                  className="text-gray-500 hover:text-indigo-400 transition-all ease-in-out font-medium duration-200"
                  target="_blank"
                >
                  {title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row  justify-between md:items-center border-t border-gray-100 text-sm px-6 md:px-16 py-5">
        <p>@2023 CarHub. All rigths reserved</p>
        <div className="footer__copyrights-link">
          <Link
            href="/"
            className="text-gray-500 hover:text-indigo-400 mr-3 md:mr-0"
          >
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500 hover:text-indigo-400">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
