import React from 'react';
import './SearchResults.css'
import { useLocation } from 'react-router-dom';
import Card from '../../components/card';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const SearchResults = () => {
  const location =useLocation()
const searchResults = location.state.searchResults

  return (
    <>
    <Header/>
    <section id='schedule' className='schedule'>
    <div className='container-fluid'>
        <div className='row'>
            <h4 className='section-title'>Search Results</h4>
        </div>
        <div className='row'>
            <div className='filters'>
                <p>Filters</p>
            </div>
            <div className='trial'>
                {searchResults.map((movie) => {
                    return (
                        <Card
                       
                           
                          slide = {movie}

                        />
                    )
                })}

            </div>

        </div>
    </div>
</section >
<Footer/>
    </>

    
  );
};

export default SearchResults;
