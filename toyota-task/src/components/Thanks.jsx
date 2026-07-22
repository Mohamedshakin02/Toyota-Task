import React from 'react'
import car from "../assets/cars/car 15.png";
import { Link } from 'react-router-dom';
import SectionHeader from "./SectionHeader";
import uae from "../assets/uae flag.png";
import Button from "./Button"
import CarCard_2 from "./CarCard_2"
import UploadContainer from "./UploadContainer"

function Thanks() {
    return (
        <section className='container px-4 lg:px-36 mx-auto mt-12 lg:mt-15'>

            <SectionHeader
                title="Thank you for request test drive"
                showBackButton={false}
            />



            <div className='my-10 mb-5 lg:mb-15'>
                <div className='grid grid-cols-1 lg:grid-cols-2 mb-10 gap-y-7 lg:gap-x-7'>

                    <CarCard_2
                        car={car}
                        date="Tuesday, 12 March 2026 - 08:30 AM"
                        vehicle="Land Cruiser 2026"
                        showroom="Toyota Abu Dhabi Airport Road"
                        className="col-span-2 lg:col-span-1 order-1"
                        imageContainerClassName="2xl:-mt-3"
                        imageClassName="lg:h-fit"
                    >
                        <Link to="" className="text-red-600 underline">
                            <i className="bi bi-send-fill mr-3 text-sm"></i>
                            Get Directions
                        </Link>
                    </CarCard_2>

                    <div className="col-span-2 lg:col-span-1 order-3 lg:order-2 flex flex-col gap-y-7">
                        <div className='rounded-lg border-2 border-gray-300 p-4'>
                            <h1 className='font-medium text-lg mb-3'>What's Next?</h1>

                            <ul className='text-bas space-y-2'>
                                <li className='flex lg:items-center'>
                                    <i className="bi bi-circle-fill text-xs pr-1 mt-1 lg:mt-0 text-red-600"></i>
                                    We have sent the details of your test drive request.
                                </li>

                                <li className='flex lg:items-center'>
                                    <i className="bi bi-circle-fill text-xs pr-1 mt-1 lg:mt-0 text-red-600"></i>
                                    One of our team will be in touch shortly to confirm your booking.
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col space-y-3'>
                            <h1 className='font-medium text-xl mb-3'>Need help?</h1>

                            <div className='rounded-lg flex items-center justify-between p-4 bg-gray-200'>
                                <div className=''>
                                    <h1 className='font-semibold'>Call us</h1>
                                    <p className='underline'>800-23668677</p>
                                </div>

                                <div className=''>
                                    <i className="bi bi-telephone text-3xl text-red-600"></i>
                                </div>
                            </div>

                            <div className='rounded-lg flex items-center justify-between p-4 bg-gray-200'>
                                <div>
                                    <h1 className='font-semibold'>WhatsApp</h1>
                                    <p className='underline'>800-23668677</p>
                                </div>

                                <div>
                                    <i className="bi bi-whatsapp text-3xl text-green-500"></i>
                                </div>
                            </div>



                        </div>


                    </div>

                    <UploadContainer
                        className="col-span-2 order-2 lg:order-3"
                        title="Upload your driver license"
                        description="Upload now for a faster check-in, or use the link we've sent via WhatsApp/Email to provide it later at your convenience."
                        buttonLabel="Upload now"
                        buttonClassName="!w-auto px-7"
                    />

                    <div className='col-span-2 order-4 flex justify-end'>
                        <Button
                            label="Explore Land Cruiser Hybrid"
                            variant="primary"
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}


export default Thanks