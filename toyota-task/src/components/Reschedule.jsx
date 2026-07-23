import React from 'react'
import document from "../assets/document.png";
import { Link } from 'react-router-dom';
import CarCard_2 from "./CarCard_2";
import DetailsHeading from "./DetailsHeading";
import UploadContainer from "./UploadContainer"
import { useNavigate } from "react-router-dom";

import uae from "../assets/uae flag.png";
import car from "../assets/cars/car 15.png";
import EmiratesFront2 from "../assets/Emirates-front2.png";
import EmiratesBack from "../assets/Emirates-back.png";

import Button from "./Button"

function Reschedule() {

    const navigate = useNavigate();

    return (
        <section className='container px-4 lg:px-36 mx-auto mt-12 lg:mt-15'>

            <DetailsHeading
                title="Hi Ahmed,"
                description="Here are the details of your test drive booking. What would you like to do next?"
            />



            <div className="mt-9 col-span-2 flex justify-center gap-5">

                <Button
                    label="Cancel"
                    variant="outline"
                    width="quarter"
                    size="wide"
                    className="text-lg"
                    onClick={() => navigate("/cancelmodal")}
                />

                <Button
                    label="Reshedule"
                    variant="primary"
                    width="quarter"
                    size="wide"
                    className="text-lg"
                    onClick={() => navigate("/rescheduledate")}
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


            <UploadContainer
                className="mt-7 lg:mt-12 mb-15 col-span-2 order-2 lg:order-3"
                title="Upload your driver license"
                description="Upload now for a faster check-in, or use the link we've sent via WhatsApp/Email to provide it later at your convenience."
                mobileButtonLabel="Upload now"
                desktopButtonLabel="Manage my documents"
                buttonSize="md"
                buttonWidth="auto"
                buttonClassName="w-auto! px-7"
                onButtonClick={() => navigate("/license")}
            />

        </section>
    )
}

export default Reschedule