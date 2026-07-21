import React, { useState } from "react";
import Header from "../components/Header";
import Cars from "../components/Cars";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

function PINModal() {
    const [open, setOpen] = useState(true);

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
            <div className='bg-[#F9F9F9]'>
                <Header />
                <Cars />
                <Footer />

                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    bodyClassName="p-5 lg:p-7 space-y-3"
                    modalClassName="lg:max-w-2xl"
                >

                    <h1 className="text-2xl lg:text-xl font-bold">
                        Verify your phone number
                    </h1>

                    <p className="text-gray-600 text-sm lg:text-base">
                        We'll send a one-time verification code to confirm your number
                    </p>


                    <div className="flex gap-2 text-sm">
                        <p>
                            Enter the 6-digit code sent to{" "}
                            <span className="font-semibold">
                                +971 XX XXX XXXX
                            </span>
                        </p>

                        <Link
                            to=""
                            className="text-red-600 underline font-bold"
                        >
                            Change
                        </Link>
                    </div>


                    <form className="mt-8">

                        <div className="mb-4 flex justify-center gap-3">
                            {[1, 2, 3, 4].map((item) => (
                                <input
                                    key={item}
                                    type="text"
                                    maxLength={1}
                                    className="w-16 h-16 border border-gray-400 lg:rounded text-2xl text-center"
                                />
                            ))}
                        </div>


                        <div className="mt-8 flex justify-center">
                            <p className="text-sm text-gray-600 font-medium underline">
                                Resend Code (20:00)
                            </p>
                        </div>

                    </form>


                    {/* Mobile keypad */}
                    <div className="lg:hidden -mx-5 -mb-5 mt-8 bg-gray-200 p-5">

                        <div className="flex items-center justify-center gap-25 mb-3">

                            <div className="h-8 w-px bg-gray-400"></div>

                            <div className="text-center">
                                <p className="text-sm">
                                    From Messages
                                </p>

                                <p className="text-lg font-semibold">
                                    050518
                                </p>
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

                                    <span className="text-xs font-semibold tracking-widest">
                                        {key.letters}
                                    </span>

                                </button>
                            ))}


                            <div></div>


                            <button className="rounded-lg py-3 bg-white shadow text-xl">
                                0
                            </button>


                            <button className="rounded-lg flex items-center justify-center text-2xl">
                                <i className="bi bi-backspace"></i>
                            </button>


                        </div>


                        <div className="flex justify-center">
                            <div className="w-1/2 h-1 bg-black rounded-full"></div>
                        </div>

                    </div>

                </Modal>
            </div>

        </>
    );
}

export default PINModal;