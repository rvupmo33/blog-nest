import React from "react";
import BlogItem from "./BlogItem";
import "./BlogList.css";
const BlogsList = (props) => {

  const deleteBlogHandler = (blogId) => {
    // Call API or perform logic to delete the blog with blogId
    props.onDelete(blogId);
  };

  if (props.items.length === 0) {
    return (
      <div className="center">
        <h3 id="message">No Blogs Found...</h3>
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
            onDelete={deleteBlogHandler}
          />
        ))}
      </ul>
    </div>
  );
};
export default BlogsList;
