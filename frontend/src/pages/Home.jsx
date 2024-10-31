import React from "react";
import "../styles/Home.css";
import Home1 from "./Home1";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="page container home d-flex justify-content-center align-items-center">
        <div className="container2 p-5">
          <Link to={"/writeBlogs"} className="createblog">
            Create Blogs with BLOGZZ
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center my-4">
        <h3>Latest Blogs</h3>
      </div>

      <Home1 />
    </>
  );
}

export default Home;
