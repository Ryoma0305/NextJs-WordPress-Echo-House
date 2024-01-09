import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import BackToTopButton from "./common/BackToTopButton";

const navigation = [
  { name: "about", href: "/about/" },
  { name: "room", href: "/#room" },
  { name: "review", href: "/review/" },
  { name: "blog", href: "/blog/" },
  { name: "access", href: "/access/" }
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
    <footer className="bg-gray-300 py-16">
      <div className="mx-auto max-w-[1200px]">
        <div>
          <p className="flex flex-col items-center text-xs">
            女性専用シェアハウス<span className="font-accent text-2xl font-black">ECHO HOUSE</span>
          </p>

          <ul className="hidden md:flex">
            {navigation.map((item) => (
              <li className="" key={item.name}>
                <Link className="uppercase" href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="mt-4 flex justify-center gap-2">
          {sns.map((item) => (
            <li key={item.name} className="text-xl">
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
