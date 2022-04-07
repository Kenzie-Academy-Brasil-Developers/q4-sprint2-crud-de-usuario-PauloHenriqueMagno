import * as yup from 'yup';

export const registerUserShape = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email()
    .transform((value: string, actualValue: string) => actualValue.toLocaleLowerCase())
    .required(),
  password: yup.string().required(),
  isAdm: yup.bool().default(false).optional(),
  createdOn: yup.date().default(()=> new Date()),
  updatedOn: yup.date().default(()=> new Date())
})