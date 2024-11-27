import React from "react";
import BlogsList from "../components/BlogsList";

const UserBlogs = ({ blogs }) => {
  const username = "devwizard";
  const loadedBlogs = blogs.filter((blog) => blog.username === username);
  return <BlogsList items={loadedBlogs} />;
};

export default UserBlogs;
