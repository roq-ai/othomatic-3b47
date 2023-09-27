import queryString from 'query-string';
import { CaseContactsInterface, CaseContactsGetQueryInterface } from 'interfaces/case-contacts';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCaseContacts = async (
  query?: CaseContactsGetQueryInterface,
): Promise<PaginatedInterface<CaseContactsInterface>> => {
  return fetcher('/api/case-contacts', {}, query);
};

export const createCaseContacts = async (caseContacts: CaseContactsInterface) => {
  return fetcher('/api/case-contacts', { method: 'POST', body: JSON.stringify(caseContacts) });
};

export const updateCaseContactsById = async (id: string, caseContacts: CaseContactsInterface) => {
  return fetcher(`/api/case-contacts/${id}`, { method: 'PUT', body: JSON.stringify(caseContacts) });
};

export const getCaseContactsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/case-contacts/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCaseContactsById = async (id: string) => {
  return fetcher(`/api/case-contacts/${id}`, { method: 'DELETE' });
};
