import React, { useState, useEffect } from "react";
import axios from "axios";

const Articles = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const articles = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(articles);
    };
    fetchPosts();
  }, []);

  console.log("Data: " + posts);
  return (
    <div>
      <h1>Hello From Articles Page</h1>
    </div>
  );
};
export default Articles;
