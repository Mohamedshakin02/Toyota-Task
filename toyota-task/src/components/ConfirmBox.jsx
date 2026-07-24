import React from "react";
import PropTypes from "prop-types";

function ConfirmBox({
    title,
    description,
    icon = "bi-check-circle-fill",
    iconClassName = "text-green-500",
    className = "",
}) {
    return (
        <div
            className={`
                w-full
                p-4
                px-6
                bg-gray-100
                rounded-sm
                flex
                items-start
                gap-4
                ${className}
            `}
        >
            <div className="mt-1">
                <i className={`bi ${icon} text-2xl ${iconClassName}`}></i>
            </div>

            <div className="flex flex-col gap-0.5 lg:gap-2">
                <h1 className="font-bold text-xl">
                    {title}
                </h1>

                {description && (
                    <p className="text-gray-500">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}

ConfirmBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  className: PropTypes.string,
};

export default ConfirmBox;