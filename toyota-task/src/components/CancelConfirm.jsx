import React from 'react'
import document from "../assets/document.png";
import { Link } from 'react-router-dom';
import CarCard_2 from "./CarCard_2";

import uae from "../assets/uae flag.png";
import car from "../assets/cars/car 15.png";
import EmiratesFront2 from "../assets/Emirates-front2.png";
import EmiratesBack from "../assets/Emirates-back.png";

import Button from "./Button"

function CancelConfirm() {
    return (

        <>

            <div className='container px-4 lg:px-36 mx-auto mt-12 lg:mt-15'>
                <div className='w-full p-4 bg-red-100 border-2 border-red-500 flex items-center gap-4 rounded-sm'>
                    <div><i className="bi bi-exclamation-circle text-red-500 text-xl"></i></div>
                    <div className='text-red-500 flex flex-col gap-0.5'>
                        <h1 className='font-semibold'>Your booking has been cancelled</h1>
                        <p>We look forward to seeing you behind the wheel another time.</p>
                    </div>
                </div>

            </div>

            <section className='container px-4 lg:px-36 mx-auto'>

                <CarCard_2
                    layout="row"
                    car={car}
                    date="Tuesday, 12 March 2026 - 08:30 AM"
                    vehicle="Land Cruiser 2026"
                    showroom="Toyota Abu Dhabi Airport Road"
                    className="mt-12 mb-12"
                    imageContainerClassName="2xl:-mt-3 lg:pb-5"
                    imageClassName="lg:h-fit"
                    dateClassName="font-bold text-2xl lg:text-4xl text-black mb-6"
                    valueClassName="text-lg"
                    contentPadding="p-6"
                >

                    <Link to="" className="text-red-600 underline">
                        <i className="bi bi-send-fill mr-3"></i>Get Directions
                    </Link>
                </CarCard_2>

                <div className='mt-9 mb-15 col-span-2 flex flex-col-reverse lg:flex-row justify-center gap-5'>
                    <Button
                        label="Return to Toyota.ae"
                        variant="outline"
                        width="quarter"
                        size="wide"
                        className="text-lg"
                    />

                    <Button
                        label="Make a new booking"
                        variant="primary"
                        width="quarter"
                        size="wide"
                        className="text-lg"
                    />
                </div>




            </section>

        </>


    )
}

export default CancelConfirm