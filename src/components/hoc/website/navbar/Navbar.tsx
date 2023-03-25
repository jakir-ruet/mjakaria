import { useState } from 'react';
import Brand from './components/Brand';
const Header = () => {
  let Links = [
    { title: 'Home', path: '/' },
    { title: 'Home', path: '/' },
    { title: 'Home', path: '/' },
    { title: 'Home', path: '/' },
    { title: 'Home', path: '/' },
    { title: 'Home', path: '/' },
    { title: 'Home', path: '/' },
    { title: 'Home', path: '/' },
  ];
  let [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="shadow-md w-full sticky top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <Brand />
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          ion
          <i className={menuOpen ? 'IoCloseOutline' : 'IoMenuSharp'}></i>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            menuOpen ? 'top-20' : 'top-[490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.title} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.path} className="text-gray-400 duration-500">
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
