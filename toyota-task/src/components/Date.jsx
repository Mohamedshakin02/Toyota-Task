import React from 'react'
import location1 from "../assets/locations/Location 1.png";
import location2 from "../assets/locations/Location 2.png";
import location3 from "../assets/locations/Location 3.png";
import location4 from "../assets/locations/Location 4.png";
import { Link } from 'react-router-dom';
import SectionHeader from "./SectionHeader";
import SliderTabs from "../components/SliderTabs";
import Button from "./Button"
import CategoryTabs from "../components/CategoryTabs";
import TabButton from "./TabButton";
import LocationCard from "../components/LocationCard";
import FormQuestion from "./FormQuestion";

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

    const [selectedCategory, setSelectedCategory] = useState("Morning");

    const categories = [
        "Morning",
        "Afternoon",
        "Evening"
    ];

    const [selectedLocation, setSelectedLocation] = useState("Abu Dhabi");
    const locationTabs = [
        "Abu Dhabi",
        "Dubai",
        "Sharjah",
        "Umm Al Quwain",
        "Ras Al Khaimah",
        "Fujairah"
    ];

    const times = [
        "08:00 AM",
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
    ];

    const [selectedTime, setSelectedTime] = useState("09:00 AM");

    const showroomLocations = [
        {
            title: "Al Ain Service Center",
            address: "Al Ain Khalifa Bin Zayed The First St-Industrial Area - Abu Dhabi",
            image: location1,
        },
        {
            title: "Abu Dhabi Airport Road Service Center",
            address: "Al Rawdah - W69 - Abu Dhabi",
            image: location2,
            selected: true,
            lastVisited: true,
        },
        {
            title: "Abu Dhabi Madinat Zayed Service Center",
            address: "Al Falah Rd - Madinat Za'id - MZE16 - Abu Dhabi",
            image: location3,
            hiddenMobile: true,
        },
        {
            title: "Abu Dhabi, Musaffah - TheWave Service Center",
            address: "Next to Musaffah Police Station - Musaffah - M28 - Abu Dhabi",
            image: location4,
            hiddenMobile: true,
        },
    ];



    return (
        <section className='container px-4 pr-0 lg:px-36 mx-auto my-12 lg:my-15'>
            <SectionHeader title="Location & Date" />

            <div className='my-10 mb-5'>


                <div className='pr-0'>

                    <FormQuestion
                        question="Choose Location"
                        size='lg'
                        weight='bold'
                        className='mb-3! lg:mb-5'
                    />


                    <SliderTabs
                        options={locationTabs}
                        selected={selectedLocation}
                        setSelected={setSelectedLocation}
                    />

                </div>

                <div className='pr-4'>

                    <div className='mt-8 gap-5'>

                        <FormQuestion
                            question="Choose Show Room"
                            size='lg'
                            weight='bold'
                            className='mb-3! lg:mb-5'
                        />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            {showroomLocations.map((location) => (
                                <LocationCard
                                    key={location.title}
                                    {...location}
                                />
                            ))}
                        </div>
                    </div>


                </div>




            </div>

            <div className='pr-4'>

                <div className='mt-8 gap-5'>

                    <FormQuestion
                        question="Select Date"
                        size='lg'
                        weight='bold'
                        className='mb-3! lg:mb-5'
                    />

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
                    
                    <FormQuestion
                        question="Preferred Time"
                        size='lg'
                        weight='bold'
                        className='mb-3! lg:mb-5'
                    />


                    <div className="">
                        <CategoryTabs
                            options={categories}
                            selected={selectedCategory}
                            setSelected={setSelectedCategory}
                            className="text-lg lg:text-base"
                            roundedUnderline
                        />
                    </div>

                    <div className="flex flex-wrap gap-3 mt-8">
                        {times.map((time) => (
                            <TabButton
                                key={time}
                                label={time}
                                active={selectedTime === time}
                                onClick={() => setSelectedTime(time)}
                                className="text-base p-2 px-3"
                            />
                        ))}
                    </div>

                    <div className='mt-10 flex justify-end'>
                        <Button
                            label="Next"
                            variant="primary"
                            width="auto"
                            size="md"
                            showArrow
                        />
                    </div>

                </div>

            </div>




        </section>
    )
}

export default Date