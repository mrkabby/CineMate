import React, { useState } from 'react';
import SearchResults from '../pages/searchresults/SearchResults';
import './search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const API_KEY = 'ce84f9a1e267020ce2e0b6973f4fcbbc';
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

  const handleSearch = async () => {
    try {
      const response = await fetch(API_URL + query);
      const data = await response.json();
      setSearchResults(data.results);


    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className='search'>
      <input 
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ion-icon name="search-outline" onClick={handleSearch}></ion-icon>

      {searchResults && <SearchResults searchResults={searchResults} />}
    </div>
  );
};

export default Search;
