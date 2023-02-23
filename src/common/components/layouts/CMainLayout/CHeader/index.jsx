import logo from '@assets/images/logo.png';
import { Menu } from '@mui/icons-material';
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';

import { CProfile } from './CProfile';

const HEADER_HEIGHT = 56;

export const CHeader = ({ toggleSidebar }) => {
  const isBelowMd = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Box
      height={HEADER_HEIGHT}
      sx={{ backgroundColor: '#fff' }}
      position="sticky"
      top={0}
      zIndex={1}
    >
      <Stack
        direction="row"
        sx={{ padding: '6px 20px' }}
        alignItems="center"
        spacing={1.75}
      >
        <IconButton onClick={toggleSidebar} sx={{ display: { md: 'none' } }}>
          <Menu />
        </IconButton>

        <Box>
          <img src={logo} alt="" />
        </Box>

        <Box flex={1}>
          {!isBelowMd && (
            <Typography fontSize="16px" fontWeight={700}>
              TRƯỜNG ĐẠI HỌC SƯ PHẠM THÀNH PHỐ HỒ CHÍ MINH
            </Typography>
          )}
        </Box>
        <CProfile />
      </Stack>
    </Box>
  );
};
