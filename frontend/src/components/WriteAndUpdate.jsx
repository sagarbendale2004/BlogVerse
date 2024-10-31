import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function WriteAndUpdate({ titleName }) {
  const [blog, setBlog] = useState({ title: "", desc: "" });

  // Destructure the id from useParams
  const { id } = useParams();
  const navigate = useNavigate(); // Corrected name for useNavigate

  const change = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (titleName === "write") {
        const res = await axios.post("http://localhost:8000/api/v1/post", blog);
        alert(res.data.message);
        setBlog({ title: "", desc: "" });
      } else {
        const res = await axios.put(
          `http://localhost:8000/api/v1/updateBlog/${id}`,
          blog
        );
        alert(res.data.message);
        navigate(`/blogsPage/${id}`); // Navigate correctly
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      alert("An error occurred while submitting the blog.");
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/getBlog/${id}`
        );
        setBlog(res.data.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetch();
  }, [id]);

  return (
    <div className="page container my-4">
      <h3 className="heading my-4">{titleName} Blogs..</h3>
      <div className="d-flex flex-column gap-3">
        <input
          type="text"
          name="title"
          placeholder="Enter Title Here.."
          className="form-text"
          value={blog.title}
          onChange={change}
        />
        <textarea
          name="desc"
          cols="30"
          rows="10"
          placeholder="Enter the Description Here..."
          className="form-text"
          value={blog.desc}
          onChange={change}
        ></textarea>
      </div>

      <button onClick={handleSubmit} className="button">
        {titleName} BLOG
      </button>
    </div>
  );
}

export default WriteAndUpdate;
