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

function License() {
    return (
        <section className='container px-4 lg:px-36 mx-auto mt-12 lg:mt-15'>
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl lg:text-4xl">
                    Hi Ahmed,
                </h1>

                <p>Please upload clear photos of both the front and back of your valid driver's license.</p>
            </div>

            <div className='mb-5 lg:mb-15'>

                <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 mb-10 gap-y-7 lg:gap-x-5 items-stretch">

                    {/* Upload Driver License */}
                    <div className='col-span-2 lg:col-span-1 flex flex-col h-full'>

                        <h1 className='font-medium text-lg mb-5'>
                            Upload your driver's license
                            <span className='text-red-600'>*</span>
                        </h1>

                        {/* Upload Area */}
                        <div className='flex gap-x-5 flex-1'>

                            <div className='flex flex-col items-center justify-center rounded-lg border-dashed border-2 border-gray-400 text-gray-600 w-full h-full gap-y-4 min-h-[250px]'>
                                <i className="bi bi-plus-lg text-2xl"></i>
                                <p>Upload front</p>
                            </div>

                            <div className='flex flex-col items-center justify-center rounded-lg border-dashed border-2 border-gray-400 text-gray-600 w-full h-full gap-y-4 min-h-[250px]'>
                                <i className="bi bi-plus-lg text-2xl"></i>
                                <p>Upload back</p>
                            </div>

                        </div>

                        <div className='mt-3 text-gray-600'>
                            <p>Supported formats PDF, .JPEG, and .PNG, up to 5MB</p>
                        </div>

                    </div>

                    {/* Waiver */}
                    <div className='col-span-2 lg:col-span-1 flex flex-col h-full'>

                        <h1 className='font-medium text-lg mb-5'>
                            Sign the waiver
                            <span className='text-red-600'>*</span>
                        </h1>

                        <div className='flex gap-x-5 border-2 border-gray-400 rounded-lg flex-1'>

                            <div className='flex items-center justify-center p-4'>
                                <img
                                    src={document}
                                    alt="Waiver Document"
                                    className='object-contain'
                                />
                            </div>

                            <div className='flex flex-col items-center justify-center rounded-lg text-gray-600 w-full gap-y-5'>
                                <i className="bi bi-pencil text-4xl"></i>

                                <p className='text-xl text-center'>
                                    Click to review & accept
                                </p>
                            </div>

                        </div>

                        <div className='mt-3 invisible'>
                            <p>Supported formats PDF, .JPEG, and .PNG, up to 5MB</p>
                        </div>

                    </div>

                </div>

            </div>

            <div className='col-span-2 order-4 flex justify-end'>
                <button className='w-full lg:w-auto py-3 px-7 lg:py-3 lg:px-7  bg-gray-400 text-white'>
                    Submit
                </button>
            </div>
        </section>
    )
}

export default License