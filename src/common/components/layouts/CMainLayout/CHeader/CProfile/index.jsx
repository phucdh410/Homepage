import { useState } from 'react';
import { tryLogout } from '@axios';
import { AccountCircle } from '@mui/icons-material';
import {
  Box,
  ButtonBase,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';

export const CProfile = () => {
  //#region Data
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;
  //#endregion

  //#region Event
  const toggle = (e) => setAnchorEl(e.target);

  const close = () => setAnchorEl(null);

  const onLogout = async () => {
    setAnchorEl(null);

    await tryLogout();
  };
  //#endregion

  //#region Render
  return (
    <>
      <ButtonBase onClick={toggle}>
        <Stack direction="row" spacing={1} alignItems="center">
          <AccountCircle sx={{ height: '1.5em', width: '1.5em' }} />
          <Box>
            <Typography fontSize="1.2rem" fontWeight={600}>
              Nguyễn Văn A
            </Typography>
            <Typography fontSize={14}>Administrator</Typography>
          </Box>
        </Stack>
      </ButtonBase>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClick={close}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
  //#endregion
};
