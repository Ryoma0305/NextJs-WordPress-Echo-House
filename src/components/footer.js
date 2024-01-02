const { default: Link } = require("next/link");
import Image from "next/image";

const navigation = [
  { name: "about", href: "/about/" },
  { name: "room", href: "/#room" },
  { name: "review", href: "/review/" },
  { name: "blog", href: "/blog/" },
  { name: "access", href: "/access/" }
];

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-contentwrap">
          <p class="footer-logo">
            女性専用シェアハウス<span>ECHO HOUSE</span>
          </p>

          <ul class="footer-nav">
            <li class="footer-nav-list">
              <Link href="<?php echo home_url('/'); ?>">TOP</Link>
            </li>
          </ul>
        </div>
        <div class="footer-sns-wrap">
          <a href="https://www.instagram.com/echofee_osaka/" class="footer-sns-instagram" target="_blank">
            <Image src="/images/ico-isg-bk.png" width={500} height={500} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/ECHO-HOUSE-324063728318655/?modal=admin_todo_tour" class="footer-sns-facebook" target="_blank">
            <Image src="/images/ico-fb-bk.png" width={500} height={500} alt="Facebook" />
          </a>
        </div>
      </div>
      <div class="floating">
        <a href="#">
          <span></span>TOP
        </a>
      </div>
    </footer>
  );
};

export default Footer;
