import { useState } from 'react';
import navbarItems from './NavbarItems';

const SimpleMenu = (title, path, hideMobileMenu) => {
  return (
    <li onClick={hideMobileMenu}>
      <a className="nav-link" href={path}>
        {title}
      </a>
    </li>
  );
};
const EachNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleHideMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <div
      id="navbar"
      className={
        mobileMenuOpen
          ? 'navbar order-last order-lg-0 navbar-mobile'
          : 'navbar order-last order-lg-0'
      }
    >
      <ul>
        {navbarItems.map((navbarItem, index) => {
          if (navbarItem.path) {
            return (
              <SimpleMenu
                {...navbarItem}
                hideMobileMenu={handleHideMobileMenu}
                key={index}
              />
            );
          }
        })}
      </ul>
    </div>
  );
};
export default EachNavbar;
