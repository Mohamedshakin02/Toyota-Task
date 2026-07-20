import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import TabButton from "./TabButton";

import "swiper/css";

function SliderTabs({
    options,
    selected,
    setSelected
}) {
    return (
        <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            freeMode
            modules={[FreeMode]}
        >
            {options.map((option) => (
                <SwiperSlide
                    key={option}
                    className="!w-auto"
                >
                    <TabButton
                        label={option}
                        active={selected === option}
                        onClick={() => setSelected(option)}
                        className="p-2 px-4"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderTabs;