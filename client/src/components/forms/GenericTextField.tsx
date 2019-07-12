import React from 'react';
import { FieldProps } from 'formik';
import { TextField } from '@material-ui/core';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';

export const GenericTextField: React.FC<FieldProps & TextFieldProps> = ({
  placeholder,
  field,
  type
}) => {
  return (
    <TextField
      style={{ padding: '2em' }}
      type={type}
      placeholder={placeholder}
      {...field}
    />
  );
};
