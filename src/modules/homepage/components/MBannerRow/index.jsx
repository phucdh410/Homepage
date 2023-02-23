import { useState } from 'react';
import { LANGUAGES } from '@constants/variables';
import { CSwitch } from '@controls';
import { Delete, Edit } from '@mui/icons-material';
import {
  IconButton,
  Menu,
  MenuItem,
  Stack,
  TableCell,
  TableRow,
} from '@mui/material';
import dayjs from 'dayjs';

export const MBannerRow = ({
  data,
  rowIndex,
  onStatusChange,
  onEdit,
  onDelete,
}) => {
  //#region Data
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;
  //#endregion

  //#region Event
  const toggleOpen = (e) => setAnchorEl(e.target);

  const close = () => setAnchorEl(null);
  //#endregion

  //#region Render
  return (
    <TableRow>
      <TableCell align="center">{rowIndex}</TableCell>
      <TableCell align="left">{data?.title}</TableCell>
      <TableCell align="center">
        {dayjs(data?.start).format('DD/MM/YYYY')}
      </TableCell>
      <TableCell align="center">
        {dayjs(data?.updated_at ? data.updated_at : data?.created_at).format(
          'DD/MM/YYYY',
        )}
      </TableCell>
      <TableCell align="center">
        <CSwitch
          checked={data?.published}
          onChange={onStatusChange(data?.id, data)}
        />
      </TableCell>
      <TableCell align="center">
        <Stack direction="row" spacing={1} justifyContent="center">
          <IconButton color="warning" onClick={toggleOpen}>
            <Edit />
          </IconButton>
          <IconButton color="secondary" onClick={onDelete(data?.id)}>
            <Delete />
          </IconButton>
        </Stack>
      </TableCell>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={close}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        {LANGUAGES.map((e) => (
          <MenuItem
            key={e?.id}
            sx={{ fontWeight: 700 }}
            onClick={onEdit(data?.id, e?.id)}
          >
            {e?.name}
          </MenuItem>
        ))}
      </Menu>
    </TableRow>
  );
  //#endregion
};
