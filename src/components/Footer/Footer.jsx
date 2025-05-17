import { Instagram, Youtube, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const socials = [
  { icon: <Instagram />, link: "https://www.instagram.com/erickbgomez" },
  { icon: <Youtube />, link: "https://www.youtube.com" },
  { icon: <Facebook />, link: "https://www.facebook.com" },
  { icon: <Linkedin />, link: "https://www.linkedin.com/in/erickbgomez" },
];

const importantLinks = [
  { label: "All Categories", link: "/categories" },
  { label: "New Products", link: "/new-products" },
  { label: "Contact Us", link: "/contact" },
  { label: "Source Code", link: "https://github.com/ErickBGomez/fake-shop" },
];

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.content}>
        <div className={styles.brand}>BRXND</div>
        <ul className={styles.socials}>
          {socials.map((element, index) => (
            <li key={index}>
              <a href={element.link} target="_blank">
                {element.icon}
              </a>
            </li>
          ))}
        </ul>
        <ul className={styles.importantLinks}>
          {importantLinks.map((element, index) => (
            <li key={index}>
              <Link to={element.link}>{element.label}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} BRXND. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
