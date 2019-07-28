import React, { useState, useEffect } from "react";
import Axios from "axios";

const Article = ({ match }) => {
  const [article, setArticle] = useState({ data: [] });
  const [id, setId] = useState(match.params.id);

  useEffect(() => {
    const fetchArticle = async () => {
      const result = await Axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + id
      );
      setArticle(result);
    };
    fetchArticle();
  }, [id]);

  let content = <div>Loading...</div>;
  if (article.data !== []) {
    content = (
      <div>
        <h4>ID: {article.data.id}</h4>
        <h6>useId: {article.data.userId}</h6>
        <h5>Title: {article.data.title}</h5>
        <p>content: {article.data.body}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Hello From Article Page</h1>
      {content}
    </div>
  );
};

export default Article;
