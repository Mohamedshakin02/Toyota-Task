import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LicenseIDFull from "@/components/LicenseIDFull";
import Modal from "../components/Modal";
import Button from "../components/Button"
import { useNavigate } from 'react-router-dom'

function AgreementModal() {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <LicenseIDFull />
            <Footer />

            <div></div>

            <Modal
                open={open}
                showCloseButton={false}
                position="center"
                bodyClassName="p-5 lg:p-7 text-center"
                modalClassName="mx-4 lg:mx-0 rounded-lg!"
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

                    <Button
                        label="Decline"
                        variant="outline"
                        width="full"
                        size="wide"
                        onClick={() => navigate(-1)}
                    />

                    <Button
                        label="Return to review"
                        variant="primary"
                        width="full"
                        size="wide"
                        onClick={() => navigate("/licensewaiver")}
                    />

                </div>

            </Modal>
        </>
    );
}

export default AgreementModal;