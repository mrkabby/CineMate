import React from "react";
import "./header.css";
import navListData from "../../data/navListData";
import Search from "../../components/Search";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <>
        <div>
          <Link to="/">
            <h1 className="logo">CineMate</h1>
          </Link>
        </div>

        <div className="nav">
          {location.pathname === "/search-results" && (
            <Link to="/landing">
              <li>Home</li>
            </Link>
          )}

          {navListData.map(({ _id, name, link }) => (
            <li key={_id}>
              <ScrollLink
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {name}
              </ScrollLink>
            </li>
          ))}
        </div>
        <div>
          <Search />
        </div>
      </>
    </header>
  );
};

export default Header;
