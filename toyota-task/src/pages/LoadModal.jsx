import React from 'react'
import Header from '../components/Header'
import Cars from '../components/Cars'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function LoadModal() {
    const [open, setOpen] = useState(true)

    return (
        <>
            <Header />
            <Cars />
            <Footer />

            {open && (
                <div className="fixed inset-0 z-50 flex items-end lg:items-center justify-center bg-black/50">

                    <div className="w-full h-70 lg:max-w-2xl bg-white rounded-t-lg lg:rounded-lg shadow-lg">

                        <div className="p-5 h-full flex justify-center items-center">

                            <div className="w-14 h-14 border-2 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>

                        </div>

                    </div>

                </div>
            )}
        </>
    )
}


export default LoadModal