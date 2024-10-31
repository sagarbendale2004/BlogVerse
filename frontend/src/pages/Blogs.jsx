import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Blogs() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/getAll");
        setBlog(res.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetch();
  }, []);

  return (
    <div className="page container">
      <div className="row d-flex justify-content-center">
        {blog &&
          blog.map((item, i) => (
            <Link
              to={`/blogsPage/${item._id}`}
              className="col-lg-3 mt-5 blog-card m-3 p-3 link"
              key={i}
            >
              <h4 className="blogHeading">{item.title}</h4>
              <p className="blogsPara mt-3">{item.desc.slice(0, 400)}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Blogs;
