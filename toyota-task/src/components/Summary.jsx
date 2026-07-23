import React from 'react'
import { useState } from 'react'
import car from "../assets/cars/car 15.png";
import { Link, useNavigate } from 'react-router-dom';
import SectionHeader from "./SectionHeader";
import SliderTabs from "./SliderTabs";
import FormQuestion from "./FormQuestion";
import TabButton from "./TabButton";
import InputBox from "./InputBox";
import CheckBox from "./CheckBox";
import Button from "./Button";
import CarCard_2 from "./CarCard_2"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import uae from "../assets/uae flag.png";

function Summary() {
    const navigate = useNavigate();

    const [isArabicRequested, setIsArabicRequested] = useState(false);
    const [isSecondModelRequested, setIsSecondModelRequested] = useState(false);
    const [selectedModel, setSelectedModel] = useState("");

    const showDropdown = isSecondModelRequested && !isArabicRequested;
    const showError = showDropdown && selectedModel === "";

    const purchaseOptions = [
        "Cash",
        "Finance",
        "Not Decided"
    ];

    const buyTimeOptions = [
        "Within 30 days",
        "Within 60 days",
        "Within 90 days",
        "Just exploring"
    ];

    const [title, setTitle] = useState("Mr.");

    const titleOptions = [
        "Mr.",
        "Mrs.",
        "Ms."
    ];

    const [purchaseType, setPurchaseType] = useState("Finance");
    const [buyTime, setBuyTime] = useState("Within 60 days");

    const [contactPreference, setContactPreference] = useState("Email");

    const contactOptions = [
        "WhatsApp",
        "Email"
    ];

    return (
        <section className='container px-4 pr-0 lg:px-36 mx-auto mt-12 lg:mt-15'>

            <SectionHeader title="Summary" />

            <div className='my-10 mb-5 lg:mb-15'>
                <form action="">
                    <div className='grid grid-cols-1 lg:grid-cols-3 mb-8 gap-y-7 lg:gap-x-7'>

                        <CarCard_2
                            car={car}
                            date="Tuesday, 12 March 2026 - 08:30 AM"
                            vehicle="Land Cruiser 2026"
                            showroom="Toyota Abu Dhabi Airport Road"
                            showEditIcon
                            className='mr-4 lg:mr-0'
                        >
                            <Link
                                to="/reschedule"
                                className="text-red-600 underline hidden lg:inline-block"
                            >
                                Change
                            </Link>
                        </CarCard_2>

                        <div className="col-span-2">
                            <div>
                                <FormQuestion
                                    question="How do you plan to purchase?"
                                    required
                                    size='lg'
                                    weight='bold'
                                />

                                <SliderTabs
                                    options={purchaseOptions}
                                    selected={purchaseType}
                                    setSelected={setPurchaseType}
                                />
                            </div>

                            <div className='mt-8'>
                                <FormQuestion
                                    question="When are you planning to buy?"
                                    required
                                    size='lg'
                                    weight='bold'
                                />

                                <SliderTabs
                                    options={buyTimeOptions}
                                    selected={buyTime}
                                    setSelected={setBuyTime}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 mb-5 pr-4">
                        <div className="col-span-2 lg:col-span-1">
                            <FormQuestion
                                question="Any Special request"
                                size='md'
                                weight='normal'
                                className='mb-2!'
                            />

                            <textarea
                                className="w-full border-gray-400 border-2 rounded-lg p-2 resize-none"
                                placeholder="Any special requests? (optional)"
                            ></textarea>
                        </div>
                    </div>

                    <SectionHeader
                        title="Personal details"
                        size="md"
                        showBackButton={false}
                        showEditIcon
                    />

                    <div className='pr-4'>

                        <FormQuestion
                            question="Title"
                            required
                            size='md'
                            weight='medium'
                            className='my-5'
                        />

                        <div className="flex gap-3">
                            {titleOptions.map((option) => (
                                <TabButton
                                    key={option}
                                    label={option}
                                    active={title === option}
                                    onClick={() => setTitle(option)}
                                    className="p-2 px-3"
                                    showIcon={false}
                                />
                            ))}
                        </div>


                        <div className='flex flex-col lg:flex-row  mt-5 gap-5'>
                            <div className='flex-1'>


                                <InputBox
                                    label="First name"
                                    value="Ahmed"
                                    disabled
                                />
                            </div>

                            <div className='flex-1'>

                                <InputBox
                                    label="Last name"
                                    value="Ahmed"
                                    disabled
                                />
                            </div>

                        </div>

                        <div className="flex flex-col lg:flex-row mt-5 gap-5 items-stretch">

                            {/* Email */}
                            <div className="flex-1">
                                <InputBox
                                    label="Enter email address"
                                    value="ahmad@example.com"
                                    className="h-full"
                                    disabled
                                />
                            </div>


                            {/* Mobile */}
                            <div className="flex-1">
                                <div className="bg-gray-200 border-gray-400 text-gray-500 border-2 rounded-lg flex items-center h-full py-1.25 pr-3">

                                    <div className="flex items-center gap-2 px-3">
                                        <img
                                            src={uae}
                                            alt="UAE Flag"
                                            className="w-6 h-auto rounded-full"
                                        />
                                        <p className="text-base font-normal">
                                            +971
                                        </p>
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Mobile Number*"
                                        className="h-full flex-1 p-2 border-l-2 border-gray-400 outline-none focus:outline-none" disabled
                                    />

                                    <div className='text-green-600 text-sm'>
                                        <p>Verified</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className='flex justify-end mt-2 text-sm underline hidden'>
                            <p>Change number</p>
                        </div>


                    </div>

                    <div className='pr-4'>
                        <hr className="my-7 mt-9 border-gray-400" />
                    </div>


                    <div className='flex flex-col lg:flex-row lg:gap-7 pr-4'>

                        <div className='flex-1'>
                            <FormQuestion
                                question="Contact preferences"
                                required
                                weight='bold'
                            />

                            <div className="flex gap-3">

                                {contactOptions.map((option) => (
                                    <TabButton
                                        key={option}
                                        label={option}
                                        active={contactPreference === option}
                                        onClick={() => setContactPreference(option)}
                                        className="p-2 px-4"
                                    />
                                ))}

                            </div>

                            <p className='mt-5 text-gray-500 text-sm'>Your preferred channels for booking confirmations and reminders. You can select both options.</p>

                        </div>

                        <div className='pr-4 lg:hidden'>
                            <hr className="my-7 border-gray-400" />
                        </div>


                        <div className='flex-1 flex-col lg:flex-row'>
                            <FormQuestion
                                question="Questions for our team"
                                optional
                                weight='bold'
                            />

                            <div className='flex gap-3 flex-wrap'>

                                <TabButton
                                    label="Request Arabic-speaking assistant"
                                    active={isArabicRequested}
                                    onClick={() =>
                                        setIsArabicRequested(!isArabicRequested)
                                    }
                                    className="p-2 px-4"
                                />

                                <TabButton
                                    label="Request a second model"
                                    active={isSecondModelRequested}
                                    onClick={() =>
                                        setIsSecondModelRequested(!isSecondModelRequested)
                                    }
                                    className="p-2 px-4"
                                />

                            </div>

                            {showDropdown && (
                                <div className="mt-5">
                                    <div className="relative">
                                        <select
                                            className={`w-full appearance-none rounded-lg border-2 border-gray-400 bg-white p-2 pr-10 outline-none ${selectedModel ? "text-black" : "text-gray-500"
                                                }`}
                                            value={selectedModel}
                                            onChange={(e) => setSelectedModel(e.target.value)}
                                        >
                                            <option value="" disabled>
                                                Select a model
                                            </option>

                                            <option value="LX600" className='text-black'>
                                                LX600
                                            </option>
                                        </select>

                                        <i className="bi bi-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"></i>
                                    </div>

                                    {showError && (
                                        <p className="mt-2 text-sm text-red-500">
                                            Model is required
                                        </p>
                                    )}
                                </div>
                            )}

                            <div className='mt-5'>
                                <textarea className='w-full border-gray-400 border-2 rounded-lg p-2 resize-none' placeholder='Type your question...'></textarea>
                            </div>

                            <div className='flex justify-end mt-2 text-sm text-gray-500'>
                                <p>0/280</p>
                            </div>
                        </div>


                    </div>


                    <div className='pr-4 hidden lg:block'>
                        <hr className="my-7 mt-12 border-gray-400" />
                    </div>

                    <div className='flex flex-col lg:flex-row lg:items-center justify-between mt-7 lg:mt-0 pr-4'>
                        <div className="flex flex-col gap-4">
                            <CheckBox id="marketing">
                                I consent to receive{" "}
                                <span className="text-red-600 underline">
                                    Marketing offers
                                </span>{" "}
                                and information
                            </CheckBox>

                            <CheckBox
                                id="terms"
                                checked
                            >
                                I have read and agree to the{" "}
                                <span className="text-red-600 underline">
                                    Terms & conditions
                                </span>
                            </CheckBox>
                        </div>

                        <div className='mt-10 lg:mt-0'>
                            <Button
                                label="Confirm"
                                variant="primary"
                                showArrow
                                onClick={() => navigate("/thanks")}
                            />
                        </div>
                    </div>


                </form>
            </div>
        </section>
    )
}

export default Summary