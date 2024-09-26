import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'boxicons/css/boxicons.min.css'
import Header from './components/header/Header.jsx';
import Home from './components/header/home/Home.jsx';
import About from './components/header/About/About.jsx'
import Skills from './components/Skill/skills.jsx'

function App() {

  return (
    <>
     <Header/>

     <main className='main'>
      <Home/>
      <About/>
      <Skills/>
     </main>
    </>
  )
}

export default App
