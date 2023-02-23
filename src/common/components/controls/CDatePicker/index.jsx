import { forwardRef } from 'react';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { any, bool, func, string } from 'prop-types';

export const CDatePicker = forwardRef(
  (
    {
      name,
      value,
      onChange,
      placeholder,
      inputFormat,
      error,
      helperText,
      onBlur,
      fullWidth,
      shouldDisableDate,
      ...props
    },
    ref,
  ) => {
    return (
      <DatePicker
        className="c-datepicker"
        value={value}
        onChange={onChange}
        inputFormat={inputFormat}
        inputRef={ref}
        shouldDisableDate={shouldDisableDate}
        {...props}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth={fullWidth}
            name={name}
            placeholder={placeholder}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
          />
        )}
      />
    );
  },
);

CDatePicker.propTypes = {
  name: string,
  value: any,
  placeholder: string,
  onChange: func,
  error: bool,
  helperText: string,
  inputFormat: string,
};

CDatePicker.defaultProps = {
  inputFormat: 'DD/MM/YYYY',
};
