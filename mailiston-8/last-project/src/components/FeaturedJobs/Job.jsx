import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    company_name,
    job_title,
    location,
    salary,
    remote_or_onsite,
    job_type,
  } = job;
  return (
    <div>
      <div className="card card-compact h-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-36 w-44 pt-3" src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">{job_title}</h2>
          <p className="text-2xl font-semibold">{company_name}</p>
          <div className="flex gap-4">
            <button className="btn">{remote_or_onsite} </button>
            <button className="btn">{job_type} </button>
          </div>
          <div className="card-actions justify-between">
          <div className="flex justify-center items-center gap-2">
          <MdLocationOn className="text-2xl"></MdLocationOn>
            <p>{location} </p>
          </div>
            <div>
            <p>$ Salary : {salary}</p>
            </div>
          </div>
         <Link to ={`/job/${id}`}> <button className="btn btn-primary ">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
