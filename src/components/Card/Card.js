import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ movie }) => {
  return (
    <div>
      <h2>{`#${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
      <img src={movie.img.src} alt={movie.img.alt} width="200" />
      <p>{`Distributor: ${movie.distributor}`}</p>
      <p>{`Amount: ${movie.amount}`}</p>
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
