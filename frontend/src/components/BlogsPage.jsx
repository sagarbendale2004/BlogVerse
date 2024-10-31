import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { MdEditSquare } from "react-icons/md";

function BlogsPage() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/getBlog/${id}`
        );
        setBlog(response.data.data);
      } catch (err) {
        setError("Failed to fetch blog data.");
      } finally {
        setLoading(false); // Set loading to false after the fetch completes
      }
    };
    fetchBlog();
  }, [id]);

  return (
    <div className="page container">
      <div className="my-3">
        {loading ? ( // Show loading indicator while fetching
          <p>Loading...</p>
        ) : error ? ( // Show error message if there's an error
          <p className="error-message">{error}</p>
        ) : (
          <>
            <Link
              to={`/updateBlog/${blog._id}`}
              className="d-flex justify-content-end edit"
            >
              <MdEditSquare />
            </Link>
            <h1 className="mt-3">{blog.title}</h1>
            <p className="blogsPagePara mt-2">{blog.desc}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default BlogsPage;
