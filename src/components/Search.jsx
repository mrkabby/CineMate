import React, { useState } from "react";
import "./search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const navigate = useNavigate();

  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=`;

  const handleSearch = async () => {
    try {
      const response = await fetch(API_URL + query);
      const data = await response.json();
      setSearchResults(data.results);
      navigate("/search-results", {
        state: { searchResults: data.results },
      });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={`search `}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onKeyDown={onKeyDown}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ion-icon name="search-outline" onClick={handleSearch}></ion-icon>
    </div>
  );
};

export default Search;
