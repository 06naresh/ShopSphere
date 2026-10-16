import { StrictMode, useEffect, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import "../index.css";
import "../styles/index.css";
import App from './App.jsx'

import { ThemeProvider as MuiThemeProvider, CssBaseline, IconButton, Tooltip, } from '@mui/material';

import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"

import { createAppTheme } from './theme.js';

import AuthProvider from "../features/auth/context/AuthContext.jsx"
import { useThemeMode, ThemeProvider as AppThemeProvider } from '../features/layout/context/ThemeContext.jsx';


function Root() {
  const {mode, toggleTheme} = useThemeMode();

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

        <AuthProvider>
          <div className="fixed right-4 top-4 z-50">
            <Tooltip title={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}>
              <IconButton onClick={toggleTheme} color='primary' sx={{ bgcolor: "Background.paper", boxShadow: 2, "&:hover": { bgcolor: "Background.paper", }, }}>
                {mode === "light" ? (
                  <DarkModeIcon />
                ) : (
                  <LightModeIcon />
                )}
              </IconButton>
            </Tooltip>
          </div>

          <App />
        </AuthProvider>
    </MuiThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppThemeProvider>
      <Root />
    </AppThemeProvider>
  </StrictMode>,
)
