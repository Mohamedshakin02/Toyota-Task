import React from "react";

function CheckBox({
    id,
    checked = false,
    onChange,
    children,
    inputClassName = ""
}) {
    return (
        <div className="flex items-center">
            <input
                id={id}
                type="checkbox"
                defaultChecked={checked}
                onChange={onChange}
                className={`w-4 h-4 accent-green-600 ${inputClassName}`}
            />

            <label
                htmlFor={id}
                className="select-none ms-2 text-sm text-black"
            >
                {children}
            </label>
        </div>
    );
}

export default CheckBox;