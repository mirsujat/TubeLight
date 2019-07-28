import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Articles = () => {
  const [posts, setPosts] = useState({ data: [] });

  useEffect(() => {
    const fetchPosts = async () => {
      const articles = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(articles);
    };
    fetchPosts();
  }, []);

  let content = <div>Loading...</div>;
  if (posts.data.length > 0) {
    content = posts.data.map(item => {
      return (
        <ul key={item.id}>
          <li>
            <Link to={`/api/${item.id}`}>{item.title}</Link>
          </li>
        </ul>
      );
    });
  }

  return (
    <div>
      <h1>Hello From Articles Page</h1>
      {content}
    </div>
  );
};
export default Articles;
