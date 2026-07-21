import React from "react";

function FormQuestion({
    question,
    required = false,
    optional = false,
    size = "md",     // sm | md | lg
    weight = "medium", // normal | medium | bold
    className = "",
}) {
    const sizes = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
    };

    const weights = {
        normal: "font-normal",
        medium: "font-medium",
        bold: "font-semibold",
    };

    return (
        <h1
            className={`${sizes[size]} ${weights[weight]} mb-5 ${className}`}
        >
            {question}

            {optional && (
                <span className="text-base text-gray-500 font-normal">
                    {" "}(optional)
                </span>
            )}

            {required && (
                <span className="text-red-600">{" "}*</span>
            )}
        </h1>
    );
}

export default FormQuestion;