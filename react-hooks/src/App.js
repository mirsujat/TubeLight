import React, { useState, useEffect } from "react";
import axois from "axios";
import "./App.css";
import { async } from "q";

function App() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");

  // fetch data from remote api.
  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      const result = await axois(
        "https://hn.algolia.com/api/v1/search?query=" + query
      );
      if (!ignore) setData(result.data);
    };
    fetchData();
    return () => {
      ignore = true;
    };
  }, [query]);
  return (
    <div>
      <header>
        <h1>React Hooks</h1>
      </header>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
