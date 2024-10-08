import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual change in the theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

          </div>
          <div className="w-full max-w-sm mx-auto">
            <ThemeBtn />
            <Card />
          </div>
        </div>
      </div>
      <h1>The first git commit is added over here</h1>

    </ThemeProvider>
  )
}

export default App
