import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

export const CTable = ({ headers, body, RowComponent, refetch, ...props }) => {
  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {headers?.length > 0 &&
              headers.map((head, i) => (
                <TableCell key={i} align={head.align}>
                  {head.name}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {body?.length > 0 ? (
            body.map((row, index) => (
              <RowComponent
                key={index}
                rowIndex={index + 1}
                data={row}
                refetch={refetch}
                {...props}
              />
            ))
          ) : (
            <TableRow>
              <TableCell sx={{ height: '450px' }} colSpan="100%">
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography fontSize={18} fontWeight={600}>
                    Không có dữ liệu hiển thị
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
