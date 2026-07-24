import React from "react";
import PropTypes from "prop-types";

function DetailsHeading({
    title,
    description,
    align = "left", // left | center
    className = "",
    titleClassName = "",
    descriptionClassName = "",
}) {
    return (
        <div
            className={`
                flex flex-col gap-3
                ${align === "center"
                    ? "text-center"
                    : "text-center lg:text-left"}
                ${className}
            `}
        >
            <h1
                className={`
                    text-3xl lg:text-4xl
                    ${titleClassName}
                `}
            >
                {title}
            </h1>

            <p
                className={`
                    text-lg
                    ${descriptionClassName}
                `}
            >
                {description}
            </p>
        </div>
    );
}

DetailsHeading.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["left", "center"]),
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string,
};

export default DetailsHeading;