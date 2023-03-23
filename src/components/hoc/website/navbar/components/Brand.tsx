import { Link } from 'react-router-dom';
import logo from '../../../../../assets/logo.png';
const Brand = () => {
  return (
    <div className="navbar bg-body-tertiary">
      <Link className="navbar-brand" to={'/'}>
        <img
          src={logo}
          width="45"
          height="45"
          className="d-inline-block align-text-top"
          alt="logo"
        />
        <h1 className="logo">Menubar</h1>
      </Link>
    </div>
  );
};
export default Brand;
