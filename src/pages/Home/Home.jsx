import { useState, useEffect } from 'react';
import { MovieGridItem } from 'components/MovieGridItem/MovieGridItem';

import { useFetch } from 'hooks/useFetch';
import { GridConteiner } from 'components/MovieGrid/MovieGrid';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const [trendingFilmList, setTrendingFilmList] = useState([]);
  const [{ data } /*status */] = useFetch('trending');
  const location = useLocation();
  useEffect(() => {
    data && setTrendingFilmList(data.results);
  }, [data]);

  return (
    <>
      <h1>Trending today</h1>
      <GridConteiner>
        {trendingFilmList.lenght ??
          trendingFilmList.map(item => {
            return (
              <MovieGridItem key={item.id} data={item} location={location} />
            );
          })}
      </GridConteiner>
    </>
  );
};
