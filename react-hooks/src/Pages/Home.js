import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");
  const [searchTerm, setSearchTerm] = useState("");
  const [submit, setSubmit] = useState(false);

  // fetch data from remote api.
  useEffect(() => {
    // let ignore = false;
    const fetchData = () => {
      axios("https://hn.algolia.com/api/v1/search?query=" + query)
        .then(result => {
          setData(result.data);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchData();
  }, [query]);

  const searchHandler = () => {
    axios("https://hn.algolia.com/api/v1/search?query=" + searchTerm)
      .then(result => {
        setTimeout(() => {
          setData(result.data);
          setSubmit(true);
        }, 2000);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (submit) {
      searchHandler();
    }
  }, [submit]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }
  console.log("Data: ", data);

  let content = <div>Loading...</div>;

  if (data.hits.length > 0) {
    content = (
      <div>
        <header>
          <h1>React Hooks</h1>
        </header>
        <input
          type="text"
          name={searchTerm}
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="button" onClick={searchHandler}>
          submit
        </button>
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

  return <div>{content}</div>;
};

export default Home;
