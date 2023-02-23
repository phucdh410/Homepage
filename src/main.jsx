// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { persistor, store } from '@redux';
import { QueryClientProvider } from '@tanstack/react-query';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { PersistGate } from 'redux-persist/integration/react';

import { queryClient } from './utils/react-query';
import App from './App';
import theme from './theme';

dayjs.extend(isBetween);
dayjs.extend(utc);
dayjs.extend(timezone);

createRoot(document.getElementById('__app')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </LocalizationProvider>
      </QueryClientProvider>
    </PersistGate>
  </Provider>,
);
