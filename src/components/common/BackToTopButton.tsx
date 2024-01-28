import clsx from "clsx";
import useScrollActivator from "../../utils/scrollActivator";
import React from "react";

const BackToTopButton = () => {
  const isScrolled = useScrollActivator(100);

  return (
    <div
      className={clsx("fixed bottom-0 right-0 transition-opacity duration-1000 ease-out-expo", {
        "opacity-100": isScrolled,
        "opacity-0": !isScrolled
      })}
      id="toTop"
      aria-hidden="false"
    >
      <div className="inline-flex bg-gradient-green text-center text-white-100">
        <a href="#" className="flex flex-col items-center gap-1 p-3 text-xs">
          <span className="h-0 w-0 border-x-[8px] border-b-[10px] border-t-0 border-solid border-[transparent_transparent_#fff_transparent]"></span>
          TOP
        </a>
      </div>
    </div>
  );
};

export default BackToTopButton;
