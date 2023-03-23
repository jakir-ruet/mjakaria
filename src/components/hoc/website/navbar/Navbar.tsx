import React from 'react';
import Brand from './components/Brand';
import EachNavbar from './components/EachNavbar';
function Header() {
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <Brand />
        <EachNavbar />
      </div>
    </header>
  );
}

export default Header;
