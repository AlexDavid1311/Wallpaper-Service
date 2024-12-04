import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search images"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleKeyUp}
        className="searching-box"
      />
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
