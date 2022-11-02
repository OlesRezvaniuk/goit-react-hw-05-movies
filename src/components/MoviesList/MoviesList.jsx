import PropTypes from 'prop-types';
import {
  MoviesListStyled,
  MoviesListItem,
  MovieListLink,
  MovieName,
  MoviePoster,
} from './MoviesList.styled';

export const MoviesList = ({ moviesArr, location }) => {
  return (
    <section>
      <MoviesListStyled>
        {moviesArr.map(movie => (
          <MoviesListItem key={movie.id}>
            <MovieListLink to={`${movie.id}`} state={{ from: location }}>
              <MovieName> {movie.original_title}</MovieName>

              <MoviePoster
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              ></MoviePoster>
            </MovieListLink>
          </MoviesListItem>
        ))}
      </MoviesListStyled>
    </section>
  );
};

MoviesList.propTypes = {
  moviesArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
  location: PropTypes.object.isRequired,
};
