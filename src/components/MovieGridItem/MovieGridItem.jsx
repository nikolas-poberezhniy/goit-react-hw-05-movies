import {
  LinkThumb,
  MovieYear,
  LinkImg,
  MovieTitle,
} from './MovieGridItem.styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieGridItem = ({
  data: { id, title, release_date, poster_path },
  location,
}) => {
  return (
    <LinkThumb>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <LinkImg src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />

        <MovieTitle>{`${title}`}</MovieTitle>
        <MovieYear>{`(${release_date.split('-')[0]})`}</MovieYear>
      </Link>{' '}
    </LinkThumb>
  );
};

MovieGridItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
  location: PropTypes.object,
};
