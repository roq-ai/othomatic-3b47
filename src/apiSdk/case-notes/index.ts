import queryString from 'query-string';
import { CaseNotesInterface, CaseNotesGetQueryInterface } from 'interfaces/case-notes';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCaseNotes = async (
  query?: CaseNotesGetQueryInterface,
): Promise<PaginatedInterface<CaseNotesInterface>> => {
  return fetcher('/api/case-notes', {}, query);
};

export const createCaseNotes = async (caseNotes: CaseNotesInterface) => {
  return fetcher('/api/case-notes', { method: 'POST', body: JSON.stringify(caseNotes) });
};

export const updateCaseNotesById = async (id: string, caseNotes: CaseNotesInterface) => {
  return fetcher(`/api/case-notes/${id}`, { method: 'PUT', body: JSON.stringify(caseNotes) });
};

export const getCaseNotesById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/case-notes/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCaseNotesById = async (id: string) => {
  return fetcher(`/api/case-notes/${id}`, { method: 'DELETE' });
};
