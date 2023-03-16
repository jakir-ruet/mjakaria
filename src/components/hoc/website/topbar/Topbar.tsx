import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoneNumber from '../../../social-contact/ContactNumber';
import SocialContact from '../../../social-contact/SocialContact';
import './Style.css';
const Topbar = () => {
  return (
    <section id="topbar" className="d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <SocialContact
            solialLink="mailto:info@abccompanyltd.com"
            solialIcon={<FontAwesomeIcon icon={faEnvelope} />}
            socialText="info@abccompanyltd.com"
          />
          <PhoneNumber
            phoneLink="tel:8801788123321"
            phoneIcon={<FontAwesomeIcon icon={faMobileAlt} />}
            phoneNumber="+88 01788 123 321"
          />
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
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
    </section>
  );
};
export default Topbar;
