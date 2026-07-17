import React from 'react'
import Header from '../components/Header'
import Cars from '../components/Cars'
import Footer from '../components/Footer'
import { useState } from 'react'
import uae from "../assets/uae flag.png";

function Collection() {
    const [open, setOpen] = useState(true)

    return (
        <>
            <Header />
            <Cars />
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


                        <div className="p-5 lg:p-7 space-y-4">

                            <h1 className="text-2xl font-bold">
                                Book a test drive
                            </h1>

                            <form action="">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block mt-5 mb-2 text-lg lg:text-base font-normal">
                                        Mobile Number
                                    </label>

                                    <div className="flex items-center rounded border border-gray-400">
                                        <div className="rounded-full flex gap-2 items-center px-3">
                                            <img src={uae} alt="UAE Flag" className="w-6 h-auto rounded-full" />
                                            <p className="text-base font-normal">+971</p>

                                        </div>
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                id="name"
                                                className="p-2 w-full border-l border-gray-400 rounded-bl-none rounded-tl-none" placeholder='Mobile Number*'
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <p>We will send a verification code to this number.</p>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="bg-gray-500 text-white px-4 py-2 w-full"
                                    >
                                        Send Verification Code
                                    </button>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>
            )}
        </>
    )
}

export default Collection