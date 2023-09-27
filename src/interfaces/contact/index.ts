import { CaseContactsInterface } from 'interfaces/case-contacts';
import { GetQueryInterface } from 'interfaces';

export interface ContactInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  name?: string;
  case_contacts?: CaseContactsInterface[];

  _count?: {
    case_contacts?: number;
  };
}

export interface ContactGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
}
