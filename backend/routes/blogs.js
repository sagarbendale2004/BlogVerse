import express from "express";
import Blog from "../models/blog.js";

const router = express.Router();

// Utility function for sending responses
const sendResponse = (res, status, message, data = null) => {
  res.status(status).json({ message, data });
};

// POST route for creating a blog post
router.post("/post", async (req, res) => {
  try {
    const { title, desc } = req.body;

    // Basic validation
    if (!title || !desc) {
      return sendResponse(res, 400, "Title and description are required.");
    }

    const newPost = new Blog({ title, desc });
    await newPost.save();
    sendResponse(res, 200, "Data saved successfully.");
  } catch (error) {
    sendResponse(res, 500, "Some error has occurred.");
    console.error("Error in Router Post req - blogs.js:", error);
  }
});

// GET route for fetching all blog posts
router.get("/getAll", async (req, res) => {
  try {
    const data = await Blog.find().sort({ createdAt: -1 });
    sendResponse(res, 200, "Posts retrieved successfully.", data);
  } catch (error) {
    sendResponse(res, 500, "Some error has occurred.");
    console.error("Error in Router GET req - blogs.js:", error);
  }
});

// GET Recent Blogs
router.get("/getRecentBlogs", async (req, res) => {
  try {
    const data = await Blog.find().sort({ createdAt: -1 }).limit(3);
    sendResponse(res, 200, "Posts retrieved successfully.", data);
  } catch (error) {
    sendResponse(res, 500, "Some error has occurred.");
    console.error("Error in Router GET req - blogs.js:", error);
  }
});

//GET Blogs by id
router.get("/getBlog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Blog.findById(id);
    sendResponse(res, 200, "Posts retrieved successfully.", data);
  } catch (error) {
    sendResponse(res, 500, "Some error has occurred.");
    console.error("Error in Router GET req - blogs.js:", error);
  }
});

//Update By id
router.put("/updateBlog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;
    const data = await Blog.findByIdAndUpdate(id, { title, desc });
    sendResponse(res, 200, "data updated successfully.", data);
  } catch (error) {
    sendResponse(res, 500, "Some error has occurred.");
    console.error("Error in Router GET req - blogs.js:", error);
  }
});

// DELETE route for deleting a blog by ID
router.delete("/deleteBlog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Blog.findByIdAndDelete(id);
    if (!data) {
      return sendResponse(res, 404, "Post not found.");
    }
    sendResponse(res, 200, "Post deleted successfully.");
  } catch (error) {
    sendResponse(res, 500, "Some error has occurred.");
    console.error("Error in Router DELETE request - blogs.js:", error);
  }
});

export default router;
