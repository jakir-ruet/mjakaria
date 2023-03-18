import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MySkills = (props) => {
  return (
    <div className="col-lg-2 col-md-6 footer-links">
      <h4>{props.mySkillsTitle}</h4> <hr className="p-2" />
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ color: 'gray', fontSize: '10px' }}
          />
          <a href="#">{props.mySkillsNames}</a>
        </li>
      </ul>
    </div>
  );
};
export default MySkills;
