import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // corrected from 'require' to 'required'
    },
    desc: {
      type: String,
      required: true, // corrected from 'require' to 'required'
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema); // 'Blog' as the model name, following naming conventions
