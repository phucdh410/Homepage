import { useEffect } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createBanner } from '@apis/banners.api';
import { updateBanner } from '@apis/banners.api';
import { CImageUpload, CInput, CSwitch } from '@controls';
import { formatPayload } from '@func';
import { useResolver } from '@hooks';
import { Box, FormLabel, Paper, Stack, Typography } from '@mui/material';
import { CActionsForm } from '@others';

import { defaultValuesBanner, validationSchemaBanner } from '../../form';

import { MEndDate } from './MEndDate';
import { MStartDate } from './MStartDate';

export const MBannerForm = ({ data, language_id }) => {
  //#region Data
  const resolver = useResolver(validationSchemaBanner);

  const { control, handleSubmit, reset } = useForm({
    mode: 'all',
    shouldFocusError: true,
    resolver,
    defaultValues: defaultValuesBanner,
  });

  const fileValue = useWatch({ control, name: 'file' });

  const navigate = useNavigate();
  //#endregion

  //#region Event
  const onBack = () => {
    reset(defaultValuesBanner);

    navigate(-1, { replace: true });
  };

  const onSubmit = async (values) => {
    try {
      data
        ? await updateBanner(data?.id, formatPayload(values))
        : await createBanner(formatPayload(values));

      toast.success('Cập nhật banner thành công!');

      onBack();
    } catch (error) {
      toast.error(error?.message || 'Cập nhật banner không thành công!');
    }
  };
  //#endregion

  useEffect(() => {
    if (data) reset({ ...data, file_id: data?.file?.id, language_id });
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
          <Stack direction="column" spacing={2.5} mb={2.5}>
            <Stack direction="column" spacing={1} flex={1}>
              <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
                Tiêu đề
              </FormLabel>
              <Controller
                control={control}
                name="title"
                render={({ field, fieldState: { error } }) => (
                  <CInput
                    placeholder="Nhập tiêu đề..."
                    {...field}
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Stack>

            <Stack direction="column" spacing={1} flex={1}>
              <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
                Hình ảnh
              </FormLabel>
              <Controller
                control={control}
                name="file_id"
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <CImageUpload
                    error={!!error}
                    helperText={error?.message}
                    onChange={onChange}
                    url={fileValue?.url}
                  />
                )}
              />
            </Stack>

            <Stack direction="row" spacing={1} minWidth={200}>
              <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }}>
                Hiển thị
              </FormLabel>
              <Controller
                control={control}
                name="published"
                render={({ field }) => <CSwitch {...field} />}
              />
            </Stack>
          </Stack>

          <Stack direction="column" spacing={1} flex={1}>
            <FormLabel sx={{ fontWeight: 600, lineHeight: '24px' }} required>
              Ngày hiển thị
            </FormLabel>
            <Stack direction="row" alignItems="center" spacing={1}>
              <MStartDate control={control} />
              <MEndDate control={control} />
            </Stack>
          </Stack>

          <CActionsForm onCancel={onBack} />
        </form>
      </Paper>
    </>
  );
  //#endregion
};
