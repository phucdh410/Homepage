import { useEffect } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { shallowEqual, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUser, updateUser } from '@apis/users.api';
import { CInput, CInputPassword, CSwitch } from '@controls';
import { useResolver } from '@hooks';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Paper,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { CActionsForm } from '@others';

import { defaultValues, validationSchema } from '../../form';

export const MForm = ({ data }) => {
  //#region Data
  const resolver = useResolver(validationSchema);

  const { permissions } = useSelector(
    (state) => state.permission,
    shallowEqual,
  );

  const { control, handleSubmit, reset } = useForm({
    mode: 'all',
    shouldFocusError: true,
    resolver,
    defaultValues,
  });

  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: 'permissions',
  });

  const navigate = useNavigate();
  //#endregion

  //#region Event
  const onBack = () => {
    reset(defaultValues);

    navigate(-1, { replace: true });
  };

  const onSubmit = async (values) => {
    try {
      const apiValue = {
        ...values,
        permissions: values.permissions.map((e) => e?._id),
      };

      if (data) {
        delete apiValue.password;

        await updateUser(data?.id, apiValue);
      } else {
        await createUser(apiValue);
      }

      toast.success('Cập nhật người dùng thành công!');

      onBack();
    } catch (error) {
      toast.error(error?.message || 'Cập nhật người dùng không thành công!');
    }
  };

  const onCheckAll = () =>
    replace(permissions.map((e) => ({ ...e, _id: e.id })));

  const onClearAll = () => replace([]);

  const onCheck = (permission) => () => {
    let index = -1;

    const found = fields.some((e, i) => {
      if (e?._id === permission.id) {
        index = i;
        return true;
      }
      return false;
    });

    found ? remove(index) : append({ ...permission, _id: permission.id });
  };
  //#endregion

  useEffect(() => {
    if (data)
      reset({
        ...data,
        permissions: data?.permissions?.map((e) => ({ ...e, _id: e.id })),
      });
  }, [data]);

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">
          {data ? 'Chỉnh sửa' : 'Thêm mới'}
        </Typography>
      </Box>

      <Paper className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={1} mb={2.5}>
            <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
              Tên đăng nhập
            </FormLabel>
            <Controller
              control={control}
              name="username"
              render={({ field, fieldState: { error } }) => (
                <CInput
                  disabled={!!data}
                  placeholder="Nhập username..."
                  {...field}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2.5} mb={2.5}>
            <Stack direction="column" spacing={1} flex={1}>
              <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
                Mật khẩu
              </FormLabel>
              <Controller
                control={control}
                name="password"
                render={({ field, fieldState: { error } }) => (
                  <CInputPassword
                    placeholder="Nhập password..."
                    {...field}
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
              {data && (
                <Typography sx={{ opacity: 0.7 }}>
                  <i>(Nếu cần chỉnh sửa mật khẩu hãy nhập ô này)</i>
                </Typography>
              )}
            </Stack>
            <Stack direction="column" spacing={1} minWidth={200}>
              <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }}>
                Trạng thái
              </FormLabel>
              <Controller
                control={control}
                name="active"
                render={({ field }) => <CSwitch {...field} />}
              />
            </Stack>
          </Stack>

          <Stack direction="column" spacing={1} mb={2.5}>
            <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
              Danh sách tính năng truy cập
            </FormLabel>

            <Box>
              <Button
                className="c-button"
                disabled={fields?.length === permissions.length}
                onClick={onCheckAll}
                sx={{ mr: 1 }}
              >
                Chọn tất cả
              </Button>
              <Button
                className="c-button"
                disabled={fields?.length < 1}
                onClick={onClearAll}
              >
                Xóa tất cả
              </Button>
            </Box>

            <Controller
              control={control}
              name="permissions"
              render={({ fieldState: { error } }) =>
                !!error && (
                  <Typography color="error">{error?.message}</Typography>
                )
              }
            />

            <Grid container spacing={1.5}>
              {permissions.map((e) => (
                <Grid xs={6} md={4} xl={3} key={e?.id}>
                  <FormControlLabel
                    checked={fields.some((_e) => _e?._id === e.id)}
                    onChange={onCheck(e)}
                    control={<Checkbox />}
                    label={e?.name}
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>

          <CActionsForm onCancel={onBack} />
        </form>
      </Paper>
    </>
  );
  //#endregion
};
