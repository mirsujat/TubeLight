import React, { useState, useEffect } from "react";
import axios from "axios";

const Articles = () => {
  const [posts, setPosts] = useState({ data: [] });

  useEffect(() => {
    let ignore = false;
    const fetchPosts = async () => {
      const posts = await axios("https://jsonplaceholder.typicode.com/posts");
      if (!ignore) setPosts(posts);
    };
    fetchPosts();
    return () => {
      ignore = true;
    };
  });

  return (
    <div>
      <h1>Hello From Articles Page</h1>
    </div>
  );
};
export default Articles;
