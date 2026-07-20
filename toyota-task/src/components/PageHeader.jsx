import React from "react";

function PageHeader({
    title,
    showBackButton = true
}) {
    return (
        <div className="flex items-center gap-3">

            {showBackButton && (
                <i className="bi bi-arrow-left-short text-4xl lg:text-3xl"></i>
            )}

            <h1 className="text-3xl lg:text-2xl font-bold">
                {title}
            </h1>

        </div>
    );
}

export default PageHeader;