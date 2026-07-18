import React from 'react'
import car from "../assets/cars/car 15.png";
import uae from "../assets/uae flag.png";

import location1 from "../assets/locations/Location 1.png";
import location2 from "../assets/locations/Location 2.png";
import location3 from "../assets/locations/Location 3.png";
import location4 from "../assets/locations/Location 4.png";
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { getLocalTimeZone, today } from "@internationalized/date";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar-rac";

function RescheduleDate() {

    const [date, setDate] = useState(
        today(getLocalTimeZone())
    );

    const categories = [
        { name: "Morning", active: true },
        { name: "Afternoon" },
        { name: "Evening" },
    ];

    return (
        <section className='container px-4 pr-0 lg:px-36 mx-auto mt-12 lg:mt-15'>

            <div className="flex lg:hidden flex-col items-center text-center gap-3">
                <p className=''>Testdrive number #TO1234</p>
                <h1 className="text-3xl font-bold">
                    Reschedule
                </h1>
            </div>

            <div className='my-10 mb-5 lg:mb-15'>

                <div className='grid grid-cols-1 lg:grid-cols-3 mb-10 gap-y-7 lg:gap-x-7'>
                    <div className='col-span-1 lg:col-span-3 flex bg-gray-200 rounded-lg border border-gray-400 mr-4 lg:mr-0 pb-3'>

                        <div className='flex lg:justify-center flex-1 pl-5 lg:pl-0'>
                            <img
                                src={car}
                                alt="LAND CRUISER HYBRID 2026"
                                className="lg:w-4/6 lg:h-auto object-contain"
                            />
                        </div>

                        <div className='flex flex-col justify-center p-4 flex-1 md:flex-2'>
                            <p className='font-normal text-xl lg:text-lg text-gray-700 lg:text-black uppercase mb-1 lg:mb-0'>Land Cruiser Hyrbid 2026</p>
                            <Link to="" className="text-red-600 underline">Change</Link>
                        </div>
                    </div>


                </div>

                <div className='my-10 mb-5'>


                    <div className='pr-0'>
                        <h1 className='mt-5 font-medium text-lg mb-5'>Choose Location</h1>

                        <Swiper
                            slidesPerView="auto"
                            spaceBetween={20}
                            freeMode
                            grabCursor
                            modules={[FreeMode]}
                        >
                            <SwiperSlide className="!w-auto">
                                <button className="bg-red-600 text-base text-white p-2 px-3 rounded-lg">
                                    <i className="bi bi-check2 text-white mr-2"></i>
                                    Abu Dhabi
                                </button>
                            </SwiperSlide>

                            <SwiperSlide className="!w-auto">
                                <button className="bg-gray-200 text-base p-2 px-3 rounded-lg">
                                    Dubai
                                </button>
                            </SwiperSlide>

                            <SwiperSlide className="!w-auto">
                                <button className="bg-gray-200 text-base p-2 px-3 rounded-lg">
                                    Sharjah
                                </button>
                            </SwiperSlide>

                            <SwiperSlide className="!w-auto">
                                <button className="bg-gray-200 text-base p-2 px-3 rounded-lg">
                                    Umm Al Quwain
                                </button>
                            </SwiperSlide>

                            <SwiperSlide className="!w-auto">
                                <button className="bg-gray-200 text-base p-2 px-3 rounded-lg">
                                    Ras Al Khaimah
                                </button>
                            </SwiperSlide>

                            <SwiperSlide className="!w-auto">
                                <button className="bg-gray-200 text-base p-2 px-3 rounded-lg">
                                    Fujairah
                                </button>
                            </SwiperSlide>
                        </Swiper>

                    </div>

                    <div className='pr-4'>

                        <div className='mt-8 gap-5'>
                            <h1 className='mt-5 font-medium text-lg mb-5'>Choose Show Room</h1>

                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                <div className='bg-gray-200 rounded-2xl lg:rounded-lg p-2 flex gap-x-4'>
                                    <div className='bg-white p-3 flex-1 rounded-xl lg:rounded-lg'>
                                        <h1 className='font-medium'>Al Ain Service Center</h1>
                                        <p className='text-sm mt-2 text-gray-600'>Al Ain Khalifa Bin Zayed The First St-Inductrial Area - Abu Dhabi</p>
                                    </div>
                                    <div className='w-28 h-auto flex-shrink-0 border-3 lg:border-2 border-white rounded-xl lg:rounded-lg'>
                                        <img
                                            src={location1}
                                            alt=""
                                            className='w-full h-full object-cover rounded-lg'
                                        />
                                    </div>
                                </div>

                                <div className='relative mt-8 lg:mt-0 bg-gray-300 rounded-2xl lg:rounded-lg p-2 flex gap-x-4 border border-black'>

                                    {/* Last Visited Badge */}
                                    <div className='inline-block lg:hidden absolute bottom-[calc(100%-1px)] right-2.5 bg-black text-white px-4 py-1.5 rounded-t-xl text-sm -z-1'>
                                        Last Visited
                                    </div>

                                    {/* Text Container */}
                                    <div className='bg-white p-3 flex-1 rounded-xl lg:rounded-lg'>
                                        <h1 className='font-medium'>Abu Dhabi Airport Road Service Center</h1>
                                        <p className='text-sm mt-2 text-gray-600'>Al Rawdah - W69 - Abu Dhabi</p>
                                    </div>

                                    {/* Image Container */}
                                    <div className='w-28 h-auto flex-shrink-0 border-3 lg:border-2 border-white rounded-xl lg:rounded-lg'>
                                        <img
                                            src={location2}
                                            alt="Map location"
                                            className='w-full h-full object-cover rounded-lg'
                                        />
                                    </div>

                                </div>

                                <div className='hidden lg:flex bg-gray-200 rounded-2xl lg:rounded-lg  p-2 gap-x-4'>
                                    <div className='bg-white p-3 flex-1 rounded-xl lg:rounded-lg'>
                                        <h1 className='font-medium'>Abu Dhabi Madinat Zayed Service Center</h1>
                                        <p className='text-sm mt-2 text-gray-600'>Al Falah Rd -  Madinat Za'id - MZE16 - Abu Dhabi</p>
                                    </div>
                                    <div className='w-28 h-auto flex-shrink-0 border-3 lg:border-2 border-white rounded-xl lg:rounded-lg'>
                                        <img
                                            src={location3}
                                            alt=""
                                            className='w-full h-full object-cover rounded-lg'
                                        />
                                    </div>
                                </div>

                                <div className='hidden lg:flex bg-gray-200 rounded-2xl lg:rounded-lg  p-2 gap-x-4'>
                                    <div className='bg-white p-3 flex-1 rounded-xl lg:rounded-lg'>
                                        <h1 className='font-medium'>Abu Dhabi, Musaffah - TheWave Service Center</h1>
                                        <p className='text-sm mt-2 text-gray-600'>Next to Musaffah Police Station - Musaffah - M28 - Abu Dhabi</p>
                                    </div>
                                    <div className='w-28 h-auto flex-shrink-0 border-3 lg:border-2 border-white rounded-xl lg:rounded-lg'>
                                        <img
                                            src={location4}
                                            alt=""
                                            className='w-full h-full object-cover rounded-lg'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>




                </div>

                <div className='pr-4'>

                    <div className='mt-8 gap-5'>
                        <h1 className=' font-medium text-lg mb-5'>Select Date</h1>

                        <div>
                            <Calendar
                                className="rounded-md border bg-gray-200 p-2"
                                onChange={setDate}
                                value={date}
                                firstDayOfWeek="sun"
                                locale="en-US"
                            />

                        </div>
                    </div>

                </div>

                <div className='pr-4'>

                    <div className='mt-8 gap-5'>
                        <h1 className=' font-medium text-lg mb-5'>Preferred Time</h1>

                        <div className="mt-5">
                            <ul className="flex items-center gap-5 text-lg lg:text-small font-medium">
                                {categories.map((category) => (
                                    <li
                                        key={category.name}
                                        className={`
                                    justify-center
                                    border-b-3
                                    ${category.active
                                                ? "border-red-600 px-2"
                                                : "border-transparent"
                                            }
                                  `}
                                    >
                                        <Link
                                            to=""
                                            className={`
                                      flex items-center
                                      ${category.active
                                                    ? "text-red-600"
                                                    : "text-gray-400"
                                                }
                                    `}
                                        >
                                            {category.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='flex flex-wrap gap-3 mt-8'>
                            <div className=''>
                                <button className='bg-gray-200 text-base p-2 px-3 rounded-lg'>
                                    08:00 AM
                                </button>
                            </div>

                            <div className=''>
                                <button className='bg-red-600 text-white text-base p-2 px-3 rounded-lg'>
                                    <i className="bi bi-check2 text-white mr-2"></i>
                                    09:00 AM
                                </button>
                            </div>

                            <div className=''>
                                <button className='bg-gray-200 text-base p-2 px-3 rounded-lg'>
                                    10:00 AM
                                </button>
                            </div>

                            <div className=''>
                                <button className='bg-gray-200 text-base p-2 px-3 rounded-lg'>
                                    11:00 AM
                                </button>
                            </div>

                            <div className=''>
                                <button className='bg-gray-200 text-base p-2 px-3 rounded-lg'>
                                    12:00 PM
                                </button>
                            </div>
                        </div>

                        <div className='mt-10 flex justify-end'>
                            <button className='w-full lg:w-auto py-3 px-7 lg:py-2 lg:px-7 bg-red-600 text-white'>
                                <span className='lg:hidden'>Save Details</span>
                                <span className='hidden lg:inline'>
                                    Next <i className="bi bi-arrow-right-short"></i>
                                </span>
                            </button>
                        </div>

                    </div>

                </div>


            </div>
        </section>
    )
}

export default RescheduleDate