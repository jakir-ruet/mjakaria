import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="border-b border-gray-300 py-2">
      <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[2%] flex-wrap w-full">
        <img src={logo} height={45} width={45} alt="logo" />
        <FontAwesomeIcon
          icon={faBars}
          className="lg:hidden block h-6 w-6 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="text-base text-gray-600 lg:flex lg:justify-between">
            <li>
              <Link to={'/'} className="lg:px-2 py-2 block hover:text-blue-700">
                Home
              </Link>
              <Link to={'/'} className="lg:px-2 py-2 block hover:text-blue-700">
                About Me
              </Link>
              <Link to={'/'} className="lg:px-2 py-2 block hover:text-blue-700">
                Technologies
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
