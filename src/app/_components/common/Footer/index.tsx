"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import BackToTopButton from "../../../../app/_components/common/BackToTopButton";
import React from "react";

const navigation = [
  { name: "top", href: "/" },
  { name: "about", href: "#about" },
  { name: "room", href: "#room" },
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

const Footer = () => {
  return (
    <footer className="bg-gray-300 px-8 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="md:flex md:justify-between">
          <p className="flex flex-col items-center text-xs md:text-base">
            女性専用シェアハウス<span className="font-accent text-2xl font-black md:text-3xl">ECHO HOUSE</span>
          </p>

          <ul className="hidden md:flex md:gap-10">
            {navigation.map((item) => (
              <li className="md:text-xl" key={item.name}>
                <Link className="uppercase duration-700 ease-out-expo hover:opacity-50" href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="mt-4 flex justify-center gap-2 md:justify-end">
          {sns.map((item) => (
            <li key={item.name} className="text-xl transition-all duration-700 ease-out-expo hover:opacity-50 md:text-4xl">
              <Link href={item.href} target="_blank">
                {item.content}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <BackToTopButton />
    </footer>
  );
};

export default Footer;
