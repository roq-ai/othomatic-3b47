import queryString from 'query-string';
import { ContactInterface, ContactGetQueryInterface } from 'interfaces/contact';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getContacts = async (query?: ContactGetQueryInterface): Promise<PaginatedInterface<ContactInterface>> => {
  return fetcher('/api/contacts', {}, query);
};

export const createContact = async (contact: ContactInterface) => {
  return fetcher('/api/contacts', { method: 'POST', body: JSON.stringify(contact) });
};

export const updateContactById = async (id: string, contact: ContactInterface) => {
  return fetcher(`/api/contacts/${id}`, { method: 'PUT', body: JSON.stringify(contact) });
};

export const getContactById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/contacts/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteContactById = async (id: string) => {
  return fetcher(`/api/contacts/${id}`, { method: 'DELETE' });
};
