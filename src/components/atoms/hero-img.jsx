
   
  const HeroImage = ({img}) => {
    return (
      <div className="image">
        <img src={img} className="img-fluid" alt="hero-image" />
      </div>
    );
  };
   
  export default HeroImage;