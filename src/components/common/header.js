import { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import useScrollActivator from "@/utils/scrollActivator";

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

export default function Header() {
  const isScrolled = useScrollActivator(100);

  const [isOpen, setIsOpen] = useState(false);
  const toggleFunction = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={isScrolled ? "fixed top-0 z-10 w-full bg-white-100 transition-all duration-1000 ease-out-expo" : "fixed top-0 z-10 w-full transition-all duration-1000 ease-out-expo"}
      id="header"
    >
      <div className="flex items-center justify-between">
        <p className="relative cursor-pointer bg-gradient-pink text-center font-accent text-xs ease-out-expo md:text-lg">
          <Link className="flex items-center justify-center px-8 py-4 text-white-100" href="/contact/">
            CONTACT US
          </Link>
        </p>

        <ul className="hidden justify-center gap-12 font-accent text-base md:flex">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link className={isScrolled ? "uppercase text-black transition-all duration-1000 ease-out-expo" : "uppercase text-white-100 transition-all duration-1000 ease-out-expo"} href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <nav className="fixed inset-0 z-50 hidden h-screen flex-col bg-white-100 pt-32 aria-hidden:flex md:hidden" aria-hidden={isOpen}>
          <ul className="flex list-none flex-col items-center gap-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-xl uppercase">
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
            className={
              isScrolled
                ? "block h-[1px] w-8 bg-black transition-all duration-1000 ease-out-expo group-aria-expanded:translate-y-[9px] group-aria-expanded:rotate-45 group-aria-expanded:bg-black"
                : "block h-[1px] w-8 bg-white-100 transition-all duration-1000 ease-out-expo group-aria-expanded:translate-y-[9px] group-aria-expanded:rotate-45 group-aria-expanded:bg-black"
            }
          />
          <span
            className={
              isScrolled
                ? "block h-[1px] w-8 bg-black transition-all duration-1000 ease-out-expo group-aria-expanded:bg-black group-aria-expanded:opacity-0"
                : "block h-[1px] w-8 bg-white-100 transition-all duration-1000 ease-out-expo group-aria-expanded:bg-black group-aria-expanded:opacity-0"
            }
          />
          <span
            className={
              isScrolled
                ? "block h-[1px] w-8 bg-black transition-all duration-1000 ease-out-expo group-aria-expanded:translate-y-[-9px] group-aria-expanded:-rotate-45 group-aria-expanded:bg-black"
                : "block h-[1px] w-8 bg-white-100 transition-all duration-1000 ease-out-expo group-aria-expanded:translate-y-[-9px] group-aria-expanded:-rotate-45 group-aria-expanded:bg-black"
            }
          />
        </button>

        <ul className="hidden items-center justify-center gap-2 pr-8 md:flex">
          {sns.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                target="_blank"
                className={isScrolled ? "text-2xl text-black transition-all duration-1000 ease-out-expo" : "text-2xl text-white-100 transition-all duration-1000 ease-out-expo"}
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
