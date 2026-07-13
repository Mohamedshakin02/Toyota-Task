import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Collection from './pages/Collection'
import BookModal from './pages/BookModal'
import PINModal from './pages/PINModal'
import LoadModal from './pages/LoadModal'
import DetailsPage from './pages/DetailsPage'
import SummaryPage from './pages/SummaryPage'
import LocationPage from './pages/LocationPage'
import DatePage from './pages/DatePage'
import ThanksPage from './pages/ThanksPage'
import LicensePage from './pages/LicensePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Collection />} />
        <Route path="/BookModal" element={<BookModal />} />
        <Route path="/PINModal" element={<PINModal />} />
        <Route path="/LoadModal" element={<LoadModal />} />
        <Route path="/Details" element={<DetailsPage />} />
        <Route path="/Summary" element={<SummaryPage />} />
        <Route path="/Location" element={<LocationPage />} />
        <Route path="/Date" element={<DatePage />} />
        <Route path="/Thanks" element={<ThanksPage />} />
        <Route path="/License" element={<LicensePage />} />
      </Routes>
    </>
  )
}

export default App
