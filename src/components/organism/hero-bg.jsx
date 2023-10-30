/** @format */

import Hero from "../molecules/hero";

import "../../style/header.css";

const HeroBg = ({ link, title, linkTitle, desc, p, img }) => {
  return (
    <div className='header-bg'>
      <Hero
        title={title}
        description={desc}
        p={p}
        link={link}
        linkTitle={linkTitle}
        image={img}
      />
    </div>
  );
};

export default HeroBg;
