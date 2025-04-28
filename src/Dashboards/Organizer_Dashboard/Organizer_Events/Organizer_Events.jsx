import React from "react";
import Organizer_Navbar from "../Organizer_Navbar/Organizer_Navbar";

import ad from "./Images/ad.jpg";
import ad2 from "./Images/ad2.jpg";
import ad3 from "./Images/ad3.jpg";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegCalendarDays, FaRegCalendarXmark } from "react-icons/fa6";
import { PiMoney, PiPencilSimpleLine } from "react-icons/pi";
import { RiDeleteBin7Line } from "react-icons/ri";
import Organizer_Sidebar from "../Sidebar/Organizer_Sidebar";

const Organizer_Events = () => {
  return (
    <>
      <Organizer_Sidebar />
      <div className="absolute top-0 right-0  bg-[#FAFAFA]   w-[75%] float-right max-lg:w-[100%]">
        <Organizer_Navbar />
        <div className="p-4  flex flex-col gap-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            {/* Total Events */}
            <div className="bg-red-100 rounded-lg p-4 flex flex-col items-center">
              <div className="bg-white p-2 rounded-full mb-2">
                <FaRegCalendarCheck size={24} className="text-red-500" />
              </div>
              <p className="text-sm font-medium">Total Events</p>
              <p className="text-lg font-bold">30</p>
            </div>

            {/* Registrations */}
            <div className="bg-purple-100 rounded-lg p-4 flex flex-col items-center">
              <div className="bg-white p-2 rounded-full mb-2">
                <FaRegCalendarDays size={24} className="text-purple-500" />
              </div>
              <p className="text-sm font-medium">Registrations</p>
              <p className="text-lg font-bold">6</p>
            </div>

            {/* Cancel Events */}
            <div className="bg-yellow-100 border rounded-lg p-4 flex flex-col items-center">
              <div className="bg-white p-2 rounded-full mb-2">
                <FaRegCalendarXmark size={24} className="text-yellow-500" />
              </div>
              <p className="text-sm font-medium">Cancel Events</p>
              <p className="text-lg font-bold">4</p>
            </div>

            {/* Total Revenue */}
            <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center">
              <div className="bg-white p-2 rounded-full mb-2">
                <PiMoney size={24} className="text-blue-500" />
              </div>
              <p className="text-sm font-medium">Total Revenue</p>
              <p className="text-lg font-bold">4</p>
            </div>
          </div>
          <div className="rounded-lg shadow-md bg-white">
            <div className="flex justify-between p-3">
              <p className="text-xl font-semibold">Upcoming Events</p>
              <button className="py-2 px-6 border border-[#E45252] text-[#E45252] rounded-full">
                See All
              </button>
            </div>
            <hr />
            <div className="p-4 ">
              <div className="flex flex-col sm:flex-row sm:items-center border border-gray-200 justify-between shadow-md rounded px-4 py-3 mx-auto mt-4 space-y-4 sm:space-y-0 sm:space-x-4 max-w-full sm:max-w-6xl overflow-x-auto">
                {/* Left Section */}
                <div className="flex items-center gap-3 min-w-[200px]">
                  <img
                    src={ad}
                    alt="event"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="font-semibold text-sm">Path Of Exile 2</h2>
                    <p className="text-xs text-gray-500">📍 New Boston</p>
                  </div>
                </div>

                {/* Middle Section */}
                <div className="flex items-center flex-wrap gap-2 min-w-[250px]">
                  <p className="text-sm font-semibold mr-2">Participants</p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((_, i) => (
                      <img
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src={`https://i.pravatar.cc/150?img=${i + 1}`}
                        alt={`Participant ${i + 1}`}
                      />
                    ))}
                    <div className="w-8 h-8 bg-gray-200 text-gray-600 text-xs rounded-full flex items-center justify-center border-2 border-white">
                      +
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="text-sm text-right sm:text-left min-w-[120px]">
                  <p>20-Oct-2024</p>
                  <p className="text-gray-500">06:30 pm</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 items-center justify-end flex-wrap">
                  <button className="bg-red-400 text-white p-2 rounded-full hover:bg-red-500">
                    <PiPencilSimpleLine className="text-xl" />
                  </button>
                  <button className="bg-red-400 text-white p-2 rounded-full hover:bg-red-500">
                    <RiDeleteBin7Line className="text-xl" />
                  </button>
                  <button className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 text-sm font-medium">
                    View
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center border border-gray-200 justify-between shadow-md rounded px-4 py-3 mx-auto mt-4 space-y-4 sm:space-y-0 sm:space-x-4 max-w-full sm:max-w-6xl overflow-x-auto">
                {/* Left Section */}
                <div className="flex items-center gap-3 min-w-[200px]">
                  <img
                    src={ad2}
                    alt="event"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="font-semibold text-sm">Path Of Exile 2</h2>
                    <p className="text-xs text-gray-500">📍 New Boston</p>
                  </div>
                </div>

                {/* Middle Section */}
                <div className="flex items-center flex-wrap gap-2 min-w-[250px]">
                  <p className="text-sm font-semibold mr-2">Participants</p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((_, i) => (
                      <img
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src={`https://i.pravatar.cc/150?img=${i + 1}`}
                        alt={`Participant ${i + 1}`}
                      />
                    ))}
                    <div className="w-8 h-8 bg-gray-200 text-gray-600 text-xs rounded-full flex items-center justify-center border-2 border-white">
                      +
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="text-sm text-right sm:text-left min-w-[120px]">
                  <p>20-Oct-2024</p>
                  <p className="text-gray-500">06:30 pm</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 items-center justify-end flex-wrap">
                  <button className="bg-red-400 text-white p-2 rounded-full hover:bg-red-500">
                    <PiPencilSimpleLine className="text-xl" />
                  </button>
                  <button className="bg-red-400 text-white p-2 rounded-full hover:bg-red-500">
                    <RiDeleteBin7Line className="text-xl" />
                  </button>
                  <button className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 text-sm font-medium">
                    View
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center border border-gray-200 justify-between shadow-md rounded px-4 py-3 mx-auto mt-4 space-y-4 sm:space-y-0 sm:space-x-4 max-w-full sm:max-w-6xl overflow-x-auto">
                {/* Left Section */}
                <div className="flex items-center gap-3 min-w-[200px]">
                  <img
                    src={ad3}
                    alt="event"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="font-semibold text-sm">Path Of Exile 2</h2>
                    <p className="text-xs text-gray-500">📍 New Boston</p>
                  </div>
                </div>

                {/* Middle Section */}
                <div className="flex items-center flex-wrap gap-2 min-w-[250px]">
                  <p className="text-sm font-semibold mr-2">Participants</p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((_, i) => (
                      <img
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src={`https://i.pravatar.cc/150?img=${i + 1}`}
                        alt={`Participant ${i + 1}`}
                      />
                    ))}
                    <div className="w-8 h-8 bg-gray-200 text-gray-600 text-xs rounded-full flex items-center justify-center border-2 border-white">
                      +
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="text-sm text-right sm:text-left min-w-[120px]">
                  <p>20-Oct-2024</p>
                  <p className="text-gray-500">06:30 pm</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 items-center justify-end flex-wrap">
                  <button className="bg-red-400 text-white p-2 rounded-full hover:bg-red-500">
                    <PiPencilSimpleLine className="text-xl" />
                  </button>
                  <button className="bg-red-400 text-white p-2 rounded-full hover:bg-red-500">
                    <RiDeleteBin7Line className="text-xl" />
                  </button>
                  <button className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 text-sm font-medium">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* past event section */}
          <div className="rounded-lg shadow-md bg-white">
            <div className="flex justify-between p-3">
              <p className="text-xl font-semibold">Past Events</p>
              <button className="py-2 px-6 border border-[#E45252] text-[#E45252] rounded-full">
                See All
              </button>
            </div>
            <hr />
            <div className="p-4 ">
              <div className="flex flex-col sm:flex-row sm:items-center border border-gray-200 justify-between shadow-md rounded px-4 py-3 mx-auto mt-4 space-y-4 sm:space-y-0 sm:space-x-4 max-w-full sm:max-w-6xl overflow-x-auto">
                {/* Left Section */}
                <div className="flex items-center gap-3 min-w-[200px]">
                  <img
                    src={ad}
                    alt="event"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="font-semibold text-sm">Path Of Exile 2</h2>
                    <p className="text-xs text-gray-500">📍 New Boston</p>
                  </div>
                </div>

                {/* Middle Section */}
                <div className="flex items-center flex-wrap gap-2 min-w-[250px]">
                  <p className="text-sm font-semibold mr-2">Participants</p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((_, i) => (
                      <img
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src={`https://i.pravatar.cc/150?img=${i + 1}`}
                        alt={`Participant ${i + 1}`}
                      />
                    ))}
                    <div className="w-8 h-8 bg-gray-200 text-gray-600 text-xs rounded-full flex items-center justify-center border-2 border-white">
                      +
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="text-sm text-right sm:text-left min-w-[120px]">
                  <p>20-Oct-2024</p>
                  <p className="text-gray-500">06:30 pm</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 items-center justify-end flex-wrap">
                  <button className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 text-sm font-medium">
                    Finance
                  </button>
                  <button className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 text-sm font-medium">
                    Feedback
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center border border-gray-200 justify-between shadow-md rounded px-4 py-3 mx-auto mt-4 space-y-4 sm:space-y-0 sm:space-x-4 max-w-full sm:max-w-6xl overflow-x-auto">
                {/* Left Section */}
                <div className="flex items-center gap-3 min-w-[200px]">
                  <img
                    src={ad2}
                    alt="event"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="font-semibold text-sm">Path Of Exile 2</h2>
                    <p className="text-xs text-gray-500">📍 New Boston</p>
                  </div>
                </div>

                {/* Middle Section */}
                <div className="flex items-center flex-wrap gap-2 min-w-[250px]">
                  <p className="text-sm font-semibold mr-2">Participants</p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((_, i) => (
                      <img
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src={`https://i.pravatar.cc/150?img=${i + 1}`}
                        alt={`Participant ${i + 1}`}
                      />
                    ))}
                    <div className="w-8 h-8 bg-gray-200 text-gray-600 text-xs rounded-full flex items-center justify-center border-2 border-white">
                      +
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="text-sm text-right sm:text-left min-w-[120px]">
                  <p>20-Oct-2024</p>
                  <p className="text-gray-500">06:30 pm</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 items-center justify-end flex-wrap">
                  <button className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 text-sm font-medium">
                    Finance
                  </button>
                  <button className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 text-sm font-medium">
                    Feedback
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center border border-gray-200 justify-between shadow-md rounded px-4 py-3 mx-auto mt-4 space-y-4 sm:space-y-0 sm:space-x-4 max-w-full sm:max-w-6xl overflow-x-auto">
                {/* Left Section */}
                <div className="flex items-center gap-3 min-w-[200px]">
                  <img
                    src={ad3}
                    alt="event"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="font-semibold text-sm">Path Of Exile 2</h2>
                    <p className="text-xs text-gray-500">📍 New Boston</p>
                  </div>
                </div>

                {/* Middle Section */}
                <div className="flex items-center flex-wrap gap-2 min-w-[250px]">
                  <p className="text-sm font-semibold mr-2">Participants</p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((_, i) => (
                      <img
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src={`https://i.pravatar.cc/150?img=${i + 1}`}
                        alt={`Participant ${i + 1}`}
                      />
                    ))}
                    <div className="w-8 h-8 bg-gray-200 text-gray-600 text-xs rounded-full flex items-center justify-center border-2 border-white">
                      +
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="text-sm text-right sm:text-left min-w-[120px]">
                  <p>20-Oct-2024</p>
                  <p className="text-gray-500">06:30 pm</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 items-center justify-end flex-wrap">
                  <button className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 text-sm font-medium">
                    Finance
                  </button>
                  <button className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 text-sm font-medium">
                    Feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Organizer_Events;
