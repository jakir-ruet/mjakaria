const ContactNumber = (props) => {
  return (
    <a href={props.phoneLink} className="pl-2">
      {props.phoneIcon} {props.phoneNumber}
    </a>
  );
};
export default ContactNumber;
