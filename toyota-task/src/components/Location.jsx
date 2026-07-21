import React from 'react'
import { useState } from "react";
import location1 from "../assets/locations/Location 1.png";
import location2 from "../assets/locations/Location 2.png";
import location3 from "../assets/locations/Location 3.png";
import location4 from "../assets/locations/Location 4.png";
import { Link } from 'react-router-dom';
import SectionHeader from "./SectionHeader";
import SliderTabs from "../components/SliderTabs";
import LocationCard from "../components/LocationCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


function Location() {

    const [selectedLocation, setSelectedLocation] = useState("Abu Dhabi");
    const locationTabs = [
        "Abu Dhabi",
        "Dubai",
        "Sharjah",
        "Umm Al Quwain",
        "Ras Al Khaimah",
        "Fujairah"
    ];

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
        },
        {
            title: "Abu Dhabi, Musaffah - TheWave Service Center",
            address: "Next to Musaffah Police Station - Musaffah - M28 - Abu Dhabi",
            image: location4,
        },
    ];


    return (
        <section className='container px-4 pr-0 lg:px-36 mx-auto mt-12 lg:mt-15'>

            <SectionHeader title="Location & Date" />

            <div className='my-10 mb-5 lg:mb-15'>


                <div className='pr-0'>
                    <h1 className='mt-5 font-medium text-lg mb-5'>Choose Location</h1>

                    <SliderTabs
                        options={locationTabs}
                        selected={selectedLocation}
                        setSelected={setSelectedLocation}
                    />

                </div>

                <div className='pr-4'>

                    <div className='mt-8 gap-5'>
                        <h1 className='mt-5 font-medium text-lg mb-5'>Choose Show Room</h1>

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



        </section>
    )
}

export default Location