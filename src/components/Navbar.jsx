import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLightMode, MdDarkMode, MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { FaYoutube, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Navbar({ mode, setMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [notesDropdownOpen, setNotesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  // Search items with their corresponding paths
  const searchItems = [
    { name: "Home", path: "/" },
    { name: "Notes", path: "/product" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "sppu", path: "/sppu" },
    { name: "pyq", path: "/sppu" },
    { name: "web-dev", path: "/ProductCard" },
    { name: "Computer Engineering", path: "/Sppu" },
    { name: "AIML", path: "/Sppu" }
  ];

  // Notes dropdown items
  const notesItems = [
    { name: "SPPU Notes", path: "/Sppu" },
    { name: "Upcoming Features", path: "" },
    // { name: "Programming", path: "/programming-notes" },
    // { name: "Engineering", path: "/Branch" },
  ];

  // Filter items based on input
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      const filteredItems = searchItems.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredItems);
    }
  };

  // Handle suggestion click and redirect
  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion.name);
    setSuggestions([]);
    navigate(suggestion.path);
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() === "") return;

    const matchedItem = searchItems.find(item =>
      item.name.toLowerCase() === searchInput.toLowerCase()
    );

    if (matchedItem) {
      navigate(matchedItem.path);
    }
    setSearchOpen(false);
    setSuggestions([]);
  };

  // Toggle notes dropdown
  const toggleNotesDropdown = () => {
    setNotesDropdownOpen(!notesDropdownOpen);
  };

  // Toggle search bar
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setSearchInput("");
      setSuggestions([]);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 w-full flex items-center justify-center px-7 py-2 z-50 ${mode === "light" ? "bg-gray-700 text-white" : "bg-gray-900 text-white"}`}>
        <div className="overflow-hidden w-64 whitespace-nowrap animate-marquee">
          <small>Welcome to Idiot Engineers</small>
        </div>
        <div className="flex gap-3">
          <a href="https://www.youtube.com/@IdiotEngineers" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={20} />
          </a>
          <a href="https://x.com/vinayshah100" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/idiot.engineerss" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com/in/vinayshah100" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/VinayShah100" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
          <a href="https://t.me/+GsQtTekI2rIzYjE9" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={20} />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-10 w-full flex items-center justify-between px-8 py-2 z-50 transition-all ${mode === "light" ? "bg-white text-black" : "bg-black text-white"}`}>

        {/* Center - Navigation Links */}
        <li className="text-4xl list-none font-bold">
          <Link to="/">Idiot-Engineers</Link>
        </li>
        <ul className={`hidden md:flex gap-6 ${mode === "light" ? "text-black" : "text-white"}`}>
          <li className="text-lg mx-7 cursor-pointer hover:text-blue-500 transition">
            <Link to="/">Home</Link>
          </li>

          {/* Notes Dropdown */}
          <li
            className="text-lg mx-7 cursor-pointer hover:text-blue-500 transition relative"
            onMouseEnter={() => setNotesDropdownOpen(true)}
            onMouseLeave={() => setNotesDropdownOpen(false)}
          >
            <div className="flex items-center" onClick={toggleNotesDropdown}>
              <span>Notes</span>
              {notesDropdownOpen ? (
                <MdArrowDropUp size={24} className="ml-1" />
              ) : (
                <MdArrowDropDown size={24} className="ml-1" />
              )}
            </div>

            {/* Dropdown Menu */}
            {notesDropdownOpen && (
              <ul className={`absolute left-0  top-full  w-48 rounded-md shadow-lg py-1 ${mode === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}>
                {notesItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={`block px-4 py-2 text-sm ${mode === "light" ? "hover:bg-gray-100" : "hover:bg-gray-700"}`}
                      onClick={() => setNotesDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="text-lg mx-7 cursor-pointer hover:text-blue-500 transition">
            <Link to="/Resume">Resume-Template</Link>
          </li>
          <li className="text-lg mx-7 cursor-pointer hover:text-blue-500 transition">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Search Box - Now with toggle functionality */}
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* Search Icon that toggles search bar - visible on all screens */}
            <div className="md:hidden">
              <IoSearchOutline
                size={24}
                className={`cursor-pointer ${mode === "light" ? "text-black" : "text-white"}`}
                onClick={toggleSearch}
              />
            </div>

            {/* Search Bar - appears when searchOpen is true on mobile or always on desktop */}
            {(searchOpen || !isOpen) && (
              <div className={`${searchOpen ? 'absolute right-0 top-full mt-2' : 'relative'} ${!searchOpen && 'hidden md:block'}`}>
                <form onSubmit={handleSearchSubmit} className="flex">
                  <div className={`border flex items-center border-2 rounded-full p-2 transition-all ${mode === "light" ? "border-black" : "border-gray-400"}`}>
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchInput}
                      onChange={handleSearchChange}
                      className={`outline-none px-2 bg-transparent transition-all ${mode === "light" ? "text-black" : "text-white"}`}
                    />
                    <button type="submit">
                      <IoSearchOutline size={20} className={`cursor-pointer transition-all ${mode === "light" ? "text-black" : "text-white"}`} />
                    </button>
                  </div>
                </form>

                {/* Suggestions Dropdown */}
                {suggestions.length > 0 && (
                  <ul className={`absolute left-0 w-full rounded-md mt-1 max-h-40 overflow-y-auto transition-all ${mode === "light" ? "bg-white text-black shadow-lg" : "bg-gray-800 text-white shadow-gray-700"}`}>
                    {suggestions.map((item, index) => (
                      <li
                        key={index}
                        className={`p-2 cursor-pointer transition-all ${mode === "light" ? "hover:bg-gray-200" : "hover:bg-gray-700"}`}
                        onClick={() => handleSuggestionClick(item)}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          {mode === "light" ? (
            <MdDarkMode size={30} className="cursor-pointer text-black" onClick={() => setMode("dark")} />
          ) : (
            <MdLightMode size={30} className="cursor-pointer text-white" onClick={() => setMode("light")} />
          )}

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            {isOpen ? (
              <HiX size={30} className={`cursor-pointer ${mode === "light" ? "text-black" : "text-white"}`} onClick={() => setIsOpen(false)} />
            ) : (
              <HiMenu size={30} className={`cursor-pointer ${mode === "light" ? "text-black" : "text-white"}`} onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className={`absolute top-20 mt-5 left-0 w-full flex flex-col items-center z-50 ${mode === "light" ? "bg-gray-200 text-black" : "bg-gray-800 text-white"} py-4 space-y-4 md:hidden transition-all`}>
          <li className="cursor-pointer hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>
            <Link to="/">Home</Link>
          </li>

          {/* Mobile Notes Dropdown */}
          <li className="cursor-pointer hover:text-blue-500 transition w-full text-center">
            <div
              className="flex items-center justify-center"
              onClick={() => setNotesDropdownOpen(!notesDropdownOpen)}
            >
              <span>Notes</span>
              {notesDropdownOpen ? (
                <MdArrowDropUp size={24} className="ml-1" />
              ) : (
                <MdArrowDropDown size={24} className="ml-1" />
              )}
            </div>

            {/* Mobile Dropdown Items */}
            {notesDropdownOpen && (
              <ul className={`w-full mt-2 ${mode === "light" ? "bg-gray-100" : "bg-gray-700"} py-2 rounded-md`}>
                {notesItems.map((item, index) => (
                  <li key={index} className="py-1">
                    <Link
                      to={item.path}
                      className="block px-4 py-1"
                      onClick={() => {
                        setIsOpen(false);
                        setNotesDropdownOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="cursor-pointer hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>
            <Link to="/Resume">Resume-Template</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default Navbar;