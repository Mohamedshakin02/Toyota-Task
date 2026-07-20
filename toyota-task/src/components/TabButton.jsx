import React from "react";

function TabButton({
    label,
    active = false,
    onClick,
    className = "",
    showIcon = true
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                rounded-lg
                flex items-center
                transition
                ${
                    active
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-black"
                }
                ${className}
            `}
        >
            {active && showIcon && (
                <i className="bi bi-check2 mr-2"></i>
            )}

            {label}
        </button>
    );
}

export default TabButton;