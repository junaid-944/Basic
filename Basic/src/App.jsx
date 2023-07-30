import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Compunents/Navbar'
import Home from './pages/Home'
import Html from './pages/Html'
import List from './pages/List'
import Card from './Compunents/Card'
import ProgressBar from './Compunents/Progressbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    {/* <Home/>   */}
    {/* <Html/> */}
    <Card/>
    <List/>
    </>
    
    
  )
}

export default App
