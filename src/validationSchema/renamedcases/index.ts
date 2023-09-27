import * as yup from 'yup';

export const renamedcaseValidationSchema = yup.object().shape({
  number: yup.string().required(),
  principal_amount: yup.number().nullable(),
  user_id: yup.string().nullable(),
});
