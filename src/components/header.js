const { default: Link } = require("next/link");
import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const navigation = [
  { name: "about", href: "/about/" },
  { name: "room", href: "/#room" },
  { name: "review", href: "/review/" },
  { name: "blog", href: "/blog/" },
  { name: "access", href: "/access/" }
];

const sns = [
  { name: "instagram", href: "https://www.instagram.com/echofee_osaka/", content: <FaInstagram /> },
  {
    name: "facebook",
    href: "https://www.facebook.com/ECHO-HOUSE-324063728318655/?modal=admin_todo_tour",
    content: <FaFacebook />
  }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFunction = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header fixed top-0 z-10 w-full ease-out-expo" id="header">
      <div className="header-inner flex items-center justify-between">
        <p className="mainvisual-contact-btn relative cursor-pointer bg-contact-btn text-center font-accent text-xs ease-out-expo md:text-lg">
          <Link className="flex items-center justify-center px-8 py-4 text-white-100" href="/contact/">
            CONTACT US
          </Link>
        </p>

        <ul className="header-menu hidden justify-center gap-4 font-accent text-sm md:flex">
          {navigation.map((item) => (
            <li className="header-menu-list" key={item.name}>
              <Link className="uppercase text-white-100" href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className={isOpen ? "fixed inset-0 z-40 flex h-screen flex-col bg-blue-100 md:hidden" : "fixed right-[-100%] md:right-4 md:hidden"}>
          <nav>
            <ul className="list-none">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="uppercase">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="list-none">
              {sns.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} target="_blank">
                    {item.content}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <button type="button" className="z-50 space-y-2 md:hidden" onClick={toggleFunction}>
          <span className={isOpen ? "block h-0.5 w-8 translate-y-2.5 rotate-45 bg-gray-600 duration-300" : "block h-0.5 w-8 bg-gray-600 duration-300"} />
          <span className={isOpen ? "block opacity-0 duration-300" : "block h-0.5 w-8 bg-gray-600 duration-300"} />
          <span className={isOpen ? "block h-0.5 w-8 -rotate-45 bg-gray-600 duration-300" : "block h-0.5 w-8 bg-gray-600 duration-300"} />
        </button>

        <ul className="header-sns hidden items-center justify-center gap-2 sm:flex">
          {sns.map((item) => (
            <li key={item.name}>
              <Link href={item.href} target="_blank">
                {item.content}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
