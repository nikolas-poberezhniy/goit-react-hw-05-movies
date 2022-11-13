import { useState, useEffect } from 'react';

import { tmdbConfig } from 'services/request-config';

export const useFetch = (endpoint, query) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
    let requestUrl;
    switch (endpoint) {
      case 'trending':
        requestUrl = [`${endpoint}/movie/week`];
        break;
      case 'movie':
        requestUrl = [`/movie/${query}`];
        break;
      case 'credits':
      case 'reviews':
        requestUrl = [`/movie/${query}/${endpoint}`];
        break;
      case 'search':
        requestUrl = !query
          ? null
          : [`/${endpoint}/movie`, { params: { query } }];

        break;
      default:
        break;
    }

    (async () => {
      setStatus('fetching');
      // const data = requestUrl && (await tmdbConfig.get(...requestUrl));

      setData(requestUrl && (await tmdbConfig.get(...requestUrl)));
      setStatus('fetched');
    })();
  }, [endpoint, query]);

  return data ? [data, status] : [[], status];
};

// export const App = () => {
//   const [query, setQuery] = useState('');
//   const [status, data] = useFetch(query);

//   useEffect(() => {
//     if (data.length) {
//       console.log(data);
//       console.log(status);
//     }
//   }, [data, status]);

//   const onInputChange = e => {
//     e.preventDefault();
//     setQuery(e.target.name.value);
//   };

//   return (
//     <div>
//       <form action="" onSubmit={onInputChange}>
//         <input type="text" name="name"></input>
//         <button type="submit">Запрос</button>
//       </form>
//     </div>
//   );
// };
