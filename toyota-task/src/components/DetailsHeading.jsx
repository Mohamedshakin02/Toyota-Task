import React from "react";

function PageIntro({
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

export default PageIntro;