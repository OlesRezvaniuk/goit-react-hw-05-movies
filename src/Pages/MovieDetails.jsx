import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDetailsApi } from 'components/Api/Api';
import { Outlet } from 'react-router-dom';
import { MovieDetailsInfo } from 'components/MovieDetails/MovieDetailsInfo';
import { OptionalInfo } from 'components/MovieDetails/OptionalInfo';

const MovieDetails = () => {
  const { moviesId } = useParams();

  const location = useLocation();
  const search = location?.state?.from?.search || '';
  const pathname = location?.state?.from?.pathname || '/';

  const [details, setDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [year, setYear] = useState([]);

  const onArrayItems = async () => {
    const movieDetails = await getDetailsApi(moviesId);
    setDetails(movieDetails);
    const allGenres = await movieDetails.genres;
    setGenres(allGenres);
    const year = await movieDetails.release_date.slice(0, 4);
    setYear(year);
  };

  useEffect(() => {
    onArrayItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const score = Math.round(details.vote_average * 10);
  return (
    <>
      <MovieDetailsInfo
        poster_path={details.poster_path}
        original_title={details.original_title}
        overview={details.overview}
        genres={genres}
        year={year}
        score={score}
        pathname={pathname}
        search={search}
      />
      <OptionalInfo locationState={location.state} />
      <Outlet />
    </>
  );
};

export default MovieDetails;