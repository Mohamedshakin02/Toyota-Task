import React from "react";

function InputBox({
    label,
    value = "",
    type = "text",
    placeholder = "",
    className = ""
}) {
    return (
        <div
            className={`
                border-2 border-gray-400
                rounded-lg
                p-1 px-2
                ${className}
            `}
        >
            <p className="text-xs text-gray-500">
                {label}
            </p>

            <input
                type={type}
                defaultValue={value}
                placeholder={placeholder}
                className="
                    w-full
                    outline-none
                    focus:outline-none
                "
            />
        </div>
    );
}

export default InputBox;