const { default: Link } = require("next/link");
import Image from "next/image";

const navigation = [
  { name: "about", href: "/about/" },
  { name: "room", href: "/#room" },
  { name: "review", href: "/review/" },
  { name: "blog", href: "/blog/" },
  { name: "access", href: "/access/" },
];

const Header = () => {
  return (
    <header className="header fixed top-0 w-ful ease-out-expo z-10" id="header">
      <div className="header-inner flex items-center justify-between">
        <p className="mainvisual-contact-btn font-accent relative text-center text-lg cursor-pointer ease-out-expo bg-pink">
          <Link className="" href="/contact/">
            CONTACT US
          </Link>
        </p>

        <ul className="header-menu flex gap-4 justify-center font-accent text-sm">
          <li className="header-menu-list">
            <Link className="text-white" href="#about">
              ABOUT
            </Link>
          </li>
        </ul>

        <div className="global-nav">
          <nav>
            <ul>
              <li>
                <Link href="/">TOP</Link>
              </li>
              {/* <li>
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
              </li> */}
            </ul>

            <ul className="global-nav-sns">
              <li className="global-nav-sns-instagram">
                <a href=""></a>
              </li>
              {/* <li className="global-nav-sns-facebook">
                <a href=""></a>
              </li> */}
            </ul>
          </nav>
        </div>

        <div className="toggle-wrap">
          <div className="toggle-wrapper">
            <div className="toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="header-sns">
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
          {/* <a
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
          </a> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
