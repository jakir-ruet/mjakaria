const AboutMeOverview = (props) => {
  return (
    <div className="col-lg-5 col-md-6 footer-contact">
      <h4>{props.aboutMeTitle}</h4> <hr className="p-2" />
      <p style={{ textAlign: 'justify' }}>{props.aboutMeMessage}</p>
    </div>
  );
};
export default AboutMeOverview;
