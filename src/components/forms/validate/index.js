import * as Yup from 'yup';

export const SIGNUP_SCHEMA = Yup.object({
  firstName: Yup.string().min(4).max(20).required(),
  lastName: Yup.string().min(4).max(20).required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/)
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')])
    .required(),
});
