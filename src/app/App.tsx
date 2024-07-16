import React from "react";
import clx from "classnames";
import styles from "./App.module.scss";

interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = (props) => {
  const { className } = props;

  const appClasses = clx(styles.App, {
    [className!]: className,
  });

  return <main className={appClasses}>App</main>;
};

export default React.memo(App);
