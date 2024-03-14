
import React from 'react';

const SearchResults = ({ searchResults }) => {
  return (
    <div>
      <h2>Search Results:</h2>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
