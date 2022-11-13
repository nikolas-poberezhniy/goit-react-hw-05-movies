import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { MovieDetails } from 'pages/Movies/components/MovieDetails/MovieDetails';
import Cast from 'pages/Movies/components/Cast/Cast';
import Reviews from 'pages/Movies/components/Reviews/Reviews';

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
