import styles from "./Footer.module.scss";

const socials = [
  { icon: "twitter", link: "https://www.twitter.com" },
  { icon: "instagram", link: "https://www.instagram.com" },
  { icon: "youtube", link: "https://www.youtube.com" },
  { icon: "facebook", link: "https://www.facebook.com" },
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
        <div className={styles.brand}>BRAND</div>
        <ul className={styles.socials}>
          {socials.map((element, index) => (
            <li key={index}>
              <a href={element.link}>{element.icon}</a>
            </li>
          ))}
        </ul>
        <ul className={styles.importantLinks}>
          {importantLinks.map((element, index) => (
            <li key={index}>
              <a href={element.link}>{element.label}</a>
            </li>
          ))}
        </ul>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} BRAND. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
