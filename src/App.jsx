import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchJobs = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setIsLoading(false);
      setJobs(data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <main className="job-center">
        <div className="loading"></div>
      </main>
    );
  }

  return (
    <main className="jobs-center">
      <BtnContainer jobs={jobs} />
      <JobInfo jobs={jobs} currentIndex={currentIndex} />
    </main>
  );
};
export default App;
