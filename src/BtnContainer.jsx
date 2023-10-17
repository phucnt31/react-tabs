import React from "react";

const BtnContainer = ({ jobs }) => {
  return (
    <div className="btn-container">
      {jobs.map((job) => {
        return (
          <button className="job-btn" key={job.id}>
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
