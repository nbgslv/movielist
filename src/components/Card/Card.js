import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.img.src} className="card-img-top" alt={movie.img.alt} width="200" />
      <div className="card-body">
        <h2 className="card-title">{`#${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{`Distributor: ${movie.distributor}`}</li>
        <li className="list-group-item">{`Amount: ${movie.amount}`}</li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    ranking: PropTypes.number,
    title: PropTypes.string,
    year: PropTypes.number,
    img: {
      src: PropTypes.string,
      alt: PropTypes.string,
    },
    distributor: PropTypes.string,
    amount: PropTypes.number,
  }).isRequired,
};

export default Card;
