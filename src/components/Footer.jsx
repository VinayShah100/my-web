import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaGithub, FaTelegram, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // ✅ Use the new X logo

function Footer({ mode }) {
  return (
    <footer
      className={`  w-full py-8 mt-auto transition-colors duration-500 ${mode === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-white"
        }`}
    >
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 pl-20">About Us</h3>
            <p className="text-sm">
              we are provide students with the best learning experience. Our platform offers a wide range of resources and tools to help you succeed in your studies. Whether you're looking for study materials, practice tests, or expert guidance, we've got you covered.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a link="/" href="/" className="hover:text-blue-500 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="Products" className="hover:text-blue-500 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/Resume" className="hover:text-blue-500 transition-colors duration-300">
                  Resume
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-500 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4 pr-10">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.youtube.com/@IdiotEngineers"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${mode === "light" ? "bg-gray-200" : "bg-gray-700"
                  } hover:bg-red-500 transition-colors duration-300`}
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://x.com/vinayshah100"
                target="_blank"
                className={`p-2 rounded-full ${mode === "light" ? "bg-gray-200" : "bg-gray-700"
                  } hover:bg-black-500 transition-colors duration-300`}
              >
                <FaXTwitter size={20} /> {/* ✅ Updated to X logo */}
              </a>
              {/* <a
                href="#"
                target="_blank"
                className={`p-2 rounded-full ${mode === "light" ? "bg-gray-200" : "bg-gray-700"
                  } hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] transition-colors duration-300`}
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                className={`p-2 rounded-full ${mode === "light" ? "bg-gray-200" : "bg-gray-700"
                  } hover:bg-blue-500 transition-colors duration-300`}
              >
                <FaLinkedin size={20} />

              </a> */}

              <a
                href="https://t.me/+GsQtTekI2rIzYjE9"
                target="_blank"
                className={`p-2 rounded-full ${mode === "light" ? "bg-gray-200" : "bg-gray-700"
                  } hover:text-[#24A1DE] transition-colors duration-300`}
              >
                <FaTelegram size={20} />
              </a>
              <a
                href="https://github.com/VinayShah100"
                target="_blank"
                className={`p-2 rounded-full ${mode === "light" ? "bg-gray-200" : "bg-gray-700"
                  } hover:bg-black transition-colors duration-300`}
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} idiot-Engineers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;