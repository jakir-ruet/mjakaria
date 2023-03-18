import Brand from './Brand';
import Navbar from './EachNavbar';

function Navbars() {
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <Brand />
        <Navbar />
      </div>
    </header>
  );
}
export default Navbars;
