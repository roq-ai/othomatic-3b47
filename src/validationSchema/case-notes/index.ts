import * as yup from 'yup';

export const caseNotesValidationSchema = yup.object().shape({
  text: yup.string().nullable(),
  case_id: yup.string().nullable().required(),
});
