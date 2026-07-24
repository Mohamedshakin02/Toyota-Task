import React from "react";
import PropTypes from "prop-types";

function DetailsHeading2({
    reference,
    title,
    description,
    className = "",
    titleClassName = "",
    descriptionClassName = "",
}) {
    return (
        <div
            className={`flex flex-col items-center text-center gap-3 ${className}`}
        >
            {reference && (
                <p>{reference}</p>
            )}

            <h1
                className={`text-3xl font-bold ${titleClassName}`}
            >
                {title}
            </h1>

            <p className={descriptionClassName}>
                {description}
            </p>
        </div>
    );
}

DetailsHeading2.propTypes = {
    reference: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    className: PropTypes.string,
    titleClassName: PropTypes.string,
    descriptionClassName: PropTypes.string,
};

export default DetailsHeading2;