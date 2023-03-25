import logo from '../../../../../assets/logo.png';
import { Link } from 'react-router-dom';
const Brand = () => {
  return (
    <Link
      to={'/'}
      className="font-semibold text-2xl cursor-pointer flex items-center font-serif text-gray-500"
    >
      <span className="flex text-2xl text-indigo-600 mr-1 pt-0">
        <img src={logo} height={45} width={45} alt="logo" />
        menubar
      </span>
    </Link>
  );
};
export default Brand;
