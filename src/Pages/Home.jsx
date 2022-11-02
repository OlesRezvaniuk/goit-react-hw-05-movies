// import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrandingsApi } from 'components/Api/Api';
import { useLocation } from 'react-router-dom';
import { TrendingsMovies } from 'components/TrendingsMovies/TrendingsMovies';

const Home = () => {
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

export default Home;
