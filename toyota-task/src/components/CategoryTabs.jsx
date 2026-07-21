import React from "react";

function CategoryTabs({
    options,
    selected,
    setSelected,
    className = ""
}) {
    return (
        <ul className={`flex items-center gap-5 font-medium ${className}`}>
            {options.map((option) => (
                <li
                    key={option}
                    className={`border-b-[3px] ${
                        selected === option
                            ? "border-red-600 px-2"
                            : "border-transparent"
                    }`}
                >
                    <button
                        type="button"
                        onClick={() => setSelected(option)}
                        className={`cursor-pointer ${
                            selected === option
                                ? "text-red-600"
                                : "text-gray-400"
                        }`}
                    >
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default CategoryTabs;