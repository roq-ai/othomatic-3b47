import { RenamedcaseInterface } from 'interfaces/renamedcase';
import { GetQueryInterface } from 'interfaces';

export interface CaseBookingInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  amount?: number;
  date: any;
  case_id: string;

  Renamedcase?: RenamedcaseInterface;
  _count?: {};
}

export interface CaseBookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  case_id?: string;
}
