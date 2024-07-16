import React from "react";
import clx from "classnames";
import styles from "./Footer.module.scss";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { className } = props;

  const footerClasses = clx(styles.Footer, {
    [className!]: className,
  });

  return <div className={footerClasses}>Footer</div>;
};
