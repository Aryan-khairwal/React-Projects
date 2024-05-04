import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/theme'


function App() {

  const [themeMode, setThemeMode] = useState("light")


  const darkTheme = () => {

    setThemeMode("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    const Html = document.querySelector('html')
    Html.classList.remove("light", "dark")
    Html.classList.add(themeMode)

  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>

      <ThemeBtn ></ThemeBtn>
      <Card></Card>
    </ThemeProvider>
  )
}

export default App




