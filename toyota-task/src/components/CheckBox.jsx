import React from "react";
import PropTypes from "prop-types";

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

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired,
  inputClassName: PropTypes.string,
};

export default CheckBox;