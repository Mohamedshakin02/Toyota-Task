// import React from 'react'
// import cart from "../assets/cart.svg";
// import heart from "../assets/heart.svg";
// import menu from "../assets/menu.svg";
// import person from "../assets/person.svg";
// import logo from "../assets/toyota logo.svg";
// import phone from "../assets/phone.svg";


// function Header() {
//     return (
//         <header className="flex justify-between items-center px-8 lg:px-16 h-18 ">
//             <div className="w-10 lg:w-18 lg:pt-5 flex justify-center items-center">
//                 <img src={logo} alt="Toyota Logo" className="w-full h-full object-contain" />
//             </div>

//             <nav className='flex items-center gap-5 lg:gap-10 h-full'>
//                 <ul className="flex items-center gap-10 font-medium h-full">
//                     <li className='border-t-4 border-red-600 h-full px-5 hidden lg:flex justify-center'><a href="" className="items-center h-full flex">Models</a></li>
//                     <li className='border-t-4 border-transparent hidden lg:flex'><a href="" className="text-gray-600 items-center h-full flex">Pre-owned</a></li>
//                     <li className='border-t-4 border-transparent hidden lg:flex'><a href="" className="text-gray-600 items-center h-full flex">Book a service</a></li>
//                     <li className='border-t-4 border-transparent hidden lg:flex'><a href="" className="text-gray-600 items-center h-full flex">Owners</a></li>
//                     <li className='border-t-4 border-transparent hidden lg:flex'><a href="" className="text-gray-600 items-center h-full flex">Offers</a></li>
//                     <li className='border-t-4 border-transparent hidden lg:flex'><a href="" className="text-gray-600 items-center h-full flex">Motorsports</a></li>
//                     <li className='flex justify-center'><a href="" className="text-gray-600 items-center h-full flex">عربي</a></li>
//                 </ul>

//                 <ul className="flex items-center gap-5">
//                     <li className='flex justify-center'><img src={phone} alt="Phone" /></li>
//                     <li className='hidden lg:flex justify-center'><img src={heart} alt="Heart" /></li>
//                     <li className='hidden lg:flex justify-center'><img src={cart} alt="Cart" /></li>
//                     <li className='hidden lg:flex justify-center'><img src={person} alt="Person" /></li>
//                     <li className='flex justify-center'><img src={menu} alt="Menu" /></li>
//                 </ul>

//             </nav>
//         </header>
//     )
// }

// export default Header

import React from "react";
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
    <header className="flex justify-between items-center px-8 lg:px-16 h-18 shadow-lg lg:shadow-none">
      <div className="w-10 lg:w-18 lg:pt-5 flex justify-center items-center">
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
              <a
                href="#"
                className={`flex items-center h-full ${
                  item.active ? "text-black" : "text-gray-600"
                }`}
              >
                {item.name}
              </a>
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