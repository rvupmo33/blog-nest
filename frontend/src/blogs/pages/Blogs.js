import React, { useEffect, useState } from "react";
import BlogsList from "../components/BlogsList";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Blogs = () => {
  const [loadesBlogs, setLoadedBlogs] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:8080/api/blogs`
        );
        setLoadedBlogs(responseData.blogs);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest, userId]);

  return <BlogsList items={loadesBlogs} />;
};

export default Blogs;
