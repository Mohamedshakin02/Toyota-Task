import React from 'react'
import { useState } from 'react'
import car from "../assets/cars/car 15.png";
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


function Details() {
    const [isArabicRequested, setIsArabicRequested] = useState(false);
    const [isSecondModelRequested, setIsSecondModelRequested] = useState(false);
    const [selectedModel, setSelectedModel] = useState("");

    const showDropdown = isSecondModelRequested && !isArabicRequested;
    const showError = showDropdown && selectedModel === "";

    return (

        <section className='container px-4 pr-0 lg:px-36 mx-auto mt-12 lg:mt-15'>
            <div className="flex items-center gap-3">
                <i className="bi bi-arrow-left-short text-4xl lg:text-3xl"></i>
                <h1 className="text-3xl lg:text-2xl font-bold">
                    Confim Details
                </h1>
            </div>

            <div className='my-10 mb-5 lg:mb-15'>
                <form action="">
                    <div className='grid grid-cols-1 lg:grid-cols-3 mb-10 gap-y-7 lg:gap-x-7'>
                        <div className='col-span-1 flex lg:flex-col bg-gray-200 rounded-lg border border-gray-400 mr-4 lg:mr-0 pb-3'>

                            <div className='flex lg:justify-center flex-1 pl-5 lg:pl-0'>
                                <img
                                    src={car}
                                    alt="LAND CRUISER HYBRID 2026"
                                    className="lg:w-4/6 lg:h-auto object-contain"
                                />
                            </div>

                            <div className='p-4 flex-1 md:flex-2'>
                                <p className='font-normal text-xl lg:text-lg text-gray-700 lg:text-black uppercase mb-1 lg:mb-0'>Land Cruiser Hyrbid 2026</p>
                                <Link to="" className="text-red-600 underline">Change</Link>
                            </div>
                        </div>

                        <div className="col-span-2">
                            <div>
                                <h1 className='font-medium text-lg mb-5'>How do you plan to purchase?<span className='text-red-600 '>*</span></h1>

                                <Swiper
                                    slidesPerView="auto"
                                    spaceBetween={20}
                                    freeMode
                                    modules={[FreeMode]}
                                >
                                    <SwiperSlide className='!w-auto'>
                                        <button className='bg-gray-200 text-base p-1 px-4 rounded-lg'>
                                            Cash
                                        </button>
                                    </SwiperSlide>

                                    <SwiperSlide className='!w-auto'>
                                        <button className='bg-red-600 text-base text-white p-1 px-4 rounded-lg'>
                                            <i className="bi bi-check2 text-white mr-2"></i>
                                            Finance
                                        </button>
                                    </SwiperSlide>

                                    <SwiperSlide className='!w-auto'>
                                        <button className='bg-gray-200 text-base p-1 px-4 rounded-lg'>
                                            Not Decided
                                        </button>
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            <div className='mt-8'>
                                <h1 className='font-medium text-lg mb-5'>When are you planning to buy?<span className='text-red-600 '>*</span></h1>

                                <Swiper
                                    slidesPerView="auto"
                                    spaceBetween={20}
                                    freeMode
                                    grabCursor
                                    modules={[FreeMode]}
                                >
                                    <SwiperSlide className="!w-auto">
                                        <button className="bg-gray-200 text-base p-1 px-4 rounded-lg">
                                            Within 30 days
                                        </button>
                                    </SwiperSlide>

                                    <SwiperSlide className="!w-auto">
                                        <button className="bg-red-600 text-base text-white p-1 px-4 rounded-lg">
                                            <i className="bi bi-check2 text-white mr-2"></i>
                                            Within 60 days
                                        </button>
                                    </SwiperSlide>

                                    <SwiperSlide className="!w-auto">
                                        <button className="bg-gray-200 text-base p-1 px-4 rounded-lg">
                                            Within 90 days
                                        </button>
                                    </SwiperSlide>

                                    <SwiperSlide className="!w-auto">
                                        <button className="bg-gray-200 text-base p-1 px-4 rounded-lg">
                                            Just exploring
                                        </button>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-2xl lg:text-xl font-bold">
                            Personal details
                        </h1>
                    </div>

                    <div className='pr-4'>
                        <h1 className='mt-5 font-medium text-lg mb-5'>Title<span className='text-red-600 '>*</span></h1>

                        <div className='flex gap-3'>

                            <div className=''>
                                <button className='bg-red-600 text-base text-white p-2 px-3 rounded-lg'>
                                    Mr.
                                </button>
                            </div>

                            <div className=''>
                                <button className='bg-gray-200 text-base p-2 px-3 rounded-lg'>
                                    Mrs.
                                </button>
                            </div>

                            <div className=''>
                                <button className='bg-gray-200 text-base p-2 px-3 rounded-lg'>
                                    Ms.
                                </button>
                            </div>
                        </div>


                        <div className='flex flex-col lg:flex-row  mt-5 gap-5'>
                            <div className='flex-1'>


                                <div className='border-gray-400 border-2 rounded-lg p-1 px-2'>
                                    <div>
                                        <p className='text-xs text-gray-500'>First name</p>
                                    </div>
                                    <input type="text" defaultValue={"Ahmed"} className='w-full outline-none focus:outline-none' />
                                </div>
                            </div>

                            <div className='flex-1'>

                                <div className='border-gray-400 border-2 rounded-lg p-1 px-2'>
                                    <div>
                                        <p className='text-xs text-gray-500'>Last name</p>
                                    </div>
                                    <input type="text" defaultValue={"Ahmed"} className='w-full outline-none focus:outline-none' />
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col lg:flex-row mt-5 gap-5 items-stretch">

                            {/* Email */}
                            <div className="flex-1">
                                <div className="border-gray-400 border-2 rounded-lg p-1 px-2 h-full">
                                    <p className="text-xs text-gray-500">
                                        Enter email address
                                    </p>

                                    <input
                                        type="text"
                                        defaultValue="ahmad@example.com"
                                        className="w-full outline-none focus:outline-none"
                                    />
                                </div>
                            </div>


                            {/* Mobile */}
                            <div className="flex-1">
                                <div className="bg-gray-200 border-gray-400 border-2 rounded-lg flex items-center h-full pr-3">

                                    <div className="flex items-center gap-2 px-3">
                                        <img
                                            src={uae}
                                            alt="UAE Flag"
                                            className="w-6 h-auto rounded-full"
                                        />
                                        <p className="text-base font-normal">
                                            +971
                                        </p>
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Mobile Number*"
                                        className="flex-1 p-2 border-l border-gray-400 outline-none focus:outline-none"
                                    />

                                    <div className='text-green-600 text-sm'>
                                        <p>Verified</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className='flex justify-end mt-2 text-sm underline'>
                            <p>Change number</p>
                        </div>



                    </div>

                    <div className='pr-4'>
                        <hr className="my-7 border-gray-400" />
                    </div>


                    <div className='flex flex-col lg:flex-row gap-7 pr-4'>

                        <div className='flex-1'>
                            <h1 className='font-medium text-lg mb-5'>Contact prefrences<span className='text-red-600 '>*</span></h1>

                            <div className='flex gap-3'>
                                <div className=''>
                                    <button className='bg-gray-200 text-base p-1 px-4 rounded-lg'>
                                        WhatsApp
                                    </button>
                                </div>

                                <div className=''>
                                    <button className='bg-red-600 text-white text-base p-1 px-4 rounded-lg'>
                                        <i className="bi bi-check2 text-white mr-2"></i>
                                        Email
                                    </button>
                                </div>
                            </div>

                            <p className='mt-5 text-gray-500 text-sm'>Your preferred channels for booking confirmations and reminders. You can select both options.</p>

                        </div>


                        <div className='flex-1 flex-col lg:flex-row'>
                            <h1 className='font-medium text-lg mb-5'>
                                Questions for our team <span className='text-sm text-gray-500 font-normal'>(optional)</span>
                                <span className='text-red-600 '>*</span>
                            </h1>

                            <div className='flex gap-3 flex-col lg:flex-row'>

                                {/* Arabic-speaking assistant button */}
                                <div className=''>
                                    <button
                                        type="button"
                                        onClick={() => setIsArabicRequested(!isArabicRequested)}
                                        className={`text-base p-1 px-4 rounded-lg transition flex items-center ${isArabicRequested ? 'bg-red-600 text-white' : 'bg-gray-200 text-black'
                                            }`}
                                    >
                                        {isArabicRequested && (
                                            <i className="bi bi-check2 text-white mr-2"></i>
                                        )}
                                        Request Arabic-speaking assistant
                                    </button>
                                </div>

                                {/* Second model button */}
                                <div className=''>
                                    <button
                                        type="button"
                                        onClick={() => setIsSecondModelRequested(!isSecondModelRequested)}
                                        className={`text-base p-1 px-4 rounded-lg transition flex items-center ${isSecondModelRequested ? 'bg-red-600 text-white' : 'bg-gray-200 text-black'
                                            }`}
                                    >
                                        {isSecondModelRequested && (
                                            <i className="bi bi-check2 text-white mr-2"></i>
                                        )}
                                        Request a second model
                                    </button>
                                </div>

                            </div>

                            {/* Conditionally render the select container */}
                            {showDropdown && (
                                <div className="mt-5">
                                    <div className="relative">
                                        <select
                                            className={`w-full appearance-none rounded-lg border-2 border-gray-400 bg-white p-2 pr-10 outline-none ${selectedModel ? "text-black" : "text-gray-500"}`}
                                            value={selectedModel}
                                            onChange={(e) => setSelectedModel(e.target.value)}
                                        >
                                            
                                            <option value="" disabled>
                                                Select a model
                                            </option>
                                            <option value="LX600" className='text-black'>LX600</option>
                                        </select>

                                        <i className="bi bi-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"></i>
                                    </div>

                                    {/* Conditionally render error text */}
                                    {showError && (
                                        <p className="mt-2 text-sm text-red-500">
                                            Model is required
                                        </p>
                                    )}
                                </div>
                            )}

                            <div className='mt-5'>
                                <textarea className='w-full border-gray-400 border-2 rounded-lg p-2 resize-none' placeholder='Type your question...'></textarea>
                            </div>

                            <div className='flex justify-end mt-2 text-sm text-gray-500'>
                                <p>0/280</p>
                            </div>
                        </div>


                    </div>



                    <div className='pr-4'>
                        <hr className="my-7 border-gray-400" />
                    </div>

                    <div className='flex flex-col lg:flex-row lg:items-center justify-between mb pr-4'>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-1"
                                    type="checkbox"
                                    className="w-4 h-4 accent-green-600"
                                />

                                <label
                                    htmlFor="checkbox-1"
                                    className="select-none ms-2 text-sm text-black"
                                >
                                    I consent to receive <span className='text-red-600 underline'>Marketing offers</span> and information
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    id="checkbox-2"
                                    type="checkbox"
                                    className="w-4 h-4 accent-green-600"
                                    checked
                                />

                                <label
                                    htmlFor="checkbox-2"
                                    className="select-none ms-2 text-sm text-black"
                                >
                                    I have read and agree to the <span className='text-red-600 underline'>Terms & conditions</span>
                                </label>
                            </div>
                        </div>

                        <div className='mt-10 lg:mt-0'>
                            <button className='w-full lg:w-auto py-3 px-7 lg:py-2 lg:px-7  bg-gray-400 text-white'>
                                Next <i className="bi bi-arrow-right-short hidden lg:inline-block"></i>
                            </button>
                        </div>
                    </div>


                </form>
            </div>
        </section>
    )
}

export default Details