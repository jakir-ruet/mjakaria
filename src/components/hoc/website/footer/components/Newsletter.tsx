import NewsLetterForm from './newsletter/NewsLetterForm';

const Newsletter = (props) => {
  return (
    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h4>{props.nlTitle}</h4>
            <p>{props.nlMessage}</p>
            <NewsLetterForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
