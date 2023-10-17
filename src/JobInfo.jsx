import React from "react";
import Duties from "./Duties";

const JobInfo = ({ jobs, currentIndex }) => {
  const { title, company, dates, duties, id } = jobs[currentIndex];

  return (
    <section className="jobs-center">
      <h3>{title}</h3>
      <p className="job-company">{company}</p>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </section>
  );
};

export default JobInfo;
