import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import uae from "../assets/uae flag.png";
import Reschedule from '@/components/Reschedule'
import LicenseIDFull from '@/components/LicenseIDFull';

function AgreementModal() {
    const [open, setOpen] = useState(true)

    return (
        <>
            <Header />
            <LicenseIDFull />
            <Footer />

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

                    <div className="mx-4 max-w-2xl bg-white rounded-lg shadow-lg">


                        <div className="p-5 lg:p-7 text-center">

                            <h1 className="text-2xl font-bold mb-2">
                                Agreement required
                            </h1>

                            <div className='text-gray-600'>
                                <p className=''>To proceed with your test drive, acceptance of the waiver is required.</p>


                            </div>



                            <div className='mt-7 flex flex-col-reverse lg:flex-row gap-3 lg:gap-5'>

                                <button className='w-full py-3 lg:py-3 border-2 border-red-500 text-red-500'>
                                    Decline
                                </button>

                                <button className='w-full py-3 lg:py-3  bg-red-500 text-white'>
                                    Return to review
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            )}
        </>
    )
}

export default AgreementModal