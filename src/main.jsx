import { CssBaseline, ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { dark } from './themes/dark'
import { router } from './utils/router'

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
