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
import LicenseIDPage from './pages/LicenseIDPage'
import LicenseIDFullPage from './pages/LicenseIDFullPage'
import LicenseWaiverPage from './pages/LicenseWaiverPage'
import LicenseErrorPage from './pages/LicenseErrorPage'
import ConfrimPage from './pages/ConfirmPage'
import ReschedulePage from './pages/ReschedulePage'
import RescheduleDatePage from './pages/RescheduleDatePage'
import RescheduleConfirmPage from './pages/RescheduleConfirmPage'
import CancelModal from './pages/CancelModal'
import CancelConfirmPage from './pages/CancelConfirmPage'
import AgreementModal from './pages/AgreementModal'
import TermsModal from './pages/TermsModal'

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
        <Route path="/LicenseID" element={<LicenseIDPage />} />
        <Route path="/LicenseIDFull" element={<LicenseIDFullPage />} />
        <Route path="/LicenseWaiver" element={<LicenseWaiverPage />} />
        <Route path="/LicenseError" element={<LicenseErrorPage />} />
        <Route path="/Confirm" element={<ConfrimPage />} />
        <Route path="/Reschedule" element={<ReschedulePage />} />
        <Route path="/RescheduleDate" element={<RescheduleDatePage />} />
        <Route path="/RescheduleConfirm" element={<RescheduleConfirmPage/>} />
        <Route path="/CancelModal" element={<CancelModal/>} />
        <Route path="/CancelConfirm" element={<CancelConfirmPage/>} />
        <Route path="/Agreement" element={<AgreementModal/>} />
        <Route path="/Terms" element={<TermsModal />} />
      </Routes>
    </>
  )
}

export default App
