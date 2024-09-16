"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import BackToTopButton from "../../../_components/common/BackToTopButton";
import React from "react";
import { montserrat } from "../../../fonts/fonts";

const Footer = () => {
  const pathname = usePathname();

  const navigation = [
    { name: "top", href: !pathname.includes("en") ? "/" : "/eng/" },
    { name: "about", href: !pathname.includes("en") ? "/#about" : "/eng#about" },
    { name: "room", href: !pathname.includes("en") ? "/#room" : "/eng#room" },
    { name: "review", href: !pathname.includes("en") ? "/reviews/" : "/eng/reviews" },
    { name: "blog", href: !pathname.includes("en") ? "/blogs/" : "/eng/blogs" },
    { name: "access", href: !pathname.includes("en") ? "/#access" : "/eng#access" }
  ];

  const sns = [
    { name: "instagram", href: "https://www.instagram.com/echofee_osaka/", content: <FaInstagram /> },
    {
      name: "facebook",
      href: "https://www.facebook.com/ECHO-HOUSE-324063728318655/?modal=admin_todo_tour",
      content: <FaFacebook />
    }
  ];

  return (
    <footer className="relative bg-gray-300 px-8 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="md:flex md:justify-between">
          <p className="flex flex-col items-center text-xs md:text-base">
            女性専用シェアハウス<span className={`${montserrat.className} text-2xl font-black md:text-3xl`}>ECHO HOUSE</span>
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
