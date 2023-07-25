import Image from "next/image";
import Link from "next/link";
import CarhubLogo from "@/public/logo.svg";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 md:py-14">
        <div className="flex justify-center items-start gap-6 ">
          <Image
            src={CarhubLogo}
            alt="logo"
            width={118}
            height={18}
            objectFit="contain"
          />
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
      <div className="flex justify-center items-center border-t border-gray-100 text-sm py-5">
        <div className="footer__copyrights-link">
          <p>@2023 CarHub. All rigths reserved</p>
          <Link href="/" className="text-gray-500 hover:text-indigo-400">
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
