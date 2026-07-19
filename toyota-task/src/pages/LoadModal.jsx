import React, { useState } from "react";
import Header from "../components/Header";
import Cars from "../components/Cars";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

function LoadModal() {
    const [open, setOpen] = useState(true);

    return (
        <>
            <Header />
            <Cars />
            <Footer />

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                showCloseButton={false}
                modalClassName="h-70"
                bodyClassName="flex h-70 items-center justify-center"
            >
                <div className="w-14 h-14 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            </Modal>

        </>
    );
}

export default LoadModal;