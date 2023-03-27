import logo from '../../../../../assets/logo.png';
import { Link } from 'react-router-dom';
const Brand = () => {
  return (
    <div className="font-bold text-2xl cursor-pointer items-center font-[Poppins] text-gray-800">
      <Link to={'/'} className=" flex text-3xl text-indigo-600 mr-1 pt-2">
        <img src={logo} height={45} width={45} alt="logo" />
        <span>NABILGROUP</span>
      </Link>
    </div>
  );
};
export default Brand;
