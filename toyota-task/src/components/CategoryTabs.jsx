import React from "react";
import { Link } from "react-router-dom";

function CategoryTabs({ categories }) {
    return (
        <ul className="flex items-center gap-5 text-xl lg:text-base font-medium">
            {categories.map((category) => (
                <li
                    key={category.name}
                    className={`justify-center border-b-[3px] ${
                        category.active
                            ? "border-red-600 px-2"
                            : "border-transparent"
                    }`}
                >
                    <Link
                        to=""
                        className={`flex items-center ${
                            category.active
                                ? "text-red-600"
                                : "text-gray-400"
                        }`}
                    >
                        {category.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default CategoryTabs;