import queryString from 'query-string';
import { CaseBookingInterface, CaseBookingGetQueryInterface } from 'interfaces/case-booking';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCaseBookings = async (
  query?: CaseBookingGetQueryInterface,
): Promise<PaginatedInterface<CaseBookingInterface>> => {
  return fetcher('/api/case-bookings', {}, query);
};

export const createCaseBooking = async (caseBooking: CaseBookingInterface) => {
  return fetcher('/api/case-bookings', { method: 'POST', body: JSON.stringify(caseBooking) });
};

export const updateCaseBookingById = async (id: string, caseBooking: CaseBookingInterface) => {
  return fetcher(`/api/case-bookings/${id}`, { method: 'PUT', body: JSON.stringify(caseBooking) });
};

export const getCaseBookingById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/case-bookings/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCaseBookingById = async (id: string) => {
  return fetcher(`/api/case-bookings/${id}`, { method: 'DELETE' });
};
