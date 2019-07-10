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
  triggerSignUp: () => void;
}

const LoginForm: React.FC<Props> = ({ onSubmit, triggerSignUp }) => {
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
              type="submit"
              style={{ margin: '1rem' }}
            >
              Signin
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: '1rem' }}
              onClick={() => triggerSignUp()}
            >
              Sign Up
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
