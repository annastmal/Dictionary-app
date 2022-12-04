import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import Results from "./Results";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState();

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <>
      <div
        className="Dictionary search-box"
        style={{ marginTop: results ? "20px" : "300px" }}
      >
        <form onSubmit={search}>
          <button className="btn-search">
            <FontAwesomeIcon className="icon-search" icon={faSearch} />
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Search for a word..."
            onChange={handleKeywordChange}
          ></input>
        </form>
      </div>
      <Results results={results} />
    </>
  );
}
