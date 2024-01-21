import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  const scrollWindow = () => {
    const top = 100;
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  return (
    <div
      className={isButtonActive ? "fixed bottom-0 right-0 opacity-100 transition-opacity duration-500 ease-out-expo" : "fixed bottom-0 right-0 opacity-0 transition-opacity duration-500 ease-out-expo"}
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
