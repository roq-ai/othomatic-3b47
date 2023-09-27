import { RenamedcaseInterface } from 'interfaces/renamedcase';
import { GetQueryInterface } from 'interfaces';

export interface CaseNotesInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  text?: string;
  case_id: string;

  Renamedcase?: RenamedcaseInterface;
  _count?: {};
}

export interface CaseNotesGetQueryInterface extends GetQueryInterface {
  id?: string;
  text?: string;
  case_id?: string;
}
