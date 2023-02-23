import { forwardRef, useCallback, useState } from 'react';
import { Search } from '@mui/icons-material';
import { debounce, InputAdornment, TextField } from '@mui/material';
import { string } from 'prop-types';

export const CSearchInput = forwardRef(
  ({ id, name, placeholder, onInputChange, ...props }, ref) => {
    //#region Data
    const [input, setInput] = useState('');
    //#endregion

    //#region Event
    const debounceSearch = useCallback(
      debounce((value) => onInputChange(value), 400),
      [],
    );

    const onChange = (e) => {
      setInput(e.target.value);
      debounceSearch(e.target.value);
    };
    //#endregion

    //#region Render
    return (
      <TextField
        inputRef={ref}
        id={id}
        name={name}
        value={input}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{ '& .MuiOutlinedInput-root': { backgroundColor: '#ffffff' } }}
        {...props}
      />
    );
    //#endregion
  },
);
CSearchInput.propTypes = {
  placeholder: string,
};
CSearchInput.defaultProps = {
  placeholder: 'Tìm kiếm',
};
