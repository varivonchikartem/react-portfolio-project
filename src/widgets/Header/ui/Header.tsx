import React from "react";
import clx from "classnames";
import styles from "./Header.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { className } = props;

  const headerClasses = clx(styles.Header, "container", {
    [className!]: className,
  });

  return (
    <div className={headerClasses}>
      <nav className={styles.HeaderMenu}>
        <a className={styles.link} href="#">
          Varivonchik A.A
        </a>
        <p className={styles.role}>Frontend Developer</p>
        <p className={clx(styles.location, "hidden-mobile")}>Belarus, Minsk</p>
      </nav>
    </div>
  );
};
