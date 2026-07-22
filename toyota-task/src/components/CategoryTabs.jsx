import React from "react";

function CategoryTabs({
    options,
    selected,
    setSelected,
    roundedUnderline = false,
    className = "",
}) {
    return (
        <ul className={`flex items-center gap-5 font-medium ${className}`}>
            {options.map((option) => (
                <li
                    key={option}
                    className={`
                        relative px-2
                        ${
                            selected === option
                                ? roundedUnderline
                                    ? "border-b-[3px] border-red-600 lg:border-b-0"
                                    : "border-b-[3px] border-red-600"
                                : "border-transparent"
                        }
                    `}
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

                    {selected === option && roundedUnderline && (
                        <span className="hidden lg:block absolute left-0 right-0 -bottom-[10px] h-[4px] bg-red-600 rounded-t-full" />
                    )}
                </li>
            ))}
        </ul>
    );
}

export default CategoryTabs;