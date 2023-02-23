import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getPermissions } from '@apis/permissions';
import { Box, Stack } from '@mui/material';
import { CLoading } from '@others';
import { ROUTES } from '@routes/routes';
import { setPermission } from '@slices/permission.slice';

import { CHeader } from './CHeader';
import { CSidebar } from './CSidebar';

export const CMainLayout = () => {
  //#region Data
  const isLogined = useSelector((state) => state.auth.isLogined);

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  //#endregion

  //#region Event
  const toggleSidebar = () => setOpen(!open);
  //#endregion

  useEffect(() => {
    const handleGetAllPermissions = async () => {
      try {
        const res = await getPermissions();

        const { data } = res;

        dispatch(setPermission(data));
      } catch (error) {
        throw error;
      }
    };

    handleGetAllPermissions();
  }, []);

  //#region Render
  return isLogined ? (
    <Box display="flex" flexDirection="column" height="100vh">
      <CHeader toggleSidebar={toggleSidebar} />

      <Stack direction="row" flex={1}>
        <CSidebar open={open} toggleSidebar={toggleSidebar} />

        <Box paddingX="20px" paddingY="30px" flex={1} position="relative">
          <Suspense fallback={<CLoading />}>
            <Outlet />
          </Suspense>
        </Box>
      </Stack>
    </Box>
  ) : (
    <Navigate to={ROUTES.LOGIN} replace={true} />
  );
  //#endregion
};
