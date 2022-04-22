import React from 'react';
import '../styles/Header.css';
import logo from '../images/logo.png'

const Header = () => {
  return (
    <header>
      <img className="header__logo" src={logo} alt="Logo"/>
      <h1 className="header__title">TO DO APP</h1>
      <p className="header__subtitle">Best To Do lists in the history of Universe</p>
    </header>
  );
};

export default Header;
