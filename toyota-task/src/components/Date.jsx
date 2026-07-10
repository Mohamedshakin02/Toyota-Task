import React from 'react'
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

function Date() {
    const [date, setDate] = useState(
        today(getLocalTimeZone())
    );

    const categories = [
        { name: "Morning", active: true },
        { name: "Afternoon" },
        { name: "Evening" },
    ];

    return (
        <section className='container px-4 pr-0 lg:px-36 mx-auto my-12 lg:my-15'>
            <div className="flex items-center gap-3">
                <i className="bi bi-arrow-left-short text-4xl lg:text-3xl"></i>
                <h1 className="text-3xl lg:text-2xl font-bold">
                    Location & Date
                </h1>
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
                                <div className='inline-block lg:hidden absolute bottom-[calc(100%-1px)] right-3 bg-black text-white px-4 py-1.5 rounded-t-xl text-sm'>
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
                                <i class="bi bi-check2 text-white mr-2"></i>
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
                            Next <i class="bi bi-arrow-right-short hidden lg:inline-block"></i>
                        </button>
                    </div>

                </div>

            </div>




        </section>
    )
}

export default Date