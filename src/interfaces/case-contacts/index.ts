import { RenamedcaseInterface } from 'interfaces/renamedcase';
import { ContactInterface } from 'interfaces/contact';
import { GetQueryInterface } from 'interfaces';

export interface CaseContactsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  case_id?: string;
  contact_id?: string;

  Renamedcase?: RenamedcaseInterface;
  contact?: ContactInterface;
  _count?: {};
}

export interface CaseContactsGetQueryInterface extends GetQueryInterface {
  id?: string;
  case_id?: string;
  contact_id?: string;
}
