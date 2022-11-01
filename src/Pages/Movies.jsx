import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMoviesApi } from 'components/Api';

export const Movies = () => {
  const location = useLocation();
  const [params, setParams] = useSearchParams();
  const namePar = params.get('query');

  const [name, setName] = useState(namePar ?? '');
  const [moviesArr, setMoviesArr] = useState([]);

  const onInputChange = e => {
    setName(e.currentTarget.value);
  };

  useEffect(() => {
    if (name !== '') {
      getMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovies = async () => {
    const moviesApi = await getSearchMoviesApi(name);
    setMoviesArr(moviesApi.results);
  };

  const heandleSearch = e => {
    e.preventDefault();
    if (name !== '') {
      getMovies();
      setParams({ query: name });
    }
    setName('');
  };

  return (
    <div>
      <form onSubmit={heandleSearch}>
        <input value={name} onChange={onInputChange} />
        <button type="submit">Search</button>
      </form>
      <section>
        <ul>
          {moviesArr.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.original_title}{' '}
                <img
                  style={{ width: '150px' }}
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                ></img>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Outlet />
    </div>
  );
};
