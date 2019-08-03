import React, { useState, useEffect, useMemo } from "react";
import useDebounce from "../Components/CustomHooks/useDebounce";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");
  const [isSearching, setIsSearching] = useState(false);

  // Now we call our hook, passing in the current searchTerm value.
  // The hook will only return the latest value (what we passed in) ...
  // ... if it's been more than 500ms since it was last called.
  // Otherwise, it will return the previous value of searchTerm.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(query, 1000);

  const fetchData = query => {
    return axios("https://hn.algolia.com/api/v1/search?query=" + query)
      .then(result => result)
      .catch(err => {
        console.log(err);
        return [];
      });
  };
  // fetch data from remote api.
  useEffect(() => {
    // Make sure we have a value (user has entered something in input)
    if (debouncedSearchTerm) {
      // Set isSearching state
      setIsSearching(true);
      // Fire off our API call
      fetchData(debouncedSearchTerm).then(result => {
        // Set back to false since request finished
        setIsSearching(false);
        setData(result.data);
      });
    } else {
      setData({ hits: [] });
    }
  }, [debouncedSearchTerm]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  console.log("Data: ", data);

  let content = null;

  if (data.hits.length === 0) {
    content = <div>Loading...</div>;
  }
  if (isSearching && data.hits.length > 0) {
    content = <div>Searching...</div>;
  }
  if (data.hits.length > 0 && !isSearching) {
    content = (
      <div>
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

  return (
    <div>
      <header>
        <h1>React Hooks</h1>
      </header>
      <input type="text" name={query} value={query} onChange={handleChange} />
      <button type="button" onClick={() => console.log("submitted!!")}>
        submit
      </button>
      {content}
    </div>
  );
};

export default Home;
