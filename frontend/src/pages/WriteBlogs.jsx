import React from "react";
import WriteAndUpdate from "../components/WriteAndUpdate";

function WriteBlogs({ title }) {
  return (
    <div>
      <WriteAndUpdate titleName={title} />
    </div>
  );
}

export default WriteBlogs;
