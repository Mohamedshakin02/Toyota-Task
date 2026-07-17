import React from 'react'
import Header from '../components/Header'
import Cars from '../components/Cars'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function PINModal() {
    const [open, setOpen] = useState(true)
    const keypad = [
        { number: "1", letters: "\u00A0" },
        { number: "2", letters: "ABC" },
        { number: "3", letters: "DEF" },
        { number: "4", letters: "GHI" },
        { number: "5", letters: "JKL" },
        { number: "6", letters: "MNO" },
        { number: "7", letters: "PQRS" },
        { number: "8", letters: "TUV" },
        { number: "9", letters: "WXYZ" },
    ];

    return (
        <>
            <Header />
            <Cars />
            <Footer />

            {open && (
                <div className="fixed inset-0 z-50 flex items-end lg:items-center justify-center bg-black/50">

                    <div className="w-full lg:max-w-2xl bg-white rounded-t-lg lg:rounded-lg shadow-lg">

                        <div className="flex justify-between items-center p-3 pb-0 lg:pb-5">

                            <button
                                onClick={() => setOpen(false)}
                                className="text-xl ml-auto"
                            >
                                <i class="bi bi-x-lg"></i>
                            </button>

                        </div>


                        <div className="p-5 lg:p-7 space-y-3">

                            <h1 className="text-2xl lg:text-xl font-bold">
                                Verify your phone number
                            </h1>

                            <p className='text-gray-600 text-sm lg:text-base'>We'll send a one-time verification code to confirm your number</p>

                            <div className="flex gap-2 text-sm">
                                <p>Enter the 6-digit code sent to <span className="font-semibold">+971 XX XXX XXXX</span></p>
                                <Link to="" className="text-red-600 underline font-bold">Change</Link>
                            </div>


                            <form action="" className="mt-8">
                                <div className="mb-4 flex justify-center gap-3">
                                    <input
                                        type="text"
                                        maxLength={1}
                                        className="w-16 h-16 border border-gray-400 lg:rounded text-2xl text-center"
                                    />

                                    <input
                                        type="text"
                                        maxLength={1}
                                        className="w-16 h-16 border border-gray-400 lg:rounded text-2xl text-center"
                                    />

                                    <input
                                        type="text"
                                        maxLength={1}
                                        className="w-16 h-16 border border-gray-400 lg:rounded text-2xl text-center"
                                    />

                                    <input
                                        type="text"
                                        maxLength={1}
                                        className="w-16 h-16 border border-gray-400 lg:rounded text-2xl text-center"
                                    />
                                </div>

                                <div className="mt-8 flex justify-center">
                                    <p className="text-sm text-gray-600 font-medium underline">
                                        Resend Code (20:00)
                                    </p>
                                </div>



                            </form>

                        </div>

                        <div className="lg:hidden bg-gray-200 p-5">
                            <div className="flex items-center justify-center gap-25 mb-3">
                                <div className="h-8 w-px bg-gray-400"></div>

                                <div className="text-center">
                                    <p className="text-sm">From Messages</p>
                                    <p className="text-lg font-semibold">050518</p>
                                </div>

                                <div className="h-8 w-px bg-gray-400"></div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-20">
                                {keypad.map((key) => (
                                    <button
                                        key={key.number}
                                        className="rounded-lg p-1 px-2 bg-white shadow flex flex-col items-center justify-center active:scale-95 transition"
                                    >
                                        <span className="text-xl font-normal">
                                            {key.number}
                                        </span>

                                        {key.letters && (
                                            <span className="text-xs font-semibold tracking-widest text-black">
                                                {key.letters}
                                            </span>
                                        )}
                                    </button>
                                ))}

                                <div></div>

                                <button className="rounded-lg py-3 bg-white shadow flex flex-col items-center justify-center active:scale-95 transition">
                                    <span className="text-2xl font-normal">0</span>
                                </button>

                                <button className="rounded-lgflex items-center justify-center text-2xl active:scale-95 transition">
                                    <i className="bi bi-backspace"></i>
                                </button>
                            </div>

                            <div className="flex justify-center">
                                <div className='w-1/2 h-1 bg-black rounded-full'></div>
                            </div>
                        </div>

                    </div>



                </div>
            )}
        </>
    )
}

export default PINModal