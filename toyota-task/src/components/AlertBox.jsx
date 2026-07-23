import React from "react";
import PropTypes from "prop-types";


function AlertBox({
    title,
    message,
    className = "",
}) {
    return (
        <section className={`container px-4 lg:px-36 mx-auto mt-12 lg:mt-15 ${className}`}>
            <div className="w-full p-4 bg-red-100 border-2 border-red-500 rounded-sm flex items-center gap-4">
                <div>
                    <i className="bi bi-exclamation-circle text-red-500 text-xl"></i>
                </div>

                <div className="flex flex-col gap-0.5 text-red-500">
                    <h1 className="font-semibold">
                        {title}
                    </h1>

                    <p>{message}</p>
                </div>
            </div>
        </section>
    );
}

AlertBox.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    className: PropTypes.string,
};

export default AlertBox;