import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import useScrollActivator from "../../utils/scrollActivator";
import React from "react";

export default function Header() {
  const navigation = [
    { name: "top", href: "/" },
    { name: "about", href: "/#about" },
    { name: "room", href: "/#room" },
    { name: "review", href: "/reviews/" },
    { name: "blog", href: "/blogs/" },
    { name: "access", href: "/#access" }
  ];

  const sns = [
    { name: "instagram", href: "https://www.instagram.com/echofee_osaka/", content: <FaInstagram /> },
    {
      name: "facebook",
      href: "https://www.facebook.com/ECHO-HOUSE-324063728318655/?modal=admin_todo_tour",
      content: <FaFacebook />
    }
  ];

  const isScrolled = useScrollActivator(100);

  const [isOpen, setIsOpen] = useState(false);
  const toggleFunction = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={clsx("fixed top-0 z-10 w-full transition-all duration-700 ease-out-expo", {
        "bg-white-100": isScrolled
      })}
      id="header"
    >
      <div className="flex items-center justify-between">
        <p className="relative cursor-pointer bg-gradient-pink text-center font-accent text-xs ease-out-expo md:text-lg">
          <Link className="flex items-center justify-center px-8 py-4 text-white-100 duration-700 ease-out-expo hover:opacity-50" href="/contact/">
            CONTACT US
          </Link>
        </p>

        <ul className="hidden justify-center gap-12 font-accent text-base md:flex">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                className={clsx("uppercase  transition-all duration-700 ease-out-expo hover:opacity-50", {
                  "text-black": isScrolled,
                  "text-white-100": !isScrolled
                })}
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <nav className="fixed inset-0 z-50 hidden h-screen flex-col bg-white-100 pt-32 aria-hidden:flex md:hidden" aria-hidden={isOpen}>
          <ul className="flex list-none flex-col items-center gap-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-xl uppercase" onClick={toggleFunction}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-8 flex list-none justify-center gap-4">
            {sns.map((item) => (
              <li key={item.name}>
                <Link href={item.href} target="_blank" className="text-3xl">
                  {item.content}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button type="button" className="group z-50 mr-4 space-y-2 md:hidden" onClick={toggleFunction} aria-expanded={isOpen}>
          <span
            className={clsx("block h-[1px] w-8 transition-all duration-700 ease-out-expo group-aria-expanded:translate-y-[9px] group-aria-expanded:rotate-45 group-aria-expanded:bg-black", {
              "bg-black": isScrolled,
              "bg-white-100": !isScrolled
            })}
          />
          <span
            className={clsx("block h-[1px] w-8 transition-all duration-700 ease-out-expo group-aria-expanded:bg-black group-aria-expanded:opacity-0", {
              "bg-black": isScrolled,
              "bg-white-100": !isScrolled
            })}
          />
          <span
            className={clsx("block h-[1px] w-8  transition-all duration-700 ease-out-expo group-aria-expanded:translate-y-[-9px] group-aria-expanded:-rotate-45 group-aria-expanded:bg-black", {
              "bg-black": isScrolled,
              "bg-white-100": !isScrolled
            })}
          />
        </button>

        <ul className="hidden items-center justify-center gap-2 pr-8 md:flex">
          {sns.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                target="_blank"
                className={clsx("text-2xl  transition-all duration-700 ease-out-expo hover:opacity-50", {
                  "text-black": isScrolled,
                  "text-white-100": !isScrolled
                })}
              >
                {item.content}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
