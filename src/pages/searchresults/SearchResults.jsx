import React from 'react';

const SearchResults = ({ searchResults }) => {
  return (
    <div className='container-fluid p-0 full-page'>
      <h2>Search Results:</h2>

      {searchResults.map((movie) => (
        <div key={movie.id} >
          <div >
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
          </div>
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
