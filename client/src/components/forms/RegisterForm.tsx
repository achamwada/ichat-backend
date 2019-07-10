import { Button, FormControl } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { GenericTextField } from './GenericTextField';

interface Values {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (values: Values) => void;
  triggerLogin: () => void;
}

const RegisterForm: React.FC<Props> = ({ onSubmit, triggerLogin }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ values }) => (
        <Form>
          <FormControl fullWidth>
            <Field
              name="first_name"
              placeholder="First name"
              component={GenericTextField}
            />
            <Field
              name="last_name"
              placeholder="Last name"
              component={GenericTextField}
            />
            <Field
              name="email"
              placeholder="email"
              component={GenericTextField}
            />

            <Field
              name="password"
              placeholder="Enter password"
              type="password"
              component={GenericTextField}
            />

            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </FormControl>
          <div style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => triggerLogin()}
              style={{ margin: '1rem' }}
            >
              Signin
            </Button>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              style={{ margin: '1rem' }}
            >
              Sign Up
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
