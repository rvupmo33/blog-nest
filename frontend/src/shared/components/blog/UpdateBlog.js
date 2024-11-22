import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UpdateBlog.css";  // Import the CSS file

const UpdateBlog = () => {
  const { blogId } = useParams();  // Get blogId from URL params
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    // For now, using dummy data, you can replace it with a real fetch call
    setTitle(`Blog Title for Blog ${blogId}`);  // Dummy data
    setContent(`This is the content of Blog ${blogId}`);  // Dummy content
  }, [blogId]);  // Re-run when the blogId changes

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle blog update logic (e.g., send to API)
    console.log(`Updating Blog ID: ${blogId}`);
  };

  return (
    <div className="update-blog-container">
      <h2>Update Blog {blogId}</h2>
      <form className="update-blog-form" onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
};

export default UpdateBlog;




