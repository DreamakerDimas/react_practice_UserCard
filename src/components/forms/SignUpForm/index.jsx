import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import Input from '../components/Input/Input';
import { SIGNUP_SCHEMA } from '../validate';
import styles from './SingUpForm.module.scss';

function SignUpForm(props) {
  const { onSubmit } = props;
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const fields = [
    { name: 'firstName', type: 'text', placeholder: 'first name' },
    { name: 'lastName', type: 'text', placeholder: 'last name' },
    { name: 'email', type: 'text', placeholder: 'email' },
    { name: 'password', type: 'password', placeholder: 'password' },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'confirm password',
    },
  ];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGNUP_SCHEMA}
    >
      {() => (
        <Form className={styles.formContainer}>
          {fields.map((field, index) => (
            <Field key={index} name={field.name}>
              {(fieldProps) => <Input {...field} {...fieldProps} />}
            </Field>
          ))}
          <button type="submit" className={styles.submitBut}>
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;
