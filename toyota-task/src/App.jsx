import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Collection from './pages/Collection'
import BookModal from './pages/BookModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Collection />} />
        <Route path="/BookModal" element={<BookModal />} />
      </Routes>
    </>
  )
}

export default App
