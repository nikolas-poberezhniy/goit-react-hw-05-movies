import axios from 'axios';

export const tmdbConfig = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: `46e4b076bb2368b618b662908195e79d`,
  },
});
