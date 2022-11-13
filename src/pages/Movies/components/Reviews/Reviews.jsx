import { useFetch } from 'hooks/useFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { id } = useParams();
  const [Reviews, setReviews] = useState([]);

  const [{ data } /*status */] = useFetch('reviews', id);

  useEffect(() => {
    data && setReviews(data.results);
  }, [data]);

  return (
    <>
      {Reviews.length > 0 && (
        <ul>
          {Reviews.map(({ id, created_at, author, content }) => (
            <li key={id}>
              <p>Автор: {author}</p>
              <p>{created_at.substring(0, 10)}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
