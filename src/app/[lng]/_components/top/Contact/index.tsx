import Link from "next/link";
import React from "react";
import { montserrat } from "../../../fonts/fonts";
import Image from "next/image";
import bgImg from "../../../../../../public/images/f5.webp";

const Contact = () => {
  return (
    <section>
      <p className="">
        <Link
          href="/contact/"
          className="relative z-0 flex h-40 flex-col items-center justify-center gap-2 text-white-100 before:absolute before:inset-0 before:z-[1] before:inline-block before:bg-contact before:opacity-5 before:transition-all before:duration-1000 before:ease-out-expo hover:before:opacity-100 md:h-[30rem] md:gap-4"
        >
          <span className="absolute inset-0">
            <Image src={bgImg} alt="" width="600" height="400" className="h-full w-full object-cover" />
          </span>
          <span className="relative z-[1] text-xs font-bold md:text-lg">お気軽にお問い合わせく下さい</span>
          <span className={`${montserrat.className} relative z-[1] text-xl font-black md:text-4xl`}>GET IN TOUCH</span>
        </Link>
      </p>
    </section>
  );
};

export default Contact;
