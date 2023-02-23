import { forwardRef, useMemo, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { any, arrayOf, bool, func, object, string } from 'prop-types';

export const CAutocomplete = forwardRef(
  (
    {
      id,
      name,
      placeholder,
      options,
      value,
      onChange,
      onInputChange,
      multiple,
      renderOption,
      display,
      valueGet,
      error,
      helperText,
      // getOptionLabel,
      ...props
    },
    ref,
  ) => {
    //#region Data
    const [inputValue, setInputValue] = useState('');

    const currentValue = useMemo(() => {
      if (multiple) {
        if (!options || !value) return null;
      } else if (!options || !value?.toString()) return null;

      if (multiple)
        return (
          value?.map((id) =>
            options.find((option) => option?.id?.toString() === id?.toString()),
          ) ?? null
        );

      return (
        options.find((option) =>
          value[valueGet]
            ? option[valueGet]?.toString() === value[valueGet]?.toString()
            : option[valueGet]?.toString() === value?.toString(),
        ) ?? null
      );
    }, [multiple, options, value, valueGet]);
    //#endregion

    //#region Event
    const handleInputChange = (e, v) => setInputValue(onInputChange(v));

    const onValueChange = (event, value) => {
      if (multiple) {
        onChange(value.map(({ inputValue, ..._value }) => _value));
      } else {
        if (value && value.inputValue)
          return onChange({ [display]: value[display] });
        else if (typeof value === 'object') return onChange(value);

        return onChange(value);
      }
    };
    //#endregion

    //#region Other
    const getOptionLabel = (option) => {
      if (typeof option === 'string') return option;

      if (option?.inputValue) return option.inputValue;

      if (typeof option?.[display] === 'number')
        return option?.[display].toString();

      return option?.[display];
    };
    //#endregion

    return (
      <Autocomplete
        id={id}
        multiple={multiple}
        className={'c-autocomplete'}
        value={currentValue}
        onChange={onValueChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            name={name}
            placeholder={placeholder}
            error={error}
            helperText={helperText}
            inputRef={ref}
          />
        )}
        renderOption={renderOption}
        getOptionLabel={getOptionLabel}
        {...props}
      />
    );
  },
);

CAutocomplete.displayName = CAutocomplete;

CAutocomplete.propTypes = {
  id: any,
  name: string,
  placeholder: string,
  value: any,
  display: string.isRequired,
  options: arrayOf(object).isRequired,
  onChange: func,
  onInputChange: func,
  multiple: bool,
  renderOption: func,
  valueGet: string,
  error: bool,
  helperText: string,
};

CAutocomplete.defaultProps = {
  onInputChange: (v) => v,
  options: [],
  valueGet: 'id',
};
