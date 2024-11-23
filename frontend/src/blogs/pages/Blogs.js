import React from "react";
import BlogsList from "../components/BlogsList";

const Blogs = ({ blogs }) => {
  return <BlogsList items={blogs} />;
};

export default Blogs;
