import { Button, Stack, styled } from '@mui/material';

const StyledFormButton = styled(Button)(() => ({
  borderRadius: '10px',
  padding: '12.5px 32px',
  fontWeight: 500,
  fontSize: 16,
  lineHeight: '19px',
}));

export const CActionsForm = ({ onCancel, onSubmit }) => {
  return (
    <Stack direction="row" spacing={3} justifyContent="end">
      <StyledFormButton
        variant="outlined"
        color="primary"
        type="button"
        onClick={onCancel}
      >
        Hủy
      </StyledFormButton>
      <StyledFormButton
        variant="contained"
        color="primary"
        type="submit"
        onClick={onSubmit}
      >
        Lưu
      </StyledFormButton>
    </Stack>
  );
};
