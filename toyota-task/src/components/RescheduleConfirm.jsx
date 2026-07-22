import React from 'react'
import document from "../assets/document.png";
import { Link } from 'react-router-dom';
import Button from "./Button";
import CarCard_2 from "./CarCard_2";
import DetailsHeading2 from "./DetailsHeading2";
import UploadContainer from "./UploadContainer"

import uae from "../assets/uae flag.png";
import car from "../assets/cars/car 15.png";
import EmiratesFront2 from "../assets/Emirates-front2.png";
import EmiratesBack from "../assets/Emirates-back.png";

function RescheduleConfirm() {
    return (
        <section className='container px-4 lg:px-36 mx-auto mt-12 lg:mt-15'>

            <DetailsHeading2
                reference="Testdrive number #TO1234"
                title="Your test drive has been rescheduled"
                description="We've updated your appointment details"
            />

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


            <UploadContainer
                className="mt-12 mb-15 col-span-2 order-2 lg:order-3"
                title="Upload your driver license"
                description="Upload now for a faster check-in, or use the link we've sent via WhatsApp/Email to provide it later at your convenience."
                mobileButtonLabel="Upload now"
                desktopButtonLabel="Manage my documents"
                buttonSize="md"
                buttonWidth="auto"
                buttonClassName="w-auto! px-7"
            />

        </section>
    )
}

export default RescheduleConfirm