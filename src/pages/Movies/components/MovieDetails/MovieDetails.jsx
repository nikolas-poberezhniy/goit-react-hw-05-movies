import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { Link as StyledLink } from 'components/SharedLayout/SharedLayout.styled';
import { useFetch } from 'hooks/useFetch';
import NotFound from 'pages/NotFound/NotFound';

const MovieDetails = () => {
  let { id } = useParams();
  const [
    { poster_path, genres, release_date, overview, title, vote_average },
    setMovieDetails,
  ] = useState({});
  const [{ data }] = useFetch('movie', id);
  const location = useLocation();
  useEffect(() => {
    data && setMovieDetails(data);
  }, [data]);

  return title ? (
    <>
      {console.log(location.state)}
      <StyledLink to={location.state ? location.state.from : '/'}>
        Обратно
      </StyledLink>

      <br />
      <div style={{ display: 'flex' }}>
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
        <div style={{ margin: '25px' }}>
          <h2>{`${title} (${release_date.substring(0, 4)})`}</h2>
          <p>User Score: {Number(vote_average) * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres.map(genre => {
            return (
              <span key={genre.name} style={{ marginBottom: '5px' }}>
                {genre.name}{' '}
              </span>
            );
          })}
        </div>
      </div>
      <br />
      <StyledLink to="cast" state={location.state}>
        Cast
      </StyledLink>
      <StyledLink to="reviews" state={location.state}>
        Reviews
      </StyledLink>
      <Outlet />
    </>
  ) : (
    <NotFound />
  );
};

export default MovieDetails;
