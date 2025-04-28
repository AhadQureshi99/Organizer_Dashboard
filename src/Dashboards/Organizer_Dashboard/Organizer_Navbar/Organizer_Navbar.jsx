import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { BsGear, BsChatDots, BsBell, BsBoxArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { TfiViewListAlt } from "react-icons/tfi";
import { PiHandCoinsLight } from "react-icons/pi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import logo from "./Images/logo.png"; // Import your logo here

import {
  MdOutlineEmojiEvents,
  MdOutlineEventNote,
  MdOutlineEventAvailable,
  MdOutlineCheckCircle,
  MdOutlineAutoGraph,
} from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import { GiAmericanFootballPlayer, GiAlliedStar } from "react-icons/gi";
import {
  BiSolidBookContent,
  BiUserCheck,
  BiMessageRoundedDetail,
} from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { SlBadge, SlCalender } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

const Organizer_Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showEventSubmenu, setShowEventSubmenu] = useState(false); // Added state for submenu
  const dropdownRef = useRef(null);
  const filtersRef = useRef(null); // Added missing ref for filters dropdown

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper for active nav link
  const getNavLinkClass = ({ isActive }) =>
    `flex items-center gap-3 ${isActive ? "text-[#E45252]" : "text-black"}`;

  const getSubmenuLinkClass = ({ isActive }) =>
    `flex items-center gap-2 ${isActive ? "text-[#E45252]" : "text-gray-600"}`;

  return (
    <>
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed overflow-y-scroll top-0 left-0 h-full bg-white z-[9999999] transform transition-transform duration-300 w-[90%] lg:block ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="w-[25%] flex flex-col gap-7 relative z-50 top-0 py-2 min-h-[120vh] bottom-0 bg-white px-5 max-lg:w-[100%]">
          {/* Logo */}
          <div className="p-5">
            <img src={logo} alt="Logo" className="w-24" />
          </div>

          <h1 className="text-3xl font-semibold">Welcome, Organizers</h1>
          {/* Switch Role */}
          <div className="flex items-center my-4 gap-5">
            <p className="text-sm font-semibold text-[black]">
              Switch To Player
            </p>
            <NavLink to="/Change_Role" className="flex">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="group peer bg-white rounded-full duration-300 w-16 h-6 ring-2 ring-red-500 after:duration-300 after:bg-red-500 peer-checked:after:bg-green-500 peer-checked:ring-green-500 after:rounded-full after:absolute after:h-5 after:w-5 after:top-0.5 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"></div>
              </label>
            </NavLink>
            <p className="text-xs font-semibold text-[black]">
              Switch To Organizer
            </p>
          </div>

          {/* Become Member */}
          <div>
            <button className="bg-[#1CC800] hover:bg-green-500 text-white text-[14px] px-6 py-2 mx-auto rounded-full flex items-center gap-[20px]">
              <SlBadge />
              Become Member
            </button>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-10 cursor-pointer">
            <NavLink to="/Organizer_Events" className={getNavLinkClass}>
              <MdOutlineEmojiEvents className="text-2xl" />
              <p className="text-xl font-medium">Events</p>
            </NavLink>

            <NavLink to="/Organizer" className={getNavLinkClass}>
              <VscOrganization className="text-2xl" />
              <p className="text-xl font-medium">Organizers</p>
            </NavLink>

            <NavLink to="/Players" className={getNavLinkClass}>
              <GiAmericanFootballPlayer className="text-2xl" />
              <p className="text-xl font-medium">Players</p>
            </NavLink>

            {/* Event Management with submenu */}
            <div>
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => setShowEventSubmenu(!showEventSubmenu)} // Toggle submenu
              >
                <MdOutlineEventNote className="text-2xl" />
                <div className="flex items-center gap-3">
                  <p className="text-xl font-medium">Event Management</p>
                  <IoIosArrowDown size={20} />
                </div>
              </div>

              {showEventSubmenu && (
                <div className="ml-10 mt-3 flex flex-col gap-3 text-sm">
                  <NavLink
                    to="/Create_New_Event"
                    className={getSubmenuLinkClass}
                  >
                    <MdOutlineEventAvailable />
                    <span>Create New Event</span>
                  </NavLink>
                  <NavLink
                    to="/Event_Completion"
                    className={getSubmenuLinkClass}
                  >
                    <MdOutlineCheckCircle />
                    <span>Event Completion</span>
                  </NavLink>
                  <NavLink
                    to="/Manage_Registration"
                    className={getSubmenuLinkClass}
                  >
                    <BiUserCheck />
                    <span>Manage Registrations</span>
                  </NavLink>
                  <NavLink to="/Event_Chat" className={getSubmenuLinkClass}>
                    <BiMessageRoundedDetail />
                    <span>Event Chat</span>
                  </NavLink>
                  <NavLink to="/Manage_Event" className={getSubmenuLinkClass}>
                    <SlCalender />
                    <span>Manage Event</span>
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/Financial_Management" className={getNavLinkClass}>
              <MdOutlineAutoGraph className="text-2xl" />
              <p className="text-xl font-medium">Financial Management</p>
            </NavLink>

            <NavLink to="/Ratings_And_Feedback" className={getNavLinkClass}>
              <GiAlliedStar className="text-2xl" />
              <p className="text-xl font-medium">Ratings & Feedback</p>
            </NavLink>

            <NavLink to="/Content_Management" className={getNavLinkClass}>
              <BiSolidBookContent className="text-2xl" />
              <p className="text-xl font-medium">Content Management</p>
            </NavLink>

            <NavLink to="/My_Profile" className={getNavLinkClass}>
              <CiUser className="text-2xl" />
              <p className="text-xl font-medium">My Profile</p>
            </NavLink>

            <NavLink to="/Help_Support" className={getNavLinkClass}>
              <IoHelpCircleOutline className="text-2xl" />
              <p className="text-xl font-medium">Help & Support</p>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="w-full flex items-center justify-between px-6 py-3 bg-white shadow-sm relative">
        {/* Left: Profile & Role */}
        <div className="flex items-center gap-3">
          <SlMenu
            className="text-2xl hidden max-lg:flex cursor-pointer"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Open Sidebar"
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <h1 className="font-semibold text-sm sm:text-base">
            Organizer Dashboard
          </h1>
        </div>
{/* Center: Search Bar */}
      <div className="flex items-center border rounded-full px-4 py-2 w-full max-w-xl bg-[#f9f9f9] max-lg:hidden relative" ref={dropdownRef}>
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search for players, events, or other organizers"
          className="flex-grow outline-none bg-transparent text-sm placeholder:text-gray-400"
          onClick={() => setShowDropdown(true)}
        />

        {/* Search Dropdown */}
        {showDropdown && (
          <div className="absolute top-12 left-0 bg-white border rounded-lg shadow-lg w-full z-50">
            <div className="p-4 border-b text-sm font-semibold">Search for</div>
            <ul className="text-sm">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                <FiSearch className="text-gray-500" /> For Player
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                <FiSearch className="text-gray-500" /> For Organizer
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                <FiSearch className="text-gray-500" /> For Event
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                <FiSearch className="text-gray-500" /> Advance Search
              </li>
            </ul>
          </div>
        )}

        {/* Filter Button */}
        <div
          className="flex items-center relative bg-[#E45252] text-white p-2 rounded-full ml-2 cursor-pointer"
          onClick={() => setShowFilters(true)}
        >
          <IoFilterSharp size={16} />
        </div>

        {/* Filter Form Dropdown */}
        {showFilters && (
          <div
            ref={filtersRef}
            className="absolute top-12 right-0 bg-white border rounded-lg shadow-lg w-80 z-50 p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-semibold">Filter Options</h2>
              <button onClick={() => setShowFilters(false)} className="text-xl font-bold text-gray-500">×</button>
            </div>
            <div className="space-y-3 text-sm">
                <p className='text-black text-sm font-semibold'>Name</p>
              <input type="text"  className="w-full border border-black rounded px-3 py-2" />
                <p className='text-black text-sm font-semibold'>Username</p>
              <input type="text"  className="w-full border border-black rounded px-3 py-2" />
                <p className='text-black text-sm font-semibold'>Location</p>
              <input type="text"  className="w-full border border-black rounded px-3 py-2" />
                <p className='text-black text-sm font-semibold'>Event History</p>
              <input type="text"  className="w-full border border-black rounded px-3 py-2" />
                <p className='text-black text-sm font-semibold'>Rating</p>
              <input type="text"  className="w-full border border-black rounded px-3 py-2" />
              
              <button className="w-full bg-red-500 text-white py-2 rounded mt-2">Apply</button>
            </div>
          </div>
        )}
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4 ml-4">
        <div className="p-2 border rounded-full cursor-pointer hover:bg-gray-100">
          <BsGear className="text-gray-500" />
        </div>
        <div className="p-2 border rounded-full cursor-pointer hover:bg-gray-100">
          <BsChatDots className="text-gray-500" />
        </div>
        <div className="p-2 border rounded-full cursor-pointer hover:bg-gray-100">
          <BsBell className="text-gray-500" />
        </div>
        <div className="p-2 border rounded-full cursor-pointer hover:bg-gray-100">
          <BsBoxArrowRight className="text-gray-500" />
        </div>
      </div>
    </div>
    
  {/* Mobile Search Bar */}
  <div className="hidden w-[95%] mx-auto items-center z-40 border rounded-full px-4 py-2 bg-[#ffffff] max-w-xl max-lg:flex relative" ref={dropdownRef}>
    <FiSearch className="text-gray-400 mr-2" />
    <input
      type="text"
      placeholder="Search for players, events, or other organizers"
      className="flex-grow outline-none bg-transparent text-sm placeholder:text-[.8rem] placeholder:text-gray-400"
      onClick={() => setShowDropdown(true)}
    />
    {showDropdown && (
      <div className="absolute top-12 left-0 bg-white border rounded-lg shadow-lg w-full z-50">
        <div className="p-4 border-b text-sm font-semibold">Search for</div>
        <ul className="text-sm">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
            <FiSearch className="text-gray-500" /> For Player
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
            <FiSearch className="text-gray-500" /> For Organizer
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
            <FiSearch className="text-gray-500" /> For Event
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
            <FiSearch className="text-gray-500" /> Advance Search
          </li>
        </ul>
      </div>
    )}

    {/* Filter Button */}
    <div
      className="flex items-center relative bg-[#E45252] text-white p-2 rounded-full ml-2 cursor-pointer"
      onClick={() => setShowFilters(true)}
    >
      <IoFilterSharp size={16} />
    </div>

    {/* Filter Form Dropdown */}
    {showFilters && (
      <div
        ref={filtersRef}
        className="absolute top-12 right-0 bg-white border rounded-lg shadow-lg w-80 z-50 p-4"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold">Filter Options</h2>
          <button onClick={() => setShowFilters(false)} className="text-xl font-bold text-gray-500">×</button>
        </div>
        <div className="space-y-3 text-sm">
          <p className='text-black text-sm font-semibold'>Name</p>
          <input type="text"  className="w-full border border-black rounded px-3 py-2" />
          <p className='text-black text-sm font-semibold'>Username</p>
          <input type="text"  className="w-full border border-black rounded px-3 py-2" />
          <p className='text-black text-sm font-semibold'>Location</p>
          <input type="text"  className="w-full border border-black rounded px-3 py-2" />
          <p className='text-black text-sm font-semibold'>Event History</p>
          <input type="text"  className="w-full border border-black rounded px-3 py-2" />
          <p className='text-black text-sm font-semibold'>Rating</p>
          <input type="text"  className="w-full border border-black rounded px-3 py-2" />
          <button className="w-full bg-red-500 text-white py-2 rounded mt-2">Apply</button>
        </div>
      </div>
    )}
  </div>
    </>
  );
};

export default Organizer_Navbar;
