import React from "react";
import { montserrat } from "../../../fonts/fonts";

const SectionHeading = ({ titleJp, titleEn }: { titleJp: string; titleEn: string }) => {
  return (
    <div className="flex justify-center">
      <h2 className="relative inline-flex flex-col justify-center pb-8 text-center">
        <span
          className={`${montserrat.className} relative z-0 text-xl font-medium uppercase before:absolute before:left-0 before:top-0 before:z-[-1] before:h-8 before:w-8 before:rounded-full before:bg-green md:text-4xl`}
        >
          {titleEn}
        </span>
        <span className="text-xs font-semibold md:text-base">{titleJp}</span>
      </h2>
    </div>
  );
};

export default SectionHeading;
