import React from "react";
import clx from "classnames";
import styles from "./ProjectsOverviewSection.module.scss";

interface ProjectsOverviewSectionProps {
  className?: string;
}

const ProjectsOverviewSection: React.FC<ProjectsOverviewSectionProps> = (props) => {
  const { className } = props;

  const projectsoverviewsectionClasses = clx(styles.ProjectsOverviewSection, "projects", {
    [className!]: className,
  });

  return (
    <section className={projectsoverviewsectionClasses}>
      <div className="container">
        <div className="projects-inner">
          <nav className="projects-menu">
            <h2 className="title">Projects Overview</h2>
            <p>
              I have compiled a selection of projects for your consideration in preparation for upcoming
              interview.
            </p>

            <ul className="projects-list">
              <li className="projects-item">
                <figure>
                  <div className="projects-image-block">
                    <img
                      className="projects-image"
                      src="	https://www.josephz.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollector-status.8e21eac7.jpg&w=3840&q=75"
                      alt="lorem Project Image"
                      width="2495"
                      height="1625"
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    <h3 className="projects-title">lorem</h3>
                    <p className="projects-subtitle">Lorem ipsum dolor sit</p>
                  </figcaption>
                </figure>
              </li>
              <li className="projects-item">
                <figure>
                  <div className="projects-image-block">
                    <img
                      className="projects-image"
                      src="	https://www.josephz.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollector-status.8e21eac7.jpg&w=3840&q=75"
                      alt="lorem Project Image"
                      width="2495"
                      height="1625"
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    <h3 className="projects-title">lorem</h3>
                    <p className="projects-subtitle">Lorem ipsum dolor sit</p>
                  </figcaption>
                </figure>
              </li>
              <li className="projects-item">
                <figure>
                  <div className="projects-image-block">
                    <img
                      className="projects-image"
                      src="	https://www.josephz.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollector-status.8e21eac7.jpg&w=3840&q=75"
                      alt="lorem Project Image"
                      width="2495"
                      height="1625"
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    <h3 className="projects-title">lorem</h3>
                    <p className="projects-subtitle">Lorem ipsum dolor sit</p>
                  </figcaption>
                </figure>
              </li>
              <li className="projects-item">
                <figure>
                  <div className="projects-image-block">
                    <img
                      className="projects-image"
                      src="	https://www.josephz.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollector-status.8e21eac7.jpg&w=3840&q=75"
                      alt="lorem Project Image"
                      width="2495"
                      height="1625"
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    <h3 className="projects-title">lorem</h3>
                    <p className="projects-subtitle">Lorem ipsum dolor sit</p>
                  </figcaption>
                </figure>
              </li>
              <li className="projects-item">
                <figure>
                  <div className="projects-image-block">
                    <img
                      className="projects-image"
                      src="	https://www.josephz.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollector-status.8e21eac7.jpg&w=3840&q=75"
                      alt="lorem Project Image"
                      width="2495"
                      height="1625"
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    <h3 className="projects-title">lorem</h3>
                    <p className="projects-subtitle">Lorem ipsum dolor sit</p>
                  </figcaption>
                </figure>
              </li>
              <li className="projects-item">
                <figure>
                  <div className="projects-image-block">
                    <img
                      className="projects-image"
                      src="	https://www.josephz.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollector-status.8e21eac7.jpg&w=3840&q=75"
                      alt="lorem Project Image"
                      width="2495"
                      height="1625"
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    <h3 className="projects-title">lorem</h3>
                    <p className="projects-subtitle">Lorem ipsum dolor sit</p>
                  </figcaption>
                </figure>
              </li>
              <li className="projects-item">
                <figure>
                  <div className="projects-image-block">
                    <img
                      className="projects-image"
                      src="	https://www.josephz.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollector-status.8e21eac7.jpg&w=3840&q=75"
                      alt="lorem Project Image"
                      width="2495"
                      height="1625"
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    <h3 className="projects-title">lorem</h3>
                    <p className="projects-subtitle">Lorem ipsum dolor sit</p>
                  </figcaption>
                </figure>
              </li>
              <li className="projects-item">
                <figure>
                  <div className="projects-image-block">
                    <img
                      className="projects-image"
                      src="	https://www.josephz.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollector-status.8e21eac7.jpg&w=3840&q=75"
                      alt="lorem Project Image"
                      width="2495"
                      height="1625"
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    <h3 className="projects-title">lorem</h3>
                    <p className="projects-subtitle">Lorem ipsum dolor sit</p>
                  </figcaption>
                </figure>
              </li>
              <li className="projects-item">
                <figure>
                  <div className="projects-image-block">
                    <img
                      className="projects-image"
                      src="	https://www.josephz.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollector-status.8e21eac7.jpg&w=3840&q=75"
                      alt="lorem Project Image"
                      width="2495"
                      height="1625"
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    <h3 className="projects-title">lorem</h3>
                    <p className="projects-subtitle">Lorem ipsum dolor sit</p>
                  </figcaption>
                </figure>
              </li>
              <li className="projects-item">
                <figure>
                  <div className="projects-image-block">
                    <img
                      className="projects-image"
                      src="	https://www.josephz.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollector-status.8e21eac7.jpg&w=3840&q=75"
                      alt="lorem Project Image"
                      width="2495"
                      height="1625"
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    <h3 className="projects-title">lorem</h3>
                    <p className="projects-subtitle">Lorem ipsum dolor sit</p>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProjectsOverviewSection);
