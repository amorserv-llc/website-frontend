/** @format */

import React from "react";
import homeimg from "../../Assets/homeimg.png";
import { Link } from "react-router-dom";
import HeroBg from "../organism/hero-bg";
export default function () {

  const handleCallButtonClick = () => {
    const contactFormSection = document.getElementById("contact-form-section");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <HeroBg
    title={"We're your Partner for Digital Marketing Success".toUpperCase()}
    desc="Empower Your Brand, and Drive Results with AmorServ Consulting"
    onClick={handleCallButtonClick} // Pass the function as onClick prop

    link=""
    
    linkTitle="Start Today"
    img={homeimg}
  />

  );
}
