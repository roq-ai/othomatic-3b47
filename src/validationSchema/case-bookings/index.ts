import * as yup from 'yup';

export const caseBookingValidationSchema = yup.object().shape({
  amount: yup.number().nullable(),
  date: yup.date().required(),
  case_id: yup.string().nullable().required(),
});
