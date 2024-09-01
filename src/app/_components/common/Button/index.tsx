import Link from "next/link";
import React from "react";
import { montserrat } from "@/app/fonts/fonts";

const Button = ({ title, href, target = "_self" }: { title: string; href: string; target?: string }) => {
  return (
    <p className="flex justify-center">
      <Link
        href={href}
        target={target}
        className={`${montserrat.className} inline-flex items-center justify-center border-2 border-gray-100 px-8 py-3 font-bold uppercase transition-colors duration-500 ease-out-expo hover:bg-black hover:text-white-100`}
      >
        {title}
      </Link>
    </p>
  );
};

export default Button;
