import React from "react";
import { Link } from 'react-router-dom'
import cart from "../assets/cart.svg";
import heart from "../assets/heart.svg";
import menu from "../assets/menu.svg";
import person from "../assets/person.svg";
import logo from "../assets/toyota logo.svg";
import phone from "../assets/phone.svg";

function Header() {
  const navItems = [
    { name: "Models", active: true },
    { name: "Pre-owned" },
    { name: "Book a service" },
    { name: "Owners" },
    { name: "Offers" },
    { name: "Motorsports" },
    { name: "عربي", mobile: true },
  ];

  const iconItems = [
    { src: phone, alt: "Phone", mobile: true },
    { src: heart, alt: "Heart" },
    { src: cart, alt: "Cart" },
    { src: person, alt: "Person" },
    { src: menu, alt: "Menu", mobile: true },
  ];

  return (
    <header className="flex justify-between items-center px-8 lg:px-16 h-18 shadow-lg lg:shadow-none bg-[#F9F9F9]">
      <div className="w-10 lg:w-18 flex justify-center items-center">
        <img
          src={logo}
          alt="Toyota Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <nav className="flex items-center gap-5 lg:gap-10 h-full">
        <ul className="flex items-center gap-10 font-medium h-full">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`
                ${
                  item.mobile ? "flex" : "hidden lg:flex"
                } justify-center
                ${
                  item.active
                    ? "border-t-4 border-red-600 h-full px-5"
                    : "border-t-4 border-transparent"
                }
              `}
            >
              <Link
                to="#"
                className={`flex items-center h-full ${
                  item.active ? "text-black" : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-5">
          {iconItems.map((icon) => (
            <li
              key={icon.alt}
              className={`${
                icon.mobile ? "flex" : "hidden lg:flex"
              } justify-center`}
            >
              <img src={icon.src} alt={icon.alt} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;