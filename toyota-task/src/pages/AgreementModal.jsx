import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LicenseIDFull from "@/components/LicenseIDFull";
import Modal from "../components/Modal";

function AgreementModal() {
    const [open, setOpen] = useState(true);

    return (
        <>
            <Header />
            <LicenseIDFull />
            <Footer />

            <Modal
                open={open}
                showCloseButton={false}
                position="center"
                bodyClassName="p-5 lg:p-7 text-center"
            >

                <h1 className="text-2xl font-bold mb-2 mt-4 lg:mt-0">
                    Agreement required
                </h1>

                <div className="text-gray-600">
                    <p>
                        To proceed with your test drive, acceptance of the waiver is required.
                    </p>
                </div>

                <div className="mt-7 flex flex-col-reverse lg:flex-row gap-3 lg:gap-5">

                    <button className="w-full py-3 border-2 border-red-500 text-red-500">
                        Decline
                    </button>

                    <button className="w-full py-3 bg-red-500 text-white">
                        Return to review
                    </button>

                </div>

            </Modal>
        </>
    );
}

export default AgreementModal;