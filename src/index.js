import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import theme from './styles/Theme';
import {ThemeProvider} from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <AppRouter/>
    </React.StrictMode>
  </ThemeProvider>
);

