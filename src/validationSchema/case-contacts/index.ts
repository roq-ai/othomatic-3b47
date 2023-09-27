import * as yup from 'yup';

export const caseContactsValidationSchema = yup.object().shape({
  case_id: yup.string().nullable(),
  contact_id: yup.string().nullable(),
});
