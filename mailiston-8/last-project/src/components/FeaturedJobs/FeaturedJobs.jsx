import { useEffect, useState } from "react";
import Job from "./Job";


const FeaturedJobs = () => {

const [jobs , setJobs] = useState([]);
const [dataLength, setDataLength] = useState(4);

useEffect(() => {
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data))
},[])






    return (

        <div className="my-10">

            <div className="text-center">
                <p>{jobs.length} </p>
            <h1 className="text-4xl font-bold">Featured Jobs</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, beatae?<br /> Voluptatibus voluptatum minima repellendus totam possimus soluta omnis sint sit.</p>
            </div>

            <div className=" my-10 grid grid-cols-1 md:grid-cols-2 gap-7">
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
                   <div className={ dataLength === jobs.length && 'hidden' }>
                    <button onClick={()=> setDataLength(jobs.length)} className="btn ">Show More</button>
                   </div>
        </div>
    );
};

export default FeaturedJobs;