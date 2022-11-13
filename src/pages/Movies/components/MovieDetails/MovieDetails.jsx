import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { Link as StyledLink } from 'components/SharedLayout/SharedLayout.styled';
import { useFetch } from 'hooks/useFetch';

export const MovieDetails = () => {
  let { id } = useParams();
  const [
    { poster_path, genres, release_date, overview, title, vote_average },
    setMovieDetails,
  ] = useState({});
  const [{ data } /*status */] = useFetch('movie', id);
  const location = useLocation();
  useEffect(() => {
    data && setMovieDetails(data);
  }, [data]);

  return (
    release_date && (
      <>
        {console.log(data)}

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
              return <span style={{ marginBottom: '5px' }}>{genre.name} </span>;
            })}
          </div>
        </div>
        <br />
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
        <Outlet />
      </>
    )
  );
};
