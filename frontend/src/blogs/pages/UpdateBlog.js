import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./UpdateBlog.css";

const UpdateBlog = ({ blogs, onUpdateBlog }) => {
  const { blogId } = useParams();
  const history = useHistory();
  const identifiedBlog = blogs.find((blog) => blog.id === blogId);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (identifiedBlog) {
      setTitle(identifiedBlog.title);
      setContent(identifiedBlog.content);
    }
  }, [identifiedBlog]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (identifiedBlog) {
      const updatedBlog = {
        id: identifiedBlog.id,
        title: title,
        content: content,
      };
      onUpdateBlog(updatedBlog);
      history.push(`/blogs/${blogId}`);
    }
  };

  if (!identifiedBlog) {
    return <h2>Blog not found!</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">Update Blog</button>
    </form>
  );
};

export default UpdateBlog;
