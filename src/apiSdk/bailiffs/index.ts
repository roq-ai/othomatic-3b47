import queryString from 'query-string';
import { BailiffInterface, BailiffGetQueryInterface } from 'interfaces/bailiff';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBailiffs = async (query?: BailiffGetQueryInterface): Promise<PaginatedInterface<BailiffInterface>> => {
  return fetcher('/api/bailiffs', {}, query);
};

export const createBailiff = async (bailiff: BailiffInterface) => {
  return fetcher('/api/bailiffs', { method: 'POST', body: JSON.stringify(bailiff) });
};

export const updateBailiffById = async (id: string, bailiff: BailiffInterface) => {
  return fetcher(`/api/bailiffs/${id}`, { method: 'PUT', body: JSON.stringify(bailiff) });
};

export const getBailiffById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/bailiffs/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteBailiffById = async (id: string) => {
  return fetcher(`/api/bailiffs/${id}`, { method: 'DELETE' });
};
