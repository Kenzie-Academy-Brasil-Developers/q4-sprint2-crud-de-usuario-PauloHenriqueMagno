import * as yup from 'yup';

export const loginUserShape = yup.object().shape({
  email: yup.string().email()
    .transform((value: string, actualValue: string) => actualValue.toLocaleLowerCase())
    .required(),
  password: yup.string().required()
});