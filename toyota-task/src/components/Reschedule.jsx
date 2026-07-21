import React from 'react'
import document from "../assets/document.png";
import { Link } from 'react-router-dom';
import CarCard_2 from "./CarCard_2";

import uae from "../assets/uae flag.png";
import car from "../assets/cars/car 15.png";
import EmiratesFront2 from "../assets/Emirates-front2.png";
import EmiratesBack from "../assets/Emirates-back.png";

import Button from "./Button"

function Reschedule() {
    return (
        <section className='container px-4 lg:px-36 mx-auto mt-12 lg:mt-15'>
            <div className="flex flex-col text-center lg:text-left gap-3">
                <h1 className="text-3xl lg:text-4xl">
                    Hi Ahmed,
                </h1>
                <p className='text-lg'>Here are the details of your test drive booking. What would you like to do next?</p>
            </div>

            <div className="mt-9 col-span-2 flex justify-center gap-5">

                <Button
                    label="Cancel"
                    variant="outline"
                    width="quarter"
                    size="wide"
                    className="text-lg"
                />

                <Button
                    label="Reshedule"
                    variant="primary"
                    width="quarter"
                    size="wide"
                    className="text-lg"
                />

            </div>

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


            <div className="mt-7 lg:mt-12 mb-15 col-span-2 order-2 lg:order-3 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-x-10 p-4 border-2 border-gray-300 rounded-lg">
                <div className='flex flex-col gap-y-3'>
                    <h1 className='font-bold text-2xl lg:text-xl text-black'>Upload your driver license</h1>
                    <p className='text-lg'>Upload now for a faster check-in, or use the link we've sent via [WhatsApp/Email] to provide it later at your convenience.</p>
                </div>
                <div>
                    <Button
                        variant="outline"
                        size="sm"
                        width="auto"
                        className="mt-5 lg:mt-0 w-auto! px-7 whitespace-nowrap"
                    >
                        <span className="lg:hidden">Upload now</span>
                        <span className="hidden lg:inline">Manage my documents</span>
                    </Button>
                </div>
            </div>

        </section>
    )
}

export default Reschedule