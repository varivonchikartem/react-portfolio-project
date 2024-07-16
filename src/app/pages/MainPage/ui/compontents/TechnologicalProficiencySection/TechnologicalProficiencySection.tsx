import React from "react";
import clx from "classnames";
import styles from "./TechnologicalProficiencySection.module.scss";

interface TechnologicalProficiencySectionProps {
  className?: string;
}

const TechnologicalProficiencySection: React.FC<TechnologicalProficiencySectionProps> = (props) => {
  const { className } = props;

  const technologicalproficiencysectionClasses = clx(
    styles.TechnologicalProficiencySection,
    "grid-wrapper",
    "container",
    {
      [className!]: className,
    }
  );

  return (
    <section className={technologicalproficiencysectionClasses}>
      <div className="summary">
        <h2 className="title">Technological Proficiency</h2>
        <p>
          I possess extensive expertise and familiarity with a wide array of cutting-edge technologies. My
          comprehensive knowledge encompasses both fundamental principles and advanced implementations,
          ensuring proficient utilization in diverse development environments. Through practical experience
          and continuous learning, I have honed my skills to adeptly employ these tools and frameworks in
          creating robust, scalable, and efficient solutions.
        </p>
      </div>

      <div className="table-grid-wrapper ">
        <h2 className="table-grid-item-1">Technical Overview</h2>
        <h2 className="table-grid-item-2">Key Technologies</h2>

        <h3 className="table-grid-item-1">Programming Languages:</h3>
        <p className="table-grid-item-2">Javascript, Typescript</p>
        <h3 className="table-grid-item-1">Web Frameworks and Libraries:</h3>
        <p className="table-grid-item-2">
          React, NextJs, Jest, Redux, Redux Toolkit, React.createContext, React Router Dom
        </p>
        <h3 className="table-grid-item-1">Build and Dependency Management:</h3>
        <p className="table-grid-item-2">Webpack, Vite, Babel</p>
        <h3 className="table-grid-item-1">API Communication: </h3>
        <p className="table-grid-item-2">Rest, GraphQl</p>
        <h3 className="table-grid-item-1">Web Server Setup Configuration: </h3>
        <p className="table-grid-item-2">Nginx, Nginx Gzip, SSL Certificate</p>
        <h3 className="table-grid-item-1">UI Libraries: </h3>
        <p className="table-grid-item-2">Material UI, Mantine, Tailwind CSS, Bootstrap</p>
        <h3 className="table-grid-item-1">Form Handling Libraries:</h3>
        <p className="table-grid-item-2">React Hook Form, Formik, Yup</p>
        <h3 className="table-grid-item-1">Other technologies: </h3>
        <p className="table-grid-item-2">Git, Postman, Docker, Storybook, Eslint, Prettier</p>
      </div>
    </section>
  );
};

export default React.memo(TechnologicalProficiencySection);
