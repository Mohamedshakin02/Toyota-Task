import React from "react";

function SelectButton({
    label,
    selected,
    onClick,
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`text-base p-1 px-4 rounded-lg flex items-center ${
                selected
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-black"
            }`}
        >
            {selected && (
                <i className="bi bi-check2 text-white mr-2"></i>
            )}

            {label}
        </button>
    );
}

export default SelectButton;