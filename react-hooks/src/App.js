import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");

  // fetch data from remote api.
  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=" + query
      );
      if (!ignore) setData(result.data);
    };
    fetchData();
    return () => {
      ignore = true;
    };
  }, [query]);

  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <div>
      <header>
        <h1>React Hooks</h1>
      </header>
      <input type="text" name={query} value={query} onChange={handleChange} />
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
