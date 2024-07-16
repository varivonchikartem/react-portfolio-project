import React from "react";
import clx from "classnames";
import styles from "./App.module.scss";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer/ui/Footer";
import { MainPage } from "./pages/MainPage";

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
      <main className={styles.Main}>
        <React.Suspense fallback="Loading">
          <MainPage />
        </React.Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default React.memo(App);
