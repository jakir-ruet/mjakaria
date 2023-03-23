import React from 'react';
import '../Style.css';
const EachNavbar = () => {
  return (
    <div id="navbar" className="navbar">
      <ul>
        <li>
          <a className="nav-link active" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            Services
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            Portfolio
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            Team
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            Contact
          </a>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
      <div />
    </div>
  );
};
export default EachNavbar;
