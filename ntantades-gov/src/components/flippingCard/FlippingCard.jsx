import React from 'react';
import './flippingCard.css'; 

const FlippingCard = ({ title, image, description, details }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <div className="overlap">
            <div className="rectangle" />
            <img src={image} alt="Icon" className="folder" />
            <div className="text-wrapper-5-2">{title}</div>
          </div>
        </div>
        <div className="card-back">
          <div className="back-content">
            <h2>{title}</h2>
            <ul>
              {details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>Note: {description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;