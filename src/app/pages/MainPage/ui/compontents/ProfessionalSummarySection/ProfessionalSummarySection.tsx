import React from "react";
import clx from "classnames";
import styles from "./ProfessionalSummarySection.module.scss";

interface ProfessionalSummarySectionProps {
  className?: string;
}

const ProfessionalSummarySection: React.FC<ProfessionalSummarySectionProps> = (props) => {
  const { className } = props;

  const professionalsummarysectionClasses = clx(styles.ProfessionalSummarySection, "grid-wrapper", "container", {
    [className!]: className,
  });

  return (
    <section className={professionalsummarysectionClasses}>
      <div className="summary">
        <h2 className="title">Professional Summary</h2>
        <p>
          I have consistently demonstrated exceptional responsibility and reliability in various team roles.
          My commitment to excellence ensures timely and high-quality task completion. Known for meticulous
          attention to detail, strong organizational skills, and effective priority management, my proactive
          approach and dedication to continuous improvement significantly contribute to project success. I
          foster a collaborative environment, offering constructive feedback and innovative solutions that
          enhance team performance and achieve project milestones.
        </p>
      </div>

      <div className="table-grid-wrapper ">
        <h2 className="table-grid-item-1">Team</h2>
        <h2 className="table-grid-item-2">Description</h2>

        <h3 className="table-grid-item-1">
          LeverX Group <br /> Frontend Developer
        </h3>
        <p className="table-grid-item-2">
          Took part in code assessments and offered suggestions to team members, contributing to better code
          quality and ease of maintenance providing constructive feedback, worked closely with diverse teams,
          such as product managers, designers, and fellow developers, to ensure the delivery of top-notch
          software solutions, and played a key role in troubleshooting and resolving complex technical issues,
          contributing to the stability and reliability of the frontend application
        </p>
        <h3 className="table-grid-item-1">
          Freelance Upwork <br /> Frontend Developer
        </h3>
        <p className="table-grid-item-2">
          Consistently met project deadlines and effectively managed workloads to ensure on-time delivery of
          features and enhancements, actively participated in retrospectives and post-project evaluations to
          identify areas for improvement and implement process enhancements, and demonstrated flexibility and
          adaptability in embracing changes and iterations in the software development process, adapting to
          evolving business needs.
        </p>
        <h3 className="table-grid-item-1">Lorem ipsum dolor sit amet.</h3>
        <p className="table-grid-item-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod delectus itaque ea eum, inventore
          eveniet deserunt molestias minima vitae fuga? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Debitis possimus similique ad provident enim aspernatur quasi minima iusto, facilis, molestias
          sed unde. Cum aut provident ullam unde aperiam nisi assumenda iste vitae molestias ipsum. Adipisci,
          quidem? Fugit cumque porro accusamus rem quo maiores architecto sint rerum quae earum non quos,
        </p>
      </div>
    </section>
  );
};

export default React.memo(ProfessionalSummarySection);
