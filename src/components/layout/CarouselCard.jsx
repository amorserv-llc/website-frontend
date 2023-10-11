import React from 'react';
import PropTypes from 'prop-types';

const CarouselCard = ({ img, name, position, desc, rating }) => {
  const stars = Array.from({ length: rating }, (_, index) => index + 1);

  return (
    <div className="card">
      <div className='wrapper mt-5'>
        <img src={img} alt={name} className="card-image" />
        <h3 className="card-name">{name}</h3>
        <p className="card-position">{position}</p>
        <div className="star-rating">
          {stars.map((star) => (
            <span key={star} className="star">&#9733;</span>
          ))}
        </div>
        <p className="card-description">{desc}</p>
      </div>
    </div>
  );
};


export default CarouselCard;
