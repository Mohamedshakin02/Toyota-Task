import React from 'react'
import document from "../assets/document.png";
import { Link } from 'react-router-dom';

import uae from "../assets/uae flag.png";
import car from "../assets/cars/car 15.png";
import EmiratesFront2 from "../assets/Emirates-front2.png";
import EmiratesBack from "../assets/Emirates-back.png";

function CancelConfirm() {
    return (

        <>

            <div className='container px-4 lg:px-36 mx-auto mt-12 lg:mt-15'>
                <div className='w-full p-4 bg-red-100 border-2 border-red-500 flex items-center gap-4 rounded-sm'>
                    <div><i className="bi bi-exclamation-circle text-red-500 text-xl"></i></div>
                    <div className='text-red-500 flex flex-col gap-0.5'>
                        <h1 className='font-semibold'>Your booking has been cancelled</h1>
                        <p>We look forward to seeing you behind the wheel another time.</p>
                    </div>
                </div>

            </div>

            <section className='container px-4 lg:px-36 mx-auto'>

                <div className='mt-9 flex flex-col lg:flex-row rounded-lg border-dashed border-2 border-gray-400'>

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

                <div className='mt-9 mb-15 col-span-2 flex flex-col-reverse lg:flex-row justify-center gap-5'>
                    <button className='w-full lg:w-1/4 py-3 lg:py-3 border-2 border-red-500 text-red-500 text-lg'>
                        Return to Toyota.ae
                    </button>
                    <button className='w-full lg:w-1/4 py-3 lg:py-3  bg-red-500 text-white text-lg'>
                        Make a new booking
                    </button>
                </div>




            </section>

        </>


    )
}

export default CancelConfirm