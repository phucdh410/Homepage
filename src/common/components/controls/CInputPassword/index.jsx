import { forwardRef, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { any, bool, func, string } from 'prop-types';

export const CInputPassword = forwardRef(
  (
    {
      id,
      name,
      value,
      disabled,
      onChange,
      placeholder,
      error,
      helperText,
      startAdornment,
      ...props
    },
    ref,
  ) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => setShow(!show);

    return (
      <TextField
        inputRef={ref}
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        type={show ? 'text' : 'password'}
        InputProps={{
          startAdornment,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={toggleShow}>
                {show ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ '& .MuiOutlinedInput-root': { backgroundColor: '#F5F5F5' } }}
        error={error}
        helperText={helperText}
        {...props}
      />
    );
  },
);
CInputPassword.propTypes = {
  id: any,
  name: string,
  value: any,
  disabled: bool,
  onChange: func,
  placeholder: string,
};
