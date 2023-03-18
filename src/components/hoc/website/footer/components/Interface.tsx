import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialContact from '../../../../social-contact/SocialContact';
import FooterContact from './FooterContact';

const Interface = (props) => {
  return (
    <div className="col-lg-3 col-md-6 footer-links">
      <h4>{props.interfaceTitle}</h4> <hr className="p-2" />
      <ul>
        <FooterContact
          footerLink="mailto:info@abccompany.com"
          footerIcon={<FontAwesomeIcon icon={faEnvelope} />}
          footerContactEntity="info@abccompany.com"
        />
        <FooterContact
          footerLink="tel:8801760111222"
          footerIcon={<i className="bi bi-phone"></i>}
          footerContactEntity="88 01760 111 222"
        />
        <FooterContact
          footerLink="#"
          footerIcon={<i className="bi bi-house pt-3">&nbsp;</i>}
          footerContactEntity="37 Saskatoon Road, North Saskatoon, Saskatchewan, Canada."
        />
      </ul>
      <div className="social-links mt-3">
        <SocialContact
          solialLink="http://www.abc.com"
          socialLinkTarget="_blank"
          solialIcon={<i className="bi bi-linkedin"></i>}
        />
        <SocialContact
          solialLink="http://www.abc.com"
          socialLinkTarget="_blank"
          solialIcon={<i className="bi bi-facebook"></i>}
        />
        <SocialContact
          solialLink="http://www.abc.com"
          socialLinkTarget="_blank"
          solialIcon={<i className="bi bi-twitter"></i>}
        />
        <SocialContact
          solialLink="http://www.abc.com"
          socialLinkTarget="_blank"
          solialIcon={<i className="bi bi-instagram"></i>}
        />
      </div>
    </div>
  );
};
export default Interface;
