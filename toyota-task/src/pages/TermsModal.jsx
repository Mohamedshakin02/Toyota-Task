import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import uae from "../assets/uae flag.png";
import Reschedule from '@/components/Reschedule'
import LicenseIDFull from '@/components/LicenseIDFull';
import Modal from "../components/Modal";

function TermsModal() {
    const [open, setOpen] = useState(true)

    return (
        <>
            <Header />
            <LicenseIDFull />
            <Footer />

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                scrollContent={true}
                bodyClassName="p-5 lg:p-7"
                footer={
                    <div className="p-5 flex flex-col gap-5">

                        <div className="flex items-center">
                            <input
                                id="checkbox-1"
                                type="checkbox"
                                className="w-6 h-6 lg:w-4 lg:h-4 accent-green-600"
                            />

                            <label
                                htmlFor="checkbox-1"
                                className="select-none ms-2 text-sm text-black"
                            >
                                I have read and understand the liability and insurance terms above.
                            </label>
                        </div>


                        <div className="flex justify-between lg:justify-normal gap-5">

                            <button className="lg:w-full px-4 lg:px-0 py-2 lg:py-3 border-2 border-red-500 text-red-500">
                                Decline
                            </button>

                            <button className="lg:w-full px-4 lg:px-0 py-2 lg:py-3 bg-red-500 text-white">
                                Accept
                            </button>

                        </div>

                    </div>
                }
            >
                <h1 className="text-2xl font-bold mb-8 lg:mb-2">
                    Test drive terms & waiver
                </h1>

                <div className=''>
                    <p className=''>The following terms and conditions apply to any test drive of the vehicle stated above (the "Vehicle") and are between the driver undertaking the test drive ("Customer") and the company, "Company", These terms are effective for the duration of the Customer's test drive, from collection until the return of the Vehicle at the agreed time and location.
                    </p>
                </div>

                <br />

                <div>
                    <h2>Eligibility</h2>
                    <p>The customer must present a valid UAE driving license and confirm that he or she is the owner of the driving license provided to the Company and is authorized to operate vehicles of the type being tested. The customer agrees to the Company retaining a copy of his or her driving license on file for identification purposes.
                    </p>
                </div>

                <br />

                <div>
                    <h2>Insurance</h2>
                    <ul>
                        <li>
                            <p>(a) Notify Company and obtain a police report in the event of any damage to the Vehicle during the test drive.</p>
                        </li>
                        <li>
                            <p>(b) In the case of an accident involving the Vehicle during the test drive where the Customer is at fault, the Customer shall be responsible for paying the excess amount owed under the insurance policy.</p>
                        </li>
                        <li>
                            <p>(c) If the Customer is under the age of 25, an additional 10% of the accident repair charges will apply.</p>
                        </li>
                    </ul>
                </div>

                <br />

                <div>
                    <h2>Use</h2>
                    <p>
                        The Vehicle is provided for demonstration and evaluation purposes under standard driving conditions. Customers may only operate the Vehicle on public roads and must not use it for hire or reward, rallying, motorsports, or take it off-road unless authorized by the Company.
                    </p>
                </div>

            </Modal>
        </>
    )
}

export default TermsModal



