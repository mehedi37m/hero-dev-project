import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intPar = parseInt(id);
  const job = jobs.find((job) => job.id === intPar);

  const {
    logo,
    company_name,
    job_title,
    location,
    salary,

    job_type,
  } = job;

  const handleApply = () => {
    saveJobApplication(intPar);
    toast("You have successfully");
  };

  return (
    <div>
      <h1>Job Details</h1>

      <div className="grid gap-3 md:grid-cols-4">
        <div className="border md:col-span-3">
          <img className="w-96" src={logo} alt="" />
          <h1>{company_name} </h1>
          <p>{job_title}</p>
          <p>Address : {location}</p>
          <p>{job_type}</p>
          <p>Salary : ${salary}</p>
        </div>
        <div className="border">
          <h1>Side things</h1>
          <h1>{company_name} </h1>
          <p>{job_title}</p>
          <p>Address : {location}</p>

          <p>Salary : ${salary}</p>
          <div className="text-center">
            <button onClick={handleApply} className="btn">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
