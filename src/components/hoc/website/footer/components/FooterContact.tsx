const FooterContact = (props) => {
  return (
    <li>
      {props.footerIcon}
      <a href={props.footerLink}>
        <p className="p-1">{props.footerContactEntity}</p>
      </a>
    </li>
  );
};
export default FooterContact;
