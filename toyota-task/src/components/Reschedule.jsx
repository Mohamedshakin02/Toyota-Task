import React from 'react'
import document from "../assets/document.png";
import { Link } from 'react-router-dom';

import uae from "../assets/uae flag.png";
import car from "../assets/cars/car 15.png";
import EmiratesFront2 from "../assets/Emirates-front2.png";
import EmiratesBack from "../assets/Emirates-back.png";

function Reschedule() {
    return (
        <section className='container px-4 lg:px-36 mx-auto mt-12 lg:mt-15'>
            <div className="flex flex-col text-center lg:text-left gap-3">
                <h1 className="text-3xl lg:text-4xl">
                    Hi Ahmed,
                </h1>
                <p className='text-lg'>Here are the details of your test drive booking. What would you like to do next?</p>
            </div>

            <div className='mt-9 col-span-2 flex justify-center gap-5'>
                <button className='w-full lg:w-1/4 py-3 lg:py-3 border-2 border-red-500 text-red-500 text-lg'>
                    Cancel
                </button>
                <button className='w-full lg:w-1/4 py-3 lg:py-3  bg-red-500 text-white text-lg'>
                    Reshedule
                </button>
            </div>

            <div className='mt-12 flex flex-col lg:flex-row rounded-lg border-dashed border-2 border-gray-400'>


                <div className="flex justify-center 2xl:-mt-3 lg:pb-5">
                    <img
                        src={car}
                        alt="LAND CRUISER HYBRID 2026"
                        className="object-contain w-4/6 h-auto lg:h-fit"
                    />
                </div>

                <div className='p-6'>
                    <p className='font-bold text-2xl lg:text-4xl text-black mb-6'>Tuesday, 12 March 2026 - 08:30 AM</p>

                    <div className='mb-3'>
                        <p className='text-gray-600'>Vehicle</p>
                        <p className='text-lg'>Land Cruiser 2026</p>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between lg:items-end gap-y-3 lg:gap-y-0'>
                        <div>
                            <p className='text text-gray-600'>Showroom</p>
                            <p className='text-lg'>Toyota Abu Dhabi Airport Road</p>
                        </div>

                        <div>
                            <Link to="" className="text-red-600 underline"><i className="bi bi-send-fill mr-3"></i>Get Directions</Link>
                        </div>


                    </div>



                </div>
            </div>

            <div className="mt-7 lg:mt-12 mb-15 col-span-2 order-2 lg:order-3 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-x-10 p-4 border-2 border-gray-300 rounded-lg">
                <div className='flex flex-col gap-y-3'>
                    <h1 className='font-bold text-2xl lg:text-xl text-black'>Upload your driver license</h1>
                    <p className='text-lg'>Upload now for a faster check-in, or use the link we've sent via [WhatsApp/Email] to provide it later at your convenience.</p>
                </div>
                <div>
                    <button className='p-2 px-7 mt-5 lg:mt-0 border-2 border-red-600 text-red-600 whitespace-nowrap'>
                        Manage my documents
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Reschedule