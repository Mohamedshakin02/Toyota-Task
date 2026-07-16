import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LicenseError from '@/components/LicenseError'

function LicenseErrorPage() {
  return (
    <>
      <Header />
      <LicenseError />
      <Footer />
    </>
  )
}

export default LicenseErrorPage