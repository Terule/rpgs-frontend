import { CssBaseline, ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { dark } from './themes/dark'
import { router } from './utils/router'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <SnackbarProvider>
        <CssBaseline />
        <RouterProvider  router={router} />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
