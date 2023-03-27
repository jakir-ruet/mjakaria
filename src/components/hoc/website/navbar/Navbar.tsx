import { useState } from 'react';
import NavItems from './components/NavItems';
const Header = () => {
  let [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="shadow-md w-full sticky top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
          NABIL GROUP
        </div>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <p>{menuOpen ? 'Open' : 'Close'}</p>
        </div>
        <ul
          style={{ transition: '1s' }}
          className={`md:items-center md:flex md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${
            menuOpen ? 'hidden ' : 'block'
          }`}
        >
          {NavItems.map((link) => (
            <li key={link.title} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.href} className="text-gray-400 duration-500">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
