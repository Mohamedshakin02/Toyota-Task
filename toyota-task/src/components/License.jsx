import React from 'react'
import document from "../assets/document.png";
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import uae from "../assets/uae flag.png";
import car from "../assets/cars/car 15.png";

function License() {
    return (
        <section className='container px-4 lg:px-36 mx-auto mt-12 lg:mt-15'>
            <div className="flex flex-col text-center lg:text-left gap-3">
                <h1 className="text-3xl lg:text-4xl">
                    Hi Ahmed,
                </h1>
                <p className='text-lg'>Please upload clear photos of both the front and back of your valid driver's license.</p>
            </div>

            <div className='mb-5 lg:mb-10'>
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 mb-10 gap-y-7 lg:gap-x-5 items-stretch">


                    <div className='col-span-2 lg:col-span-1 order-1 flex flex-col'>
                        <div>
                            <h1 className='font-medium text-xl lg:text-lg mb-5'>Upload your driver's license<span className='text-red-600'>*</span></h1>
                        </div>

                        <div className='flex-1 flex gap-x-5'>
                            <div className='flex flex-col items-center justify-center aspect-square lg:aspect-auto rounded-lg border-dashed border-2 border-gray-400 text-gray-600 w-full gap-y-4 p-4'>
                                <div> <i className="bi bi-plus-lg text-2xl"></i> </div>
                                <div> <p>Upload back</p> </div>
                            </div>

                            <div className='flex flex-col items-center justify-center aspect-square lg:aspect-auto rounded-lg border-dashed border-2 border-gray-400 text-gray-600 w-full gap-y-4 p-4'>
                                <div> <i className="bi bi-plus-lg text-2xl"></i> </div>
                                <div> <p>Upload back</p> </div>
                            </div>
                        </div>

                        <div className='mt-3 text-sm text-gray-600'>
                            <p>Supported formats PDF, .JPEG, and .PNG, up to 5MB</p>
                        </div>
                    </div>

                    <div className='col-span-2 lg:col-span-1 order-1 flex flex-col'>
                        <div>
                            <h1 className='font-medium text-xl lg:text-lg mb-5'>Sign the waiver<span className='text-red-600'>*</span></h1>
                        </div>

                        <div className='grid grid-cols-7 border-2 border-gray-400 rounded-lg'>
                            <div className='col-span-3 flex box-border scale-90 flex-col items-center justify-center rounded-lg text-gray-600 gap-y-4'>
                                <img src={document} alt="Waiver Document" className="object-contain" />
                            </div>
                            <div className='col-span-4 flex flex-col items-center justify-center rounded-lg text-gray-600 w-full gap-y-5'>
                                <div> <i className="bi bi-pencil text-2xl lg:text-3xl"></i> </div>
                                <div className='lg:text-xl text-center'> <p>Click to review & accept</p> </div>
                            </div>
                        </div>

                        <div className='hidden lg:block mt-3 text-gray-600'>
                            <br className='text-base'></br>
                        </div>
                    </div>

                </div>
            </div>

            <div className='col-span-2 flex justify-end'>
                <button className='w-full lg:w-auto py-3 px-7 lg:py-3 lg:px-7 bg-gray-500 text-white'>
                    Submit
                </button>
            </div>

            <div className='mt-12 mb-15 flex flex-col lg:flex-row rounded-lg border-dashed border-2 border-gray-400'>


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
                            <Link to="" className="text-red-600 underline"><i class="bi bi-send-fill mr-3"></i>Get Directions</Link>
                        </div>


                    </div>



                </div>
            </div>
        </section>
    )
}

export default License