import React from 'react'
import car from "../assets/cars/car 15.png";
import { Link } from 'react-router-dom';

import uae from "../assets/uae flag.png";

function Thanks() {
    return (
        <section className='container px-4 lg:px-36 mx-auto mt-12 lg:mt-15'>
            <div className="flex items-center gap-3">
                <h1 className="text-3xl lg:text-2xl font-bold">
                    Thank you for request test drive
                </h1>
            </div>

            <div className='my-10 mb-5 lg:mb-15'>
                <div className='grid grid-cols-1 lg:grid-cols-2 mb-10 gap-y-7 lg:gap-x-7'>

                    <div className='col-span-2 lg:col-span-1 order-1 flex flex-col rounded-lg border-dashed border-2 border-gray-400'>

                        <div className="flex justify-center 2xl:-mt-3">
                            <img
                                src={car}
                                alt="LAND CRUISER HYBRID 2026"
                                className="w-4/6 h-auto lg:h-fit"
                            />
                        </div>

                        <div className='p-4'>
                            <p className='font-bold text-2xl lg:text-xl text-black mb-3'>Tuesday, 12 March 2026 - 08:30 AM</p>

                            <div className='mb-3'>
                                <p className='text-sm text-gray-600'>Vehicle</p>
                                <p>Land Cruiser 2026</p>
                            </div>

                            <div className='flex flex-col lg:flex-row justify-between lg:items-end gap-y-3 lg:gap-y-0'>
                                <div>
                                    <p className='text-sm text-gray-600'>Showroom</p>
                                    <p>Toyota Abu Dhabi Airport Road</p>
                                </div>

                                <div>
                                    <Link to="" className="text-red-600 underline"><i className="bi bi-send-fill mr-3 text-sm"></i>Get Directions</Link>
                                </div>


                            </div>



                        </div>
                    </div>

                    <div className="col-span-2 lg:col-span-1 order-3 lg:order-2 flex flex-col gap-y-7">
                        <div className='rounded-lg border-2 border-gray-300 p-4'>
                            <h1 className='font-medium text-lg mb-3'>What's Next?</h1>

                            <ul className='text-bas space-y-2'>
                                <li className='flex lg:items-center'>
                                    <i className="bi bi-circle-fill text-xs pr-1 mt-1 lg:mt-0 text-red-600"></i>
                                    We have sent the details of your test drive request.
                                </li>

                                <li className='flex lg:items-center'>
                                    <i className="bi bi-circle-fill text-xs pr-1 mt-1 lg:mt-0 text-red-600"></i>
                                    One of our team will be in touch shortly to confirm your booking.
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col space-y-3'>
                            <h1 className='font-medium text-xl mb-3'>Need help?</h1>

                            <div className='rounded-lg flex items-center justify-between p-4 bg-gray-200'>
                                <div className=''>
                                    <h1 className='font-semibold'>Call us</h1>
                                    <p className='underline'>800-23668677</p>
                                </div>

                                <div className=''>
                                    <i className="bi bi-telephone text-3xl text-red-600"></i>
                                </div>
                            </div>

                            <div className='rounded-lg flex items-center justify-between p-4 bg-gray-200'>
                                <div>
                                    <h1 className='font-semibold'>WhatsApp</h1>
                                    <p className='underline'>800-23668677</p>
                                </div>

                                <div>
                                    <i className="bi bi-whatsapp text-3xl text-green-500"></i>
                                </div>
                            </div>



                        </div>


                    </div>

                    <div className="col-span-2 order-2 lg:order-3 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-x-10 p-4 border-2 border-gray-300 rounded-lg">
                        <div className='flex flex-col gap-y-3'>
                            <h1 className='font-bold text-2xl lg:text-xl text-black'>Upload your driver license</h1>
                            <p className='text-lg'>Upload now for a faster check-in, or use the link we've sent via [WhatsApp/Email] to provide it later at your convenience.</p>
                        </div>
                        <div>
                            <button className='p-2 px-7 mt-5 lg:mt-0 border-2 border-red-600 text-red-600 whitespace-nowrap'>
                                Upload now
                            </button>
                        </div>
                    </div>

                    <div className='col-span-2 order-4 flex justify-end'>
                        <button className='w-full lg:w-auto py-3 px-7 lg:py-2 lg:px-7 bg-red-600 text-white'>
                            Explore Land Cruiser Hybrid
                        </button>
                    </div>

                </div>

            </div>
        </section>
    )
}


export default Thanks