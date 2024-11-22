import React from "react";
import BlogItem from "./BlogItem";
import "./BlogList.css";

const BlogsList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Blogs Found...</h2>
      </div>
    );
  }

  return (
    <div className="content-container">
      <ul className="blog-list">
        {props.items.map((blog) => (
          <BlogItem
            key={blog.id}
            id={blog.id}
            title={blog.title}
            content={blog.content}
            image={blog.image}
            username={blog.username}
          />
        ))}
      </ul>
    </div>
  );
};

export default BlogsList;
