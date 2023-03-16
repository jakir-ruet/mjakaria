const SocialContact = (props) => {
  return (
    <a href={props.solialLink} target={props.socialLinkTarget}>
      {props.solialIcon} {props.socialText}
    </a>
  );
};
export default SocialContact;
