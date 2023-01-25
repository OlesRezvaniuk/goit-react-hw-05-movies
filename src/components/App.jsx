import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Favorites } from './Layout/Layout.styled';
import { lazy } from 'react';
import { Suspense } from 'react';

const Home = lazy(() => import('Pages/Home'));
const Movies = lazy(() => import('Pages/Movies'));
const MovieDetails = lazy(() => import('Pages/MovieDetails'));
const Cast = lazy(() => import('Pages/Cast'));
const Reviews = lazy(() => import('Pages/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route
            path="/favorites"
            element={<Favorites>Sorry, this page under development</Favorites>}
          />
          <Route path="movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<>NotFound</>} />
        </Route>
      </Routes>
    </Suspense>
  );
};
