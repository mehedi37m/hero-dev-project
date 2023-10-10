import { useParams } from "react-router-dom";
import Header from "../../Shared/Header";
import RightSideNav from "../../Shared/RightSideNav";
import Navbar from "../../Shared/Navbar";


const News = () => {
  const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            
          <div className="container mx-auto">
          <div className="flex justify-between">
                <div className="border w-3/4">
                    <p className="text-5xl">News Details</p>
                    <p>{id} </p>
                </div>

                <div >
                    <RightSideNav></RightSideNav>
                </div>

            </div>
          </div>
               
        </div>
    );
};

export default News;


