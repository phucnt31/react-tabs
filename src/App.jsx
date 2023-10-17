import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      <main>
        <div className="loading"></div>
      </main>
    );
  }

  return (
    <main>
      <JobInfo jobs={jobs} />
    </main>
  );
};
export default App;
