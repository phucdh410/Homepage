import { CSwitch } from '@controls';
import { Delete, Edit } from '@mui/icons-material';
import { IconButton, Stack, TableCell, TableRow } from '@mui/material';
import dayjs from 'dayjs';

export const MUserRow = ({
  data,
  rowIndex,
  onStatusChange,
  onEdit,
  onDelete,
}) => {
  return (
    <TableRow>
      <TableCell align="center">{rowIndex}</TableCell>
      <TableCell align="left">{data?.username}</TableCell>
      <TableCell align="center">
        {dayjs(data?.created_at).format('DD/MM/YYYY')}
      </TableCell>
      <TableCell align="center">
        {dayjs(data?.updated_at ? data.updated_at : data?.created_at).format(
          'DD/MM/YYYY',
        )}
      </TableCell>
      <TableCell align="center">
        <CSwitch
          checked={data?.active}
          onChange={onStatusChange(data?.id, data)}
        />
      </TableCell>
      <TableCell align="center">
        <Stack direction="row" spacing={1} justifyContent="center">
          <IconButton color="warning" onClick={onEdit(data?.id)}>
            <Edit />
          </IconButton>
          <IconButton color="secondary" onClick={onDelete(data?.id)}>
            <Delete />
          </IconButton>
        </Stack>
      </TableCell>
    </TableRow>
  );
};
