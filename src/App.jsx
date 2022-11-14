import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
// import Cast from 'pages/Movies/components/Cast/Cast';
// import Reviews from 'pages/Movies/components/Reviews/Reviews';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('./pages/Movies/components/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('./pages/Movies/components/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Movies/components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
