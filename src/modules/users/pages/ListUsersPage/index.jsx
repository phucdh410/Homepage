import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteUser, getUsers, updateUser } from '@apis/users.api';
import { confirm } from '@confirm';
import { CSearchInput } from '@controls';
import { cleanObjValue } from '@func';
import { MUserRow } from '@modules/users/components';
import { AddCircleOutline } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { CPagination, CTable } from '@others';
import { useQuery } from '@tanstack/react-query';

const headers = [
  { name: 'STT', align: 'center' },
  { name: 'TÊN ĐĂNG NHẬP', align: 'left' },
  { name: 'NGÀY TẠO', align: 'center' },
  { name: 'NGÀY CẬP NHẬT', align: 'center' },
  { name: 'TRẠNG THÁI', align: 'center' },
  { name: 'THAO TÁC', align: 'center' },
];

const ListUsersPage = () => {
  //#region Data
  const [filter, setFilter] = useState({
    page: 1,
    pages: 0,
    input: '',
  });

  const [paginate, setPaginate] = useState({ page: 1, pages: 0 });

  const _filter = cleanObjValue(filter);

  const { data, refetch } = useQuery({
    queryKey: ['users', _filter],
    queryFn: () => getUsers(_filter),
  });

  const listData = useMemo(() => data?.data?.data || [], [data]);

  const navigate = useNavigate();
  //#endregion

  //#region Event
  const onPageChange = (event, newPage) =>
    setFilter((prev) => ({ ...prev, page: newPage }));

  const onStatusChange = (id, data) => async (e) => {
    try {
      await updateUser(id, { ...data, active: e.target.checked });

      refetch();

      toast.success('Điều chỉnh trạng thái thành công!');
    } catch (error) {
      toast.error(error?.message || 'Điều chỉnh trạng thái không thành công!');
    }
  };

  const onEdit = (id) => () => navigate(`detail/${id}`);

  const onDelete = (id) => async () => {
    if (
      await confirm({
        confirmation: 'Thao tác xóa sẽ không thể hoàn tác!',
        acceptBtnText: 'Xác nhận',
      })
    ) {
      try {
        await deleteUser(id);

        refetch();

        toast.success('Xóa người dùng thành công!');
      } catch (error) {
        toast.error(error?.message || 'Xóa người dùng không thành công!');
      }
    }
  };

  const onSearch = (value) => setFilter((prev) => ({ ...prev, input: value }));
  //#endregion

  useEffect(() => {
    setPaginate({
      page: data?.data?.page || 1,
      pages: data?.data?.pages || 0,
    });
  }, [data]);

  //#region Render
  return (
    <Box>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems={{ xs: 'start', md: 'center' }}
        justifyContent="space-between"
        flex={1}
        mb={3}
      >
        <Typography variant="page-title">Quản lý người dùng</Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <CSearchInput onInputChange={onSearch} />
          <Button
            variant="contained"
            className="add-button"
            startIcon={<AddCircleOutline />}
            onClick={() => navigate('detail')}
          >
            Thêm mới
          </Button>
        </Stack>
      </Stack>

      <Paper className="wrapper">
        <CTable
          headers={headers}
          body={listData}
          RowComponent={MUserRow}
          onStatusChange={onStatusChange}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </Paper>

      <CPagination
        page={paginate.page}
        pages={paginate.pages}
        onChange={onPageChange}
      />
    </Box>
  );
  //#endregion
};

export default ListUsersPage;
