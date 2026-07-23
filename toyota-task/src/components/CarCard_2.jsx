import React from "react";
import { useNavigate } from "react-router-dom";

function CarCard_2({
    car,
    date,
    vehicle,
    showroom,
    layout = "column",
    showEditIcon = false,
    imageClassName = "",
    imageContainerClassName = "",
    className = "",
    dateClassName = "mb-3 text-2xl font-bold text-black lg:text-xl", 
    valueClassName = "", 
    contentPadding = "p-4", 
    children,
}) {
    const navigate = useNavigate();
    const isRow = layout === "row";

    return (
        <div
            className={`
                relative
                rounded-lg
                border-2 border-dashed border-gray-400
                ${isRow ? "flex flex-col lg:flex-row lg:items-start" : "flex flex-col"}
                ${className}
            `}
        >
            {showEditIcon && (
                <i className="bi bi-pencil absolute top-4 right-4 text-xl text-red-600 cursor-pointer"
                onClick={() => navigate("/reschedule")}></i>
            )}

            {/* 1. Image Container: Forces 50% width on large screens */}
            <div
                className={`
                    flex justify-center
                    ${isRow ? "lg:w-1/2" : "w-full"} 
                    ${imageContainerClassName}
                `}
            >
                <img
                    src={car}
                    alt={vehicle}
                    className={`
                        w-4/6
                        h-auto
                        object-contain
                        ${imageClassName}
                    `}
                />
            </div>

            {/* 2. Text Container: Forces 50% width on large screens */}
            <div className={`
                ${isRow ? "lg:w-1/2" : "w-full flex-1"} 
                ${contentPadding}
            `}>
                <p className={dateClassName}>
                    {date}
                </p>

                <div className="mb-3">
                    <p className="text-sm text-gray-600">Vehicle</p>
                    <p className={valueClassName}>{vehicle}</p>
                </div>

                <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-y-0">
                    <div>
                        <p className="text-sm text-gray-600">Showroom</p>
                        <p className={valueClassName}>{showroom}</p>
                    </div>

                    {children && <div>{children}</div>}
                </div>
            </div>
        </div>
    );
}

export default CarCard_2;