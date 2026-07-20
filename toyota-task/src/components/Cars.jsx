import React from 'react'
import { Link } from 'react-router-dom';
import PageHeader from "./PageHeader";
import CategoryTabs from "./CategoryTabs";

import car1 from "../assets/cars/car 1.png";
import car2 from "../assets/cars/car 2.png";
import car3 from "../assets/cars/car 3.png";
import car4 from "../assets/cars/car 4.png";
import car5 from "../assets/cars/car 5.png";
import car6 from "../assets/cars/car 6.avif";
import car7 from "../assets/cars/car 7.avif";
import car8 from "../assets/cars/car 8.png";
import car9 from "../assets/cars/car 9.png";
import car10 from "../assets/cars/car 10.png";
import car11 from "../assets/cars/car 11.png";
import car12 from "../assets/cars/car 12.png";
import car13 from "../assets/cars/car 13.png";
import car14 from "../assets/cars/car 14.png";

function Cars() {

    const categories = [
        { name: "Hybrid" },
        { name: "Sedan" },
        { name: "SUV", active: true },
        { name: "GR" },
    ];

    const cars = [
        { name: "LAND CRUISER 2026", image: car1 },
        { name: "RAIZE 2026", image: car2 },
        { name: "URBAN CRUISER 2026", image: car3 },
        { name: "VELOZ 2026", image: car4 },
        { name: "COROLLA CROSS 2026", image: car5 },
        { name: "COROLLA CROSS HYBRID 2026", image: car6 },
        { name: "RAV4 2026", image: car7 },
        { name: "RAV4 HYBRID 2026", image: car8 },
        { name: "INNOVA HYBRID 2026", image: car9 },
        { name: "FORTUNER 2026", image: car10 },
        { name: "HIGHLANDER HYBRID 2026", image: car11 },
        { name: "LAND CRUISER 70 2026", image: car12 },
        { name: "LAND CRUISER PRADO 2026", image: car13 },
    ];

    return (
        <section className='container px-4 lg:px-36 mx-auto mt-12 lg:mt-15 bg-[#F9F9F9]'>

            <PageHeader title="Select car model" />

            <div className="mt-5">
                <CategoryTabs categories={categories} />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 py-10">
                {cars.map((car) => (
                    <div
                        key={car.name}
                        className="rounded-lg p-4 py-8 lg:py-10 bg-white"
                    >
                        <div className="flex items-center justify-center mb-8">
                            <img
                                src={car.image}
                                alt={car.name}
                                className="w-full h-full object-contain scale-110 lg:scale-100"
                            />
                        </div>

                        <div className="text-center">
                            <h2 className="text-2xl lg:text-lg font-normal">{car.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Cars