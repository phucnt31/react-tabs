import { useState } from "react";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);

  return (
    <main>
      <JobInfo />
    </main>
  );
};
export default App;
