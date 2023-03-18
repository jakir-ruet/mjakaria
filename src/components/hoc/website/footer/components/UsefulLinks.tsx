import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UsefulLinks = (props) => {
  return (
    <div className="col-lg-2 col-md-6 footer-links">
      <h4>{props.usefulLinksTitle}</h4> <hr className="p-2" />
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ color: 'gray', fontSize: '10px' }}
          />
          <a href="/">{props.usefulLinksNames}</a>
        </li>
      </ul>
    </div>
  );
};
export default UsefulLinks;
