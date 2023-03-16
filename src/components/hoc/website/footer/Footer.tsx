import SocialContact from '../../../social-contact/SocialContact';
import './Style.css';
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 footer-contact">
              <h4>About Me</h4> <hr className="p-2" />
              <p style={{ textAlign: 'justify' }}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available. or
                a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available. or
                a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4> <hr className="p-2" />
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>My Skills</h4> <hr className="p-2" />
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Interface</h4> <hr className="p-2" />
              <ul>
                <li>
                  <i className="bi bi-envelope">&nbsp;</i>
                  <a href="/" style={{ cursor: 'pointer' }}>
                    info@sunitlimited.com
                  </a>
                </li>
                <li>
                  <i className="bi bi-phone">&nbsp;</i>
                  <a href="/" style={{ cursor: 'pointer' }}>
                    +88 01749 60 81 71
                  </a>
                </li>
                <li>
                  <i className="bi bi-house">&nbsp;</i>
                  <a href="/" style={{ cursor: 'pointer' }}>
                    <p style={{ paddingLeft: '5px' }}>
                      37 Miyapara, Rani Bazar Road, <br /> Ghoramara, Boalia,
                      Rajshahi-6100
                    </p>
                  </a>
                </li>
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
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="copyright">
          &copy; Copyright
          <strong>
            <span>Menubar</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Powered by <a href="https://abccompanyltd.com">ABC Company Limited</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
