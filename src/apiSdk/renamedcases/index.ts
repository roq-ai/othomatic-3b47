import queryString from 'query-string';
import { RenamedcaseInterface, RenamedcaseGetQueryInterface } from 'interfaces/renamedcase';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRenamedcases = async (
  query?: RenamedcaseGetQueryInterface,
): Promise<PaginatedInterface<RenamedcaseInterface>> => {
  return fetcher('/api/renamedcases', {}, query);
};

export const createRenamedcase = async (renamedcase: RenamedcaseInterface) => {
  return fetcher('/api/renamedcases', { method: 'POST', body: JSON.stringify(renamedcase) });
};

export const updateRenamedcaseById = async (id: string, renamedcase: RenamedcaseInterface) => {
  return fetcher(`/api/renamedcases/${id}`, { method: 'PUT', body: JSON.stringify(renamedcase) });
};

export const getRenamedcaseById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/renamedcases/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteRenamedcaseById = async (id: string) => {
  return fetcher(`/api/renamedcases/${id}`, { method: 'DELETE' });
};
