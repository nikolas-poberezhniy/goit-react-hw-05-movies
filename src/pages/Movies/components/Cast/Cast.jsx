import { useFetch } from 'hooks/useFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);

  const [{ data } /*status */] = useFetch('credits', id);

  useEffect(() => {
    data && setCasts(data.cast);
  }, [data]);

  return (
    <>
      {casts.length > 0 && (
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {casts.map(cast => (
            <li style={{ listStyle: 'none' }} key={cast.cast_id}>
              <div
                style={{ width: '200px', height: '300px', marginRight: '10px' }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                  alt={cast.name}
                />
              </div>
              <div>
                <p>{cast.name}</p>
                <p>{cast.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
