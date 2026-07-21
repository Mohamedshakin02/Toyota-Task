import React from 'react'
import document from "../assets/document.png";
import { Link } from 'react-router-dom';
import Button from "./Button";
import CarCard_2 from "./CarCard_2";

import uae from "../assets/uae flag.png";
import car from "../assets/cars/car 15.png";
import EmiratesFront2 from "../assets/Emirates-front2.png";
import EmiratesBack from "../assets/Emirates-back.png";

function RescheduleConfirm() {
    return (
        <section className='container px-4 lg:px-36 mx-auto mt-12 lg:mt-15'>
            <div className="flex flex-col items-center text-center gap-3">
                <p className=''>Testdrive number #TO1234</p>
                <h1 className="text-3xl font-bold">
                    Your test drive has been rescheduled
                </h1>
                <p className=''>We've updated your appointment details</p>
            </div>

            <div className='mt-10 w-full p-4 px-6 bg-gray-100  flex items-start gap-4 rounded-sm'>
                <div className='mt-1'><i className="bi bi-check-circle-fill text-2xl text-green-500"></i></div>
                <div className='flex flex-col gap-0.5 lg:gap-2'>
                    <h1 className='font-bold text-xl'>Confirmation sent via [WhatsApp/Email]</h1>
                    <p className='text-gray-500'>You'll receive a reminder 24 hours before your appointment.</p>
                </div>
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


            <div className="mt-12 mb-15 col-span-2 order-2 lg:order-3 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-x-10 p-4 border-2 border-gray-300 rounded-lg">
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

export default RescheduleConfirm