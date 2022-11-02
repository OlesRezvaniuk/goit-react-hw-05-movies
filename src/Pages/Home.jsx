// import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrandingsApi } from 'components/Api';
import { useLocation } from 'react-router-dom';
import { TrendingsMovies } from 'components/TrendingsMovies/TrendingsMovies';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrandingsApi().then(setTrendingMovies);
  }, []);

  return (
    <>
      <TrendingsMovies trendingMovies={trendingMovies} location={location} />
    </>
  );
};
