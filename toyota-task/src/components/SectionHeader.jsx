import React from "react";
import { useNavigate } from "react-router-dom";

function SectionHeader({
    title,
    showBackButton = true,
    showEditIcon = false,
    size = "lg", // lg | md
    className = "",
}) {
    const navigate = useNavigate();

    const titleSize = {
        lg: "text-3xl lg:text-2xl",
        md: "text-lg",
    };

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {showBackButton && (
                <i className="bi bi-arrow-left-short text-4xl lg:text-3xl cursor-pointer"
                onClick={() => navigate(-1)}></i>
            )}

            <h1
                className={`font-bold flex items-center ${titleSize[size]}`}
            >
                {title}

                {showEditIcon && (
                    <i className="bi bi-pencil ml-3 text-red-600"></i>
                )}
            </h1>
        </div>
    );
}

export default SectionHeader;