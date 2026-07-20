import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reschedule from "@/components/Reschedule";
import Modal from "../components/Modal";
import Button from "../components/Button"

function CancelModal() {
    const [open, setOpen] = useState(true);

    return (
        <>
            <Header />
            <Reschedule />
            <Footer />

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <h1 className="text-2xl font-bold mb-3">
                    Cancel Test Drive?
                </h1>

                <div className="text-lg">
                    <p>
                        Are you sure you want to cancel your test for the Lexus NXh on Friday, 13 Feb 2026?
                    </p>

                    <br />

                    <p>
                        If this time no longer works, you can reschedule to keep your booking.
                    </p>

                    <br className="inline-block lg:hidden" />
                </div>

                <div className="mt-6 flex flex-col justify-center gap-5">
                    <Button
                        label="Confirm cancellation"
                        variant="primary"
                        width="full"
                        rounded="md"
                    />

                    <Button
                        label="Reschedule"
                        variant="outline"
                        width="full"
                        rounded="md"
                    />
                </div>

            </Modal>
        </>
    );
}

export default CancelModal;