import React from "react";
import PropTypes from "prop-types";


function CarCard({
    car,
    vehicle,
    layout = "row",
    imageClassName = "",
    imageContainerClassName = "",
    textContainerClassName = "",
    className = "",
    children,
}) {
    const isColumn = layout === "column";

    return (
        <div
            className={`
                flex
                ${isColumn ? "lg:flex-col" : ""}
                bg-gray-200
                rounded-lg
                border
                border-gray-400
                pb-3
                ${className}
            `}
        >
            <div
                className={`
                    flex
                    flex-1
                    pl-5
                    lg:pl-0
                    lg:justify-center
                    ${imageContainerClassName}
                `}
            >
                <img
                    src={car}
                    alt={vehicle}
                    className={`
                        lg:w-4/6
                        lg:h-auto
                        object-contain
                        ${imageClassName}
                    `}
                />
            </div>

            <div
                className={`
                    flex-1
                    md:flex-2
                    p-4
                    ${!isColumn ? "flex flex-col justify-center" : ""}
                    ${textContainerClassName}
                `}
            >
                <p className="font-normal text-xl lg:text-lg text-gray-700 lg:text-black uppercase mb-1 lg:mb-0">
                    {vehicle}
                </p>

                {children}
            </div>
        </div>
    );
}

CarCard.propTypes = {
  car: PropTypes.string.isRequired,
  vehicle: PropTypes.string.isRequired,
  layout: PropTypes.oneOf(["row", "column"]),
  imageClassName: PropTypes.string,
  imageContainerClassName: PropTypes.string,
  textContainerClassName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CarCard;