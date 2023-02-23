import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import {
  Collapse,
  Fade,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';

export const CCollapse = ({ data, index, dropdownList }) => {
  //#region Data
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const theme = useTheme();

  const selected = useMemo(() => {
    for (let e of dropdownList) {
      if (pathname.includes(e.path)) return true;
    }

    return false;
  }, [dropdownList, pathname]);

  const [open, setOpen] = useState(selected);
  //#endregion

  //#region Event
  const toggleCollapse = () => setOpen(!open);
  //#endregion

  //#region Render
  return (
    <>
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
          selected={selected}
          onClick={toggleCollapse}
        >
          {data?.icon && (
            <ListItemIcon sx={{ minWidth: 40 }}>{data.icon}</ListItemIcon>
          )}
          <ListItemText primary={data.title} />
          {data?.isChildren && (open ? <ArrowDropUp /> : <ArrowDropDown />)}
        </ListItemButton>
      </Fade>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {dropdownList.map((e, i) => (
            <Fade
              key={e.title}
              in
              timeout={500}
              style={{ transitionDelay: i * 100 }}
            >
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
                    '& .MuiTypography-root': {
                      color: theme.palette.secondary.main,
                      fontWeight: 600,
                    },
                  },
                }}
                selected={e.path.includes(pathname.split('/')[2])}
                onClick={() => navigate(e.path)}
              >
                <ListItemIcon sx={{ minWidth: 40 }} />
                <ListItemText primary={e.title} />
              </ListItemButton>
            </Fade>
          ))}
        </List>
      </Collapse>
    </>
  );
  //#endregion
};
