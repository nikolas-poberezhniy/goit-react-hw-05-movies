import { tmdbConfig } from './request-config';

export async function filmRequest(endpoint, id, params) {
  const a = await tmdbConfig.get(`/${endpoint}/${id ? id : ''}`);

  return a;
}
