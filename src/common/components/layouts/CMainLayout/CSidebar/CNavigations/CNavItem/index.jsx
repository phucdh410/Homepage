import { useLocation, useNavigate } from 'react-router-dom';
import {
  Fade,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';

export const CNavItem = ({ data, index }) => {
  //#region Data
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const theme = useTheme();
  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <Fade in timeout={500} style={{ transitionDelay: index * 100 }}>
      <ListItemButton
        key={data.title}
        sx={{
          fontSize: '16px',
          padding: '10px 18px',
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
          '&:hover': { backgroundColor: '#FFF2F2' },
          '&.Mui-selected': {
            backgroundColor: '#FFF2F2',
            borderRight: '2px solid #CF373D',
            '& path,& .MuiTypography-root': {
              color: theme.palette.secondary.main,
              fontWeight: 600,
            },
          },
        }}
        selected={pathname.includes(data.path)}
        onClick={() => navigate(data.path)}
      >
        {data?.icon && (
          <ListItemIcon sx={{ minWidth: 40 }}>{data.icon}</ListItemIcon>
        )}
        <ListItemText primary={data.title} />
      </ListItemButton>
    </Fade>
  );
  //#endregion
};
