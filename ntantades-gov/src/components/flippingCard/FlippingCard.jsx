import PropTypes from 'prop-types';
import './flippingCard.css'; 

const FlippingCard = ({ title, image, description, details }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
            <img src={image} alt="Icon" className="folder" />
            <h2 className="title-1">{title}</h2>    
        </div>
        <div className="card-back">
          <h2 className='title-1'>{title}</h2>
          <ul className="list">
            {details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className='note'>Note: {description}</p>
        </div>
      </div>
    </div>
  );
};

FlippingCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FlippingCard;