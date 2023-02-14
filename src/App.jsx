import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
