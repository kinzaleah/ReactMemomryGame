import { FC } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { HomePage } from './pages/HomePage'
import { GamePage } from './pages/GamePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App: FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={{}}>
      <CssBaseline />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/game'} element={<GamePage />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
)
