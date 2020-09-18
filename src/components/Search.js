import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
            target="_blank"
          >
            Open
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (term) {
        (async () => {
          const { data } = await axios.get(
            "https://en.wikipedia.org/w/api.php",
            {
              params: {
                action: "query",
                list: "search",
                origin: "*",
                format: "json",
                srsearch: term,
              },
            }
          );
          setResults(data.query.search);
        })();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  return (
    <div>
      <h1>Search on Wikipedia</h1>
      <div className="ui form">
        <div className="field">
          <label>Enter Search term</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};
