import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import WriteBlogs from "./pages/WriteBlogs";
import BlogsPage from "./components/blogsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/writeBlogs" element={<WriteBlogs title={"write"} />} />
        <Route path="/blogsPage/:id" element={<BlogsPage />} />
        <Route
          path="/updateBlog/:id"
          element={<WriteBlogs title={"update"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
