import { Header } from "./components/Header"

import { GlobalStyle } from "./styles/global"
import { ThemeProvider, DefaultTheme } from "styled-components"
import light from "./styles/themes/light"
import dark from "./styles/themes/dark"

import { BrowserRouter } from 'react-router-dom'


import { usePersistedState } from "./utils/usePersistedState"
import { Router } from "./Router"

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header toggleTheme={toggleTheme} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
