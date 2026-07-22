import React from 'react'
import document from "../assets/document.png";
import { Link } from 'react-router-dom';
import Button from "./Button"
import CarCard_2 from "./CarCard_2";
import LicenseCard from "./LicenceCard";
import LicenseContainer from "./LicenseContainer";
import WaiverCard from "./WaiverCard";

import uae from "../assets/uae flag.png";
import car from "../assets/cars/car 15.png";
import EmiratesFront2 from "../assets/Emirates-front2.png";
import EmiratesBack from "../assets/Emirates-back.png";
import FormQuestion from "./FormQuestion";

function LicenseError() {
    return (

        <>
            <div className='container px-4 lg:px-36 mx-auto mt-12 lg:mt-15'>
                <div className='w-full p-4 bg-red-100 border-2 border-red-500 flex items-center gap-4 rounded-sm'>
                    <div><i className="bi bi-exclamation-circle text-red-500 text-xl"></i></div>
                    <div className='text-red-500 flex flex-col gap-0.5'>
                        <h1 className='font-semibold'>Something went wrong</h1>
                        <p>We're having trouble connecting. Your details are saved locally; we will retry automatically.</p>
                    </div>
                </div>

            </div>

            <section className='container px-4 lg:px-36 mx-auto mt-12 lg:mt-15'>
                <div className="flex flex-col text-center lg:text-left gap-3">
                    <h1 className="text-3xl lg:text-4xl">
                        Hi Ahmed,
                    </h1>
                    <p className='text-lg'>Please upload clear photos of both the front and back of your valid driver's license.</p>
                </div>

                <div className='mb-10'>
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-y-7 lg:gap-x-10 items-stretch">


                        <div className='col-span-2 lg:col-span-1 order-1 flex flex-col'>

                            <FormQuestion
                                question="Upload your driver's license"
                                size='lg'
                                weight='medium'
                                className='mb-3!'
                                required
                            />


                            <LicenseContainer status="verified" preserveHeight>
                                <LicenseCard
                                    state="verified"
                                    image={EmiratesFront2}
                                    fileName="Front.JPG (2MB)"
                                    borderColor="border-green-500"
                                    showRemove
                                    showCheck
                                />

                                <LicenseCard
                                    state="verified"
                                    image={EmiratesBack}
                                    fileName="Back.JPG (2MB)"
                                    borderColor="border-green-500"
                                    showRemove
                                    showCheck
                                />
                            </LicenseContainer>
                        </div>

                        <div className='col-span-2 lg:col-span-1 order-1 flex flex-col'>

                            <FormQuestion
                                question="Sign the waiver"
                                size='lg'
                                weight='medium'
                                className='mb-3!'
                                required
                            />

                            <WaiverCard
                                state="accepted"
                                image={document}
                            />

                        </div>

                    </div>
                </div>

                <div className='col-span-2 flex justify-end'>
                    <Button
                        label="Submit"
                        variant="primary"
                        width="auto"
                        size="md"
                        className="lg:py-3"
                    />
                </div>

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

        </>
    )
}

export default LicenseError