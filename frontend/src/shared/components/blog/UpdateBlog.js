import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // to get dynamic URL params

const UpdateBlog = () => {
  const { blogId } = useParams(); // this will extract the blogId from the URL
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Dummy data fetch based on blogId (you can replace this with an actual fetch call)
    const fetchBlogData = () => {
      setTitle(`Blog Title ${blogId}`); // Update title with the blogId
      setContent(`This is the content for blog ${blogId}`);
    };

    fetchBlogData();
  }, [blogId]); // re-fetch if blogId changes

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would call your backend API to update the blog
    console.log("Updating Blog ID:", blogId, title, content, image);
  };

  return (
    <div className="update-blog-form">
      <h2>Update Blog {blogId}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter title"
          />
        </div>

        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="Edit your post here..."
          />
        </div>

        <div>
          <label>Image (Optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;
