/** @format */

import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { TalentModalContext } from "../../../Layout";
const handleCallButtonClick = () => {
  const contactFormSection = document.getElementById("contact-form-section");
  if (contactFormSection) {
    contactFormSection.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroBut = ({ link, text }) => {

  return link ? (
    <Link to={link} className='hero-but'>
      <button>{text}</button>
    </Link>
  ) : (
    <Link onClick={handleCallButtonClick}>
      <button>{text}</button>
    </Link>
  );
};

export default HeroBut;
