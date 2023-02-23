import { forwardRef } from 'react';
import { TextField } from '@mui/material';
import { any, bool, func, string } from 'prop-types';

export const CInput = forwardRef(
  (
    {
      id,
      name,
      value,
      disabled,
      onChange,
      placeholder,
      type,
      error,
      helperText,
      startAdornment,
      endAdornment,
      ...props
    },
    ref,
  ) => {
    return (
      <TextField
        inputRef={ref}
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        sx={{ '& .MuiOutlinedInput-root': { backgroundColor: '#F5F5F5' } }}
        error={error}
        helperText={helperText}
        InputProps={{
          startAdornment,
          endAdornment,
        }}
        {...props}
      />
    );
  },
);
CInput.propTypes = {
  id: any,
  name: string,
  value: any,
  disabled: bool,
  onChange: func,
  placeholder: string,
  type: string,
};
CInput.defaultProps = {
  type: 'text',
};
