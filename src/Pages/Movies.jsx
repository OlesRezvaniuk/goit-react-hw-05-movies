import { Link } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState } from 'react';
import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMoviesApi } from 'components/Api/Api';

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
      <SearchForm
        heandleSearch={heandleSearch}
        name={name}
        onInputChange={onInputChange}
      />
      <MoviesList moviesArr={moviesArr} location={location} />
      <Outlet />
    </div>
  );
};
