import React from "react";
import clx from "classnames";
import styles from "./App.module.scss";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer/ui/Footer";

interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = (props) => {
  const { className } = props;

  const appClasses = clx(styles.App, {
    [className!]: className,
  });

  return (
    <div className={appClasses}>
      <Header />
      <main>App</main>
      <Footer />
    </div>
  );
};

export default React.memo(App);
