import React from 'react';
import { Link } from 'react-router-dom'
import facebook from "../assets/social media/facebook.svg";
import instagram from "../assets/social media/instagram.svg";
import linkedin from "../assets/social media/linkedin.svg";
import youtube from "../assets/social media/youtube.svg";
import toyota from "../assets/toyota logo-2.svg";
import alfuttaim from "../assets/al-futtaim-motors-logo.svg";

function Footer() {

    const socialLinks = [
        { icon: facebook, alt: "Facebook" },
        { icon: instagram, alt: "Instagram" },
        { icon: linkedin, alt: "LinkedIn" },
        { icon: youtube, alt: "YouTube" },
    ];

    const footerSections = [
        {
            title: "Buy",
            links: ["Models", "Pre-owned", "Offers", "Virtual Showroom"],
        },
        {
            title: "Owners",
            links: [
                "Book a service",
                "Service Plan & Products",
                "Owners manual",
                "Body and Paint",
            ],
        },
        {
            title: "Contact us",
            links: ["Our Locations", "Phone: 800TOYOTA"],
        },
        {
            title: "World of Toyota",
            links: ["Toyota News", "Motorsports"],
        },
    ];

    const bottomLinks = [
        "Privacy Policy",
        "Terms and Conditions",
        "Cookie Policy",
        "Sitemap",
    ];

    const brandLogos = [
        { logo: toyota, alt: "Toyota Logo" },
        { logo: alfuttaim, alt: "Al-Futtaim Logo" },
    ];


    return (

        <footer className="bg-black hidden lg:block">
            <div className="container px-4 lg:px-36 mx-auto text-white py-10">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">

                    <ul className="flex gap-10">
                        {socialLinks.map((social) => (
                            <li key={social.alt}>
                                <Link to="">
                                    <img
                                        src={social.icon}
                                        alt={social.alt}
                                        className="h-7 w-auto"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col lg:flex-row items-center gap-3 cursor-pointer">
                        <i className="bi bi-arrow-up-short text-4xl"></i>
                        <p className="font-bold">Back to top</p>
                    </div>

                </div>

                {/* Footer Links */}
                <div className="grid lg:grid-cols-4 gap-10 lg:gap-20 mt-10 mr-20">
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h1 className="text-base font-bold mb-8">
                                {section.title}
                            </h1>

                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <Link to="">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <hr className="my-10 border-gray-500" />

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 mt-10">

                    <div className="flex items-center gap-5 text-xs font-bold text-gray-400">

                        <p>© Al-Futtaim 2025. All rights reserved.</p>

                        <ul className="flex items-center gap-5">
                            {bottomLinks.map((link) => (
                                <li key={link}>
                                    <Link to="">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <ul className="flex items-center divide-x divide-gray-400">
                        {brandLogos.map((brand, index) => (
                            <li
                                key={brand.alt}
                                className={index === 0 ? "pr-10" : "pl-10"}
                            >
                                <Link to="">
                                    <img
                                        src={brand.logo}
                                        alt={brand.alt}
                                        className="h-5 w-auto"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
        </footer>
    )
}

export default Footer