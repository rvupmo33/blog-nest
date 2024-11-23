import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import to use params and navigate
import "./DeleteBlog.css"; // Import the CSS file

const DeleteBlog = () => {
  const { blogId } = useParams(); // Get blogId from URL params
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    // For now, using dummy data, you can replace it with a real fetch call
    setTitle(`Blog Title for Blog ${blogId}`); // Dummy data
  }, [blogId]); // Re-run when the blogId changes

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle blog deletion logic (e.g., send to API)
    console.log(`Deleting Blog ID: ${blogId}`);
  };

  return (
    <div className="delete-blog-container">
      <h2>Delete Blog {blogId}</h2>

      <form className="delete-blog-form" onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
        </div>

        <p>This action cannot be undone.</p>
        <div className="delete-blog-buttons">
          <button type="submit">Cancel</button>
          <button type="submit">Delete</button>
        </div>
      </form>
    </div>
  );
};

export default DeleteBlog;
