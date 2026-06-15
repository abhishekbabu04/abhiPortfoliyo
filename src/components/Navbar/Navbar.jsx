import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);


    // change navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // scroll function
    const handleMenuItemClick = (sectionID) => {
        setActiveSection(sectionID);
        setIsOpen(false);

        const section = document.getElementById(sectionID);
        if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
    };


    const menuItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "work", label: "Work" },
        { id: "education", label: "Education" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}>
            <div className="text-white py-5 flex justify-between items-center">
                {/* logo */}
                <div className="text-2xl font-semibold cursor-pointer ">
                    <span className="text-[#8245ec]">&lt;</span>
                    <span className="text-white">Abhishek</span>
                    <span className="text-[#8245ec]">/</span>
                    <span className="text-white">Babu</span>
                    <span className="text-[#8245ec]">&gt;</span>
                </div>
                {/* dexttop menu */}
                <ul className="hidden md:flex space-x-8 text-gray-300">
                    {menuItems.map((items) => (
                        <li key={items.id} className={`cursor-pointer hover:text-[#8245ec] text-2xl ${activeSection === items.id ? "text-[#8245ec]" : ""}`}>
                            <button onClick={() => handleMenuItemClick(items.id)}>
                                {items.label}
                            </button>
                        </li>
                    ))}
                </ul>
                {/* social media icons */}
                <div className="hidden md:flex space-x-4">
                    <a
                        href="https://github.com/abhishekbabu04"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#8245ec]">
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/abhishek-babu-303439241/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#8245ec]">
                        <FaLinkedin size={20} />
                    </a>
                </div>

                {/* mobile menu icons */}
                <div className="md:hidden">
                    {isOpen ? (
                        <FiX
                            className="text-3xl text-[#8245ec] cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />
                    ) : (
                        <FiMenu
                            className="text-3xl text-[#8245ec] cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        />
                    )}
                </div>

            </div>

            {/* mobile menu items */}
            {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/abhishekbabu04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-babu-303439241/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}

        </nav>
    )
}