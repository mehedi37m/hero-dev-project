import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className=" px-6 font-bold rounded-l-lg btn-warning">Breaking News</button>
            <Marquee className="bg-blue-200 text-black rounded-r-lg" pauseOnHover={true} speed={150}>
                <Link className="mr-10">I can be a React component, multiple React components, or just some text.....</Link>
                <Link className="mr-10">I can be a React component, multiple React components, or just some text.....</Link>
                <Link className="mr-10">I can be a React component, multiple React components, or just some text.....</Link>
       </Marquee>
        </div>
    );
};

export default BreakingNews;