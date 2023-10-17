
import React, { useState, useEffect  } from 'react';
import t1 from "../../Assets/t1.png";
import t2 from "../../Assets/t2.png";
import t3 from "../../Assets/t3.png"

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: 'Viezh Robert',
      title: 'CEO TASK',
      rating: 5,
      content:
        "Amorserv's email campaigns delivered outstanding results. Their personalized approach fueled a remarkable boost in conversions.",
      image: t1,
    },
    {
      name: 'Tega Ovri',
      title: 'CMO Oblivion',
      rating: 5,
      content:
        "Amorserv took our social presence to new heights. Their strategies revolutionized engagement and visibility.",
      image: t2,
    },
    {
      name: 'Kat Owens',
      title: 'Manager, Semetrics',
      rating: 5,
      content:
        "Amorserv's SEM strategies powered our growth. Their data-driven approach catapulted us to the top of search results.",
      image: t3,
    },
    // {
    //   name: 'John Doe',
    //   title: 'Founder, XYZ Company',
    //   rating: 5,
    //   content:
    //     "We are extremely satisfied with Amorserv's services. Their expertise and dedication have significantly boosted our online presence and revenue.",
    //   image: t3,
    // },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Move to the next testimonial
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  return (


      <div className='wrapper mt-5'>
        <ul className='carousel'>
          {testimonials.map((testimonial, index) => (
            <li key={index} className={`card ${index === activeIndex ? 'active' : ''}`}>
              <div className='info'>
                <div className='name-img'>
                  <div className='image'>
                    <img src={testimonial.image} alt='' draggable='false' />
                  </div>
                  <div className='name-title'>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.title}</p>
                  </div>
                </div>
                <div className='rate'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'>
                    <path
                      d='M22 10.6507C22.1 10.1507 21.7 9.55072 21.2 9.55072L15.5 8.75072L12.9 3.55072C12.8 3.35072 12.7 3.25072 12.5 3.15072C12 2.85072 11.4 3.05072 11.1 3.55072L8.6 8.75072L2.9 9.55072C2.6 9.55072 2.4 9.65072 2.3 9.85072C1.9 10.2507 1.9 10.8507 2.3 11.2507L6.4 15.2507L5.4 20.9507C5.4 21.1507 5.4 21.3507 5.5 21.5507C5.8 22.0507 6.4 22.2507 6.9 21.9507L12 19.2507L17.1 21.9507C17.2 22.0507 17.4 22.0507 17.6 22.0507C17.7 22.0507 17.7 22.0507 17.8 22.0507C18.3 21.9507 18.7 21.4507 18.6 20.8507L17.6 15.1507L21.7 11.1507C21.9 11.0507 22 10.8507 22 10.6507Z'
                      fill='#CA1E52'
                      fillOpacity='0.9'
                    />
                  </svg>
                  <span>{testimonial.rating}</span>
                </div>
              </div>
              <p className='detail'>{testimonial.content}</p>
            </li>
          ))}
        </ul>
        <div className='indicators'>
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
  );
};

export default TestimonialCarousel;









