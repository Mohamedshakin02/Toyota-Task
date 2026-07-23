import React from "react";
import PropTypes from "prop-types";


function Button({
    label,
    children,
    type = "button",
    onClick,
    variant = "primary",
    size = "md",
    width = "auto",
    rounded = "none",
    showArrow = false,
    className = ""
}) {

    const variants = {
        primary: "bg-red-600 text-white",
        secondary: "bg-gray-400 text-white",
        outline: "border-2 border-red-600 text-red-600 bg-transparent"
    };

    const sizes = {
        sm: "py-2 px-4",
        md: "py-3 px-7 lg:py-2 lg:px-7",
        lg: "py-3 px-7",
        wide: "py-3 px-0"
    };

    const widths = {
        auto: "lg:w-auto w-full",
        full: "w-full",
        quarter: "w-full lg:w-1/4"
    };

    const radius = {
        none: "",
        md: "rounded-md",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                ${variants[variant]}
                ${sizes[size]}
                ${widths[width]}
                ${radius[rounded]}
                flex items-center justify-center
                ${className}
            `}
        >
            {children || label}

            {showArrow && (
                <i className="bi bi-arrow-right-short ml-2 hidden lg:inline-block text-2xl"></i>
            )}
        </button>
    );
}

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "wide"]),
  width: PropTypes.oneOf(["auto", "full", "quarter"]),
  rounded: PropTypes.oneOf(["none", "md"]),
  showArrow: PropTypes.bool,
  className: PropTypes.string,
};