import AboutMeOverview from '../../../AboutMeOverview';
import Interface from './components/Interface';
import MySkills from './components/MySkills';
import Newsletter from './components/Newsletter';
import UsefulLinks from './components/UsefulLinks';
import './Style.css';
const Footer = () => {
  return (
    <footer id="footer">
      <Newsletter
        nlTitle="Join Me Newsletter"
        nlMessage="Tamen quem nulla quae legam multos aute sint culpa legam noster magna"
      />
      ;
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <AboutMeOverview
              aboutMeTitle="About Me"
              aboutMeMessage="In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available. or
                a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available. or
                a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available."
            />

            <UsefulLinks
              usefulLinksTitle="Useful Links"
              usefulLinksNames="Home"
            />

            <MySkills mySkillsTitle="My Skills" mySkillsNames="B" />

            <Interface interfaceTitle="Interface" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center">
          <p className="pt-3 text-white">
            &copy; Copyright <b className="text-info">Md. Jakaria</b>. All
            Rights Reserved
          </p>
          <p className="pb-3 text-white">
            Powered by{' '}
            <a href="https://www.mjakaria.me" className="text-info">
              Md. Jakaria
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
