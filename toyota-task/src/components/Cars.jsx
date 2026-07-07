import React from 'react'
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
        { name: "Tundra", image: car14 },
    ];

    return (
        <section className='container px-4 lg:px-24 mx-auto mt-12 lg:mt-15'>
            {/* <div className='flex items-center gap-3'>
                <i class="bi bi-arrow-left-short text-3xl"></i>
                <h1 className='text-2xl font-bold'>
                    Select car model
                </h1>
            </div>

            <div className='mt-5'>
                <ul className="flex items-center gap-5 font-medium h-full">
                    <li className='border-b-3 border-transparent hidden lg:flex'><a href="" className="text-gray-600 items-center h-full flex">Hybrid</a></li>
                    <li className='border-b-3 border-transparent hidden lg:flex'><a href="" className="text-gray-600 items-center h-full flex">Sedan</a></li>
                    <li className='border-b-3 border-red-600 h-full px-2 flex justify-center'><a href="" className="text-red-600 items-center h-full flex">SUV</a></li>
                    <li className='border-b-3 border-transparent hidden lg:flex'><a href="" className="text-gray-600 items-center h-full flex">GR</a></li>
                </ul>
            </div> */}

            <div className="flex items-center gap-3">
                <i className="bi bi-arrow-left-short text-3xl"></i>
                <h1 className="text-2xl font-bold">
                    Select car model
                </h1>
            </div>

            <div className="mt-5">
                <ul className="flex items-center gap-5 font-medium">
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
                            <a
                                href="#"
                                className={`
                  flex items-center
                  ${category.active
                                        ? "text-red-600"
                                        : "text-gray-600"
                                    }
                `}
                            >
                                {category.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-15">
                {cars.map((car) => (
                    <div
                        key={car.name}
                        className="rounded-sm p-4 py-5 bg-white"
                    >
                        <div className="h-48 flex items-center justify-center">
                            <img
                                src={car.image}
                                alt={car.name}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="text-center mb-10">
                            <h2 className="text-lg font-semibold">{car.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Cars