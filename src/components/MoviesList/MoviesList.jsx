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
