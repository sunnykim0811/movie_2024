import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from "react-router-dom";  

function Movie({ title, year, synopsis, poster , genres}) {
  return (
    <div className="movie">
      <Link to ={{pathname: '/movie-detail', state:{year, title, synopsis, poster, genres},}}>
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
          <h3 className="movie__title" >{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">{genres.map((genre, index)=><li key={index} className="movie__genre">{genre}</li>)}</ul>
          <p className="movie__synopsis">{synopsis.slice(0,180)}...</p>
          
        </div>
      </Link>
    </div>
  );
}
console.log(Movie);

Movie.prototype ={
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;