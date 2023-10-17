import React from "react";

const JobInfo = ({ jobs, currentIndex }) => {
  const { title, dates, duties, id } = jobs[currentIndex];

  return <div>JobInfo</div>;
};

export default JobInfo;
