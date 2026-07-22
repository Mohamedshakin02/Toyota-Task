import React from "react";

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

export default DetailsHeading2;