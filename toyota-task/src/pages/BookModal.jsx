import React, { useState } from "react";
import Header from "../components/Header";
import Cars from "../components/Cars";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import uae from "../assets/uae flag.png";
import Button from "../components/Button"
import { useNavigate } from "react-router-dom";

function BookModal() {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        navigate("/pinmodal");
    };

    return (
        <>
            <div className='bg-[#F9F9F9]'>
                <Header />
                <Cars />
                <Footer />

                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    bodyClassName="p-5 lg:p-7 space-y-4"
                >
                    <h1 className="text-2xl font-bold mb-5">
                        Book a test drive
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label
                                htmlFor="name"
                                className="block mt-5 mb-2 text-lg lg:text-base font-normal"
                            >
                                Mobile Number
                            </label>

                            <div className="flex items-center rounded border border-gray-400">
                                <div className="rounded-full flex gap-2 items-center px-3">
                                    <img
                                        src={uae}
                                        alt="UAE Flag"
                                        className="w-6 h-auto rounded-full"
                                    />
                                    <p className="text-base font-normal">
                                        +971
                                    </p>
                                </div>

                                <div className="flex-1">
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Mobile Number*"
                                        className="p-2 w-full border-l border-gray-400 rounded-bl-none rounded-tl-none outline-none focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <p>
                                We will send a verification code to this number.
                            </p>
                        </div>

                        <Button
                            label="Send Verification Code"
                            type="submit"
                            variant="secondary"
                            width="full"
                        />
                    </form>
                </Modal>
            </div>

        </>
    );
}

export default BookModal;