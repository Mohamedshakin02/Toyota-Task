import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import uae from "../assets/uae flag.png";
import Reschedule from '@/components/Reschedule'

function CancelModal() {
    const [open, setOpen] = useState(true)

    return (
        <>
            <Header />
            <Reschedule />
            <Footer />

            {open && (
                <div className="fixed inset-0 z-50 flex items-end lg:items-center justify-center bg-black/50">

                    <div className="w-full lg:max-w-2xl bg-white rounded-t-lg lg:rounded-lg shadow-lg">

                        <div className="flex justify-between items-center p-5 pb-0 lg:pb-5">

                            <button
                                onClick={() => setOpen(false)}
                                className="text-xl ml-auto"
                            >
                                <i class="bi bi-x-lg"></i>
                            </button>

                        </div>


                        <div className="p-5 lg:p-7">

                            <h1 className="text-2xl font-bold mb-3">
                                Cancel Test Drive?
                            </h1>

                            <div className='text-lg'>
                                <p>Are you sure you want to cancel your test for the Lexus NXh on Friday, 13 Feb 2026?</p>

                                <br />

                                <p>If this time no longer works, you can reschdule to keep your booking.</p>

                                <br className='inline-block lg:hidden'/>
                            </div>



                            <div className='mt-6 flex flex-col justify-center gap-5'>
                                <button className='w-full py-3 lg:py-3  bg-red-500 text-white lg:rounded-md'>
                                    Confirm cancellation
                                </button>

                                <button className='w-full py-3 lg:py-3 border-2 border-red-500 text-red-500 lg:rounded-md'>
                                    Reschedule
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            )}
        </>
    )
}

export default CancelModal