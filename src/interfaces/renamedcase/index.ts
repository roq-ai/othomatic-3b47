import { CaseBookingInterface } from 'interfaces/case-booking';
import { CaseContactsInterface } from 'interfaces/case-contacts';
import { CaseNotesInterface } from 'interfaces/case-notes';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RenamedcaseInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  number: string;
  principal_amount?: number;
  user_id?: string;
  case_booking?: CaseBookingInterface[];
  case_contacts?: CaseContactsInterface[];
  case_notes?: CaseNotesInterface[];
  user?: UserInterface;
  _count?: {
    case_booking?: number;
    case_contacts?: number;
    case_notes?: number;
  };
}

export interface RenamedcaseGetQueryInterface extends GetQueryInterface {
  id?: string;
  number?: string;
  user_id?: string;
}
