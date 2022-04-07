import * as yup from 'yup';

export const updateUserShape = yup.object().shape({
  name: yup.string().optional(),
  email: yup.string().email()
    .transform((value: string, actualValue: string) => actualValue.toLocaleLowerCase())
    .optional(),
  password: yup.string().optional(),
  updatedOn: yup.date().default(()=> new Date())
})
