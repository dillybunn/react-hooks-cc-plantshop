// import React, { useState } from "react";

function Search({ query, setQuery }) {
  const handleSearch = (e) => setQuery(e.target.value);

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
