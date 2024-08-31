import Link from "next/link";
import React from "react";

const Button = ({ title, href, target = "_self" }: { title: string; href: string; target?: string }) => {
  return (
    <p className="flex justify-center">
      <Link
        href={href}
        target={target}
        className="inline-flex items-center justify-center border-2 border-gray-100 px-8 py-3 font-accent font-bold uppercase transition-colors duration-500 ease-out-expo hover:bg-black hover:text-white-100"
      >
        {title}
      </Link>
    </p>
  );
};

export default Button;
