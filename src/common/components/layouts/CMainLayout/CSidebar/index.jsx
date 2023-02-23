import { Box, Drawer } from '@mui/material';

import { CNavigations } from './CNavigations';

const HEADER_HEIGHT = 56;
const SIDEBAR_WIDTH = 300;

export const CSidebar = ({ open, toggleSidebar }) => {
  //#region Data

  const container =
    window !== undefined ? () => window.document.body : undefined;
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <Box
      component="nav"
      sx={{ width: { md: SIDEBAR_WIDTH }, flexShrink: { md: 0 } }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={open}
        onClose={toggleSidebar}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: SIDEBAR_WIDTH,
          },
        }}
      >
        <CNavigations />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            borderRight: 'none',
            boxSizing: 'border-box',
            width: SIDEBAR_WIDTH,
            marginTop: `${HEADER_HEIGHT}px`,
          },
        }}
        open
      >
        <CNavigations />
      </Drawer>
    </Box>
  );
  //#endregion
};
