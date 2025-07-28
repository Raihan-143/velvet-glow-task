import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 mt-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div className="navbar-start">
                        <Link to="/" className="text-xl font-bold flex items-center gap-2">
                            <img src='/Group.png' alt="Logo" className="w-8 h-8" />
                            <span className="text-2xl font-bold text-white">Velvet Glow</span>
                        </Link>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        At Northbound we specialize in aligning people strategies with
                        business goals. Whether you’re growing, restructuring, or adapting to
                        new challenges, we help ensure your organization has the right talent,
                        in the right place, at the right time.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Services</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>Our model</li>
                        <li>Talent and Workforce Strategy</li>
                        <li>Optimize your Talent processes</li>
                        <li>Interim Consultants</li>
                        <li>Advisory Services</li>
                        <li>Recruitment and Executive Search</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>Consulting Services</li>
                        <li>About us</li>
                        <li>Knowledge bank</li>
                    </ul>
                    <div className="mt-4">
                        <a
                            href="https://www.linkedin.com/in/raihanrana/"
                            target="_blank"
                            rel="noreferrer"
                             className="inline-block text-blue-500 text-3xl hover:text-blue-400 transition"
                            title="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-white mt-8 pt-4 m-15 text-white text-sm">
                2024 Copyright Benderlm | All Right Reserved
            </div>
        </footer>
    );
};

export default Footer;
