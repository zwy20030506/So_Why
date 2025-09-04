import React from 'react';

const Card = ({ 
  title, 
  description, 
  image, 
  children, 
  className = '',
  onClick 
}) => {
  return (
    <div 
      className={`card ${className} ${onClick ? 'clickable' : ''}`} 
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
