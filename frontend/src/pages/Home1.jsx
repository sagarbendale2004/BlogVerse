import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home1() {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        await axios
          .get("http://localhost:8000/api/v1/getRecentBlogs")
          .then((res) => setBlogs(res.data.data));
      } catch (error) {
        console.log("Error in fetching At Home1.jsx", error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="page container">
      {blogs &&
        blogs.map((item, i) => (
          <div key={i}>
            <Link className="homepageTitleLink" to={`blogsPage/${item._id}`}>
              <h2>{item.title}</h2>
            </Link>
            <p>{item.desc.slice(0, 500)}...</p>
          </div>
        ))}
    </div>
  );
}

export default Home1;
