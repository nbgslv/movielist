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
    ranking: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    img: {
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    },
    distributor: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }),
};

Card.defaultProps = {
  movie: {
    ranking: 0,
    title: 'Movie Title',
    year: 2000,
  },
};

export default Card;
