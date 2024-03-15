import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Header from '../header/Header'

export const Home = () => {
  return (
    <>
    <Header />
      <div>
        <section>
          <section>
            <div className='coverImage'>
              <div className='content'>
                <h1>Unlimited movies </h1>

                <p>
                  Binge all your favorite movies in one place
                </p>
            
                    <Link to="/landing">
                  <a href="#" class="custom-button">
                    <span class="background-overlay"></span>
                    <span class="icon-container">
                      <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                    <span class="button-text">Get Started</span>
                  </a>
                    </Link>
                </div>
              </div>
       
          </section>
        </section>
      </div>



    </>
  )
}
