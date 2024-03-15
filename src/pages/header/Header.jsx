import React, { useState } from 'react';
import './header.css';
import NavListItem from '../../components/NavListItem';
import navListData from '../../data/navListData';
import Search from '../../components/Search';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Header = ({ scroll }) => {
  const [navList, setNavList] = useState(navListData);

  const handleNavOnClick = (id) => {
    const newNavList = navList.map(nav => {
      if (nav._id === id) {
        return { ...nav, active: true };
      } else {
        return { ...nav, active: false };
      }
    });
    setNavList(newNavList);
  };

  return (
    <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
      <a href="/" className="logo">CineMate</a>

      <ul className='nav'>
        <li><Link to= {"/"}>HOME</Link></li>
        <li><Link to={'/schedule'}>POPULAR </Link> </li>
        <li><Link to= {'/trend'}>UPCOMING</Link></li>
        <li><Link to={'/toprated'}>TOP RATED</Link></li>
        <li></li>
        {/* {navList.map(nav => (
          <NavListItem key={nav._id} nav={nav} navOnClick={handleNavOnClick} />
        ))} */}
      </ul>

      <Search />
     
    </header>
  );
};

export default Header;
