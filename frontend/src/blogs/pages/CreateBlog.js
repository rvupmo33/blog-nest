import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CreateBlog.css";

const CreateBlog = ({ onAddBlog }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);
  const handleImageChange = (event) => setImage(event.target.files[0]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Create a new blog object
      const newBlog = {
        id: Math.random().toString(), // Generate a unique id
        username: "currentuser", // Or use logged-in user's username
        title,
        content,
        image: image ? URL.createObjectURL(image) : "", // Optional: Handle image URL
        date: new Date().toISOString(),
      };

      // Pass the new blog to the parent (App.js) to update the state
      onAddBlog(newBlog);

      // Navigate to home or blogs page after creation
      history.push("/");
    } catch (error) {
      console.error("Error creating blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-blog-form">
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
            placeholder="Enter title"
          />
        </div>

        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={handleContentChange}
            required
            placeholder="Write your post here..."
          />
        </div>

        <div>
          <label>Image (Optional)</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Posting..." : "Post Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
