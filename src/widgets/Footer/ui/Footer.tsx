import React from "react";
import clx from "classnames";
import styles from "./Footer.module.scss";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { className } = props;

  const footerClasses = clx(styles.Footer, "container", {
    [className!]: className,
  });

  return (
    <footer className={footerClasses}>
      <nav className={styles.FooterWrapper}>
        <a className={styles.link} href="#">
          Varivonchik A.A
        </a>
        <div className={styles.socials}>
          <p>Linkedin</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Reading</p>
        </div>
        <div className={styles.email}>
          <p>Let's build something together.</p>
          <p>varivonchikartem.business@gmail.com</p>
        </div>
      </nav>
    </footer>
  );
};
