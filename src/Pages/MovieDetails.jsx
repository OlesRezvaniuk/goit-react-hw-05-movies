import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDetailsApi } from 'components/Api';
import { Outlet } from 'react-router-dom';

export const MovieDetails = () => {
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

  console.log(location);

  useEffect(() => {
    onArrayItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const score = Math.round(details.vote_average * 10);
  return (
    <>
      <Link to={pathname + search}>To home</Link>
      <section style={{ display: 'flex' }}>
        <img
          style={{ width: '290px' }}
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          alt=""
        ></img>
        <div>
          <h1>
            {details.original_title}({year})
          </h1>
          <p>User Score: {score}%</p>
          <h2>Overview</h2>
          <p>{details.overview}</p>
          <h3>Genres</h3>
          {genres.map(genre => (
            <p key={genre.name}>{genre.name}</p>
          ))}
        </div>
      </section>
      <ul>
        <li>
          <Link state={location.state} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link state={location.state} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
