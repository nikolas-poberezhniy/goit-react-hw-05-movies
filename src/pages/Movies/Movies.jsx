import { GridConteiner } from 'components/MovieGrid/MovieGrid';
import { MovieGridItem } from 'components/MovieGridItem/MovieGridItem';
import { useFetch } from 'hooks/useFetch';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchLine, setSearchLine] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [{ data }] = useFetch('search', searchParams.get('query'));

  useEffect(() => {
    setSearchLine(searchParams.get('name'));
  }, [data, searchParams, searchLine]);

  return (
    <>
      <h1>Movies</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          setSearchParams(
            e.target.query.value ? { query: e.target.query.value } : {}
          );
          e.target.query.value = '';
        }}
      >
        <label htmlFor="">
          Строка поиска
          <br />
          <input type="text" name="query" />
        </label>
        <button type="submit">Поиск</button>
      </form>
      {data ? (
        <GridConteiner>
          {data.results.length ? (
            data.results.map(item => {
              return (
                <>
                  <MovieGridItem
                    key={item.id}
                    data={item}
                    location={location}
                  />
                  <br />
                </>
              );
            })
          ) : (
            <p>Такого фильма нет</p>
          )}
        </GridConteiner>
      ) : (
        <p>Введите название фильма</p>
      )}
    </>
  );
};
