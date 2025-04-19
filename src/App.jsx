import { useState,useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Servicess/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import { ThemeProvider } from './contexts/Theme'


function App() {

  const [themeMode,setThemeMode]=useState("light");

  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
    </ThemeProvider>
  )
}

export default App
