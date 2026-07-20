import React from "react";

function FormQuestion({
    question,
    required = false,
    optional = false
}) {
    return (
        <h1 className="font-medium text-lg mb-5">
            {question}

            {optional && (
                <span className="text-sm text-gray-500 font-normal">
                    {" "}(optional)
                </span>
            )}

            {required && (
                <span className="text-red-600">*</span>
            )}
        </h1>
    );
}

export default FormQuestion;