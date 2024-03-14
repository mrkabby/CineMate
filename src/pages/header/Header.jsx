import React, { useState } from 'react';
import './header.css';
import NavListItem from '../../components/NavListItem';
import navListData from '../../data/navListData';
import Search from '../../components/Search';
import Button from '../../components/Button';

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
        {navList.map(nav => (
          <NavListItem key={nav._id} nav={nav} navOnClick={handleNavOnClick} />
        ))}
      </ul>

      <Search />
      <Button icon={<ion-icon name="add-outline"></ion-icon>} name='Watchlist' />
    </header>
  );
};

export default Header;
