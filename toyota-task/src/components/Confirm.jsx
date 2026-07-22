import React from 'react'
import document from "../assets/document.png";
import { Link } from 'react-router-dom';
import CarCard_2 from "./CarCard_2";
import DetailsHeading2 from "./DetailsHeading2";
import ConfirmBox from "./ConfirmBox"

import uae from "../assets/uae flag.png";
import car from "../assets/cars/car 15.png";
import EmiratesFront2 from "../assets/Emirates-front2.png";
import EmiratesBack from "../assets/Emirates-back.png";

function Confirm() {
    return (
        <section className='container px-4 lg:px-36 mx-auto mt-12 lg:mt-15'>

            <DetailsHeading2
                reference="Testdrive number #TO1234"
                title="Thank you!"
                description="We've received your documents"
            />

            <ConfirmBox
                className="mt-10"
                title="Confirmation sent via WhatsApp/Email"
                description="You'll receive a reminder 24 hours before your appointment."
            />


            <CarCard_2
                layout="row"
                car={car}
                date="Tuesday, 12 March 2026 - 08:30 AM"
                vehicle="Land Cruiser 2026"
                showroom="Toyota Abu Dhabi Airport Road"
                className="mt-12 mb-15"
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

        </section>
    )
}

export default Confirm