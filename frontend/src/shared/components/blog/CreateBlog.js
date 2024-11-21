import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);
  const handleImageChange = (event) => setImage(event.target.files);

  const handleSubmit = async (event) => {
    event.preventDefault();

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
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
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