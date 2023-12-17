const { default: Link } = require("next/link");
import Image from "next/image";

const navigation = [
  { name: "about", href: "/about/" },
  { name: "room", href: "/#room" },
  { name: "review", href: "/review/" },
  { name: "blog", href: "/blog/" },
  { name: "access", href: "/access/" }
];

const Header = () => {
  return (
    <header className="header fixed top-0 z-10 w-full ease-out-expo" id="header">
      <div className="header-inner flex items-center justify-between">
        <p className="mainvisual-contact-btn relative cursor-pointer bg-contact-btn text-center font-accent text-xs ease-out-expo md:text-lg">
          <Link className="flex items-center justify-center px-8 py-4" href="/contact/">
            CONTACT US
          </Link>
        </p>

        <ul className="header-menu hidden justify-center gap-4 font-accent text-sm md:flex">
          <li className="header-menu-list">
            <Link className="text-white" href="#about">
              ABOUT
            </Link>
          </li>
        </ul>

        {/* <div className="global-nav fixed top-0 left-0 right-0 bottom-0 text-center flex invisible flex-col justify-center items-center opacity-0 transition-opacity-600ms transition-visibility-600ms bg-white">
          <nav>
            <ul className="list-none">
              <li className="mb-4vw text-44rem opacity-0 translate-x-200px transition-transform-600ms transition-opacity-200ms [&:nth-child(2)]:delay-60ms [&:nth-child(3)]:delay-80ms [&:nth-child(4)]:delay-100ms [&:nth-child(5)]:delay-120ms [&:nth-child(6)]:delay-140ms [&:nth-child(6)]:delay-160ms flex items-center justify-center">
                <Link href="/" className="block color-$color-font-main no-underline py-10px transition-color-600ms">
                  TOP
                </Link>
              </li>
              <li>
                <Link href="/#about">ABOUT</Link>
              </li>
              <li>
                <Link href="/#room">ROOM</Link>
              </li>
              <li>
                <Link href="/review/">REVIEW</Link>
              </li>
              <li>
                <Link href="/blog/">BLOG</Link>
              </li>
              <li>
                <Link href="/#access">ACCESS</Link>
              </li>

              <li>
                <Link href="/contact-en">CONTACT</Link>
              </li>

              <li>
                <div>
                  <Link
                    href="https://www.instagram.com/echofee_osaka/"
                    target="_blank"
                  >
                    <Image
                      src="/images/ico-isg-bk.png"
                      width={500}
                      height={500}
                      alt="Instagram"
                    />
                  </Link>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/ECHO-HOUSE-324063728318655/?modal=admin_todo_tour"
                    target="_blank"
                  >
                    <Image
                      src="/images/ico-fb-bk.png"
                      width={500}
                      height={500}
                      alt="Facebook"
                    />
                  </a>
                </div>
              </li>
            </ul>

            <ul className="global-nav-sns opacity-0 translate-x-200px transition-transform-600ms transition-opacity-200ms flex items-center justify-center delay-2s md:hidden">
              <li className="global-nav-sns-instagram [&:first-of-type]:margin-right-24rem">
                <Link href="" className="w-64rem block transition-color-600ms"></Link>
              </li>
              <li className="global-nav-sns-facebook">
                <a href=""></a>
              </li>
            </ul>
          </nav>
        </div> */}

        <div className="toggle-wrap relative mr-4 mt-4 h-8 w-8">
          <div className="toggle-wrapper z-100 toggle-wrapper-base cursor-pointer md:hidden">
            <div className="toggle">
              <span className="transition-transform-600ms transition-top-500ms absolute left-0 top-0 block h-[1px] w-full bg-white"></span>
              <span className="transition-transform-600ms transition-top-500ms absolute left-0 top-[10px] block h-[1px] w-full bg-white"></span>
              <span className="transition-transform-600ms transition-top-500ms absolute left-0 top-[20px] block h-[1px] w-full bg-white"></span>
            </div>
          </div>
        </div>

        {/* <div className="header-sns">
          <a
            href="https://www.instagram.com/echofee_osaka/"
            target="_blank"
            className="header-sns-instagram"
          >
            <Image
              src="/images/ico-isg-wh.png"
              width={500}
              height={500}
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/ECHO-HOUSE-324063728318655/?modal=admin_todo_tour"
            target="_blank"
            className="header-sns-facebook"
          >
            <Image
              src="/images/ico-fb-wh.png"
              width={500}
              height={500}
              alt="Facebook"
            />
          </a>

          <a
            href="https://www.instagram.com/echofee_osaka/"
            target="_blank"
            className="add-header-sns-instagram"
          >
            <Image
              src="/images/ico-isg-bk.png"
              width={500}
              height={500}
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/ECHO-HOUSE-324063728318655/?modal=admin_todo_tour"
            target="_blank"
            className="add-header-sns-facebook"
          >
            <Image
              src="/images/ico-fb-bk.png"
              width={500}
              height={500}
              alt="Facebook"
            />
          </a>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
