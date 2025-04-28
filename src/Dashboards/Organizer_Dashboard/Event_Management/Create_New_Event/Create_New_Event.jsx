import React from "react";
import Organizer_Sidebar from "../../Sidebar/Organizer_Sidebar";
import Organizer_Navbar from "../../Organizer_Navbar/Organizer_Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";

const Create_New_Event = () => {
  return (
    <>
      <Organizer_Sidebar />
      <div className="absolute top-0 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%]">
        <Organizer_Navbar />
        <div className="p-3">
          <form className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
            <p className="text-lg font-semibold">Create New Event</p>

            {/* Upload Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 flex flex-col items-center justify-center space-y-2">
                <label className="font-semibold text-md">Upload images and videos here</label>
                <input type="file" className="block w-full text-sm text-gray-500" />
              </div>
              <div className="border rounded-lg p-4 flex flex-col items-center justify-center space-y-2">
                <label className="font-semibold text-md">Upload images and videos here</label>
                <input type="file" className="block w-full text-sm text-gray-500" />
              </div>
            </div>

            {/* Event Info */}
            <div className="Event Title">
                <label className="block font-semibold mb-1 text-md">Event Title</label>
                <select className="w-full border rounded-full px-3 py-2 pr-10 appearance-none text-gray-600" defaultValue="">
                  <option value="" disabled hidden>Write Title Here</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                  <option value="sportsname">Sports name</option>
                 
                </select>
                <IoIosArrowDown className="h-5 w-5 text-gray-400 absolute right-3 top-12 transform -translate-y-1/2 pointer-events-none" />
              </div>

            <div>
              <label className="block font-semibold mb-1 text-md">Event Description</label>
              <textarea rows={4} className="w-full border rounded-lg px-3 py-2" placeholder="Write description" />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block font-semibold mb-1 text-md">Date</label>
                <input type="date" className="w-full border rounded-full px-3 py-2" />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-md">Time</label>
                <input type="time" className="w-full border rounded-full px-3 py-2" />
              </div>
              <div className="relative">
                <label className="block font-semibold mb-1 text-md">Location</label>
                <input type="text" placeholder="Bern,Switzerland" className="w-full border rounded-full px-3 py-2 pr-20" />
                <button type="button" className="absolute right-0.5 top-[70%] -translate-y-1/2 bg-[#E45252] text-white text-sm px-7 py-2 rounded-full hover:bg-[#c93e3e] transition">Search</button>
              </div>
              <div className="relative">
                <label className="block font-semibold mb-1 text-md">Organizer Name</label>
                <select className="w-full border rounded-full px-3 py-2 pr-10 appearance-none text-gray-600" defaultValue="">
                  <option value="" disabled hidden>Football</option>
                  <option value="football">Football</option>
                  <option value="basketball">Basketball</option>
                  <option value="other">Other</option>
                </select>
                <IoIosArrowDown className="h-5 w-5 text-gray-400 absolute right-3 top-12 transform -translate-y-1/2 pointer-events-none" />
              </div>
              <div className="relative">
                <label className="block font-semibold mb-1 text-md">Organizer Gender</label>
                <select className="w-full border rounded-full px-3 py-2 pr-10 appearance-none text-gray-600" defaultValue="">
                  <option value="" disabled hidden>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <IoIosArrowDown className="h-5 w-5 text-gray-400 absolute right-3 top-12 transform -translate-y-1/2 pointer-events-none" />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-md">Contact Number</label>
                <input type="text" placeholder="00 000 0000" className="w-full border rounded-full px-3 py-2" />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-md">Contact Number2</label>
                <input type="text" placeholder="00 000 0000" className="w-full border rounded-full px-3 py-2" />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-md">Country</label>
                <input type="text" placeholder="Switzerland" className="w-full border rounded-full px-3 py-2" />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-md">City</label>
                <input type="text" placeholder="Bern" className="w-full border rounded-full px-3 py-2" />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-md">Team Size Limit</label>
                <input type="text" placeholder="100" className="w-full border rounded-full px-3 py-2" />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-md">Max Player per Team</label>
                <input type="text" placeholder="15" className="w-full border rounded-full px-3 py-2" />
              </div>
              <div className="relative">
                <label className="block font-semibold mb-1 text-md">Category</label>
                <select className="w-full border rounded-full px-3 py-2 pr-10 appearance-none text-gray-600" defaultValue="">
                  <option value="" disabled hidden>Enter game type</option>
                  <option value="tournament">Tournament</option>
                  <option value="friendlymatch">Friendly Match</option>
                </select>
                <IoIosArrowDown className="h-5 w-5 text-gray-400 absolute right-3 top-12 transform -translate-y-1/2 pointer-events-none" />
              </div>
              <div className="relative">
                <label className="block font-semibold mb-1 text-md">Rules</label>
                <input type="text" placeholder="Rules" className="w-full border rounded-full px-3 py-2 pr-20" />
                <FaCirclePlus size={30} className="absolute right-2 top-[70%] -translate-y-1/2 text-[#E45252] text-sm rounded-full hover:bg-[#c93e3e] transition" />
              </div>
              <div className="relative">
                <label className="block font-semibold mb-1 text-md">Type</label>
                <select className="w-full border rounded-full px-3 py-2 pr-10 appearance-none text-gray-600" defaultValue="">
                  <option value="" disabled hidden>Team</option>
                  <option value="5v5">5v5</option>
                  <option value="8v8">8v8</option>
                  <option value="11v11">11v11</option>
                </select>
                <IoIosArrowDown className="h-5 w-5 text-gray-400 absolute right-3 top-12 transform -translate-y-1/2 pointer-events-none" />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-md">Registration limit</label>
                <input type="text" placeholder="15" className="w-full border rounded-full px-3 py-2" />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="relative">
                  <label className="block font-semibold mb-1 text-md">Organizer Gender</label>
                  <select className="w-full border rounded-full px-3 py-2 pr-10 appearance-none text-gray-600" defaultValue="">
                    <option value="" disabled hidden>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <IoIosArrowDown className="h-5 w-5 text-gray-400 absolute right-3 top-12 transform -translate-y-1/2 pointer-events-none" />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-md">Age</label>
                  <input type="text" placeholder="Enter Age" className="w-full border rounded-full px-3 py-2" />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1 text-md">Amount For Registration</label>
                <input type="text" placeholder="20%" className="w-full border rounded-full px-3 py-2" />
              </div>
              <div className="relative">
                <label className="block font-semibold mb-1 text-md">Event Fee</label>
                <select className="w-full border rounded-full px-3 py-2 pr-10 appearance-none text-gray-600" defaultValue="">
                  <option value="" disabled hidden>Paypal</option>
                  <option value="paypal">Paypal</option>
                  <option value="stripe">Stripe</option>
                  <option value="other">Other</option>
                </select>
                <IoIosArrowDown className="h-5 w-5 text-gray-400 absolute right-3 top-12 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Event Features */}
            <div>
              <label className="block font-semibold mb-2 text-md">Event Features</label>
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-2 cursor-pointer text-md">
                  <input type="checkbox" className="w-5 h-5 rounded-full accent-[#e45252]" />
                  Enable live score
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-md">
                  <input type="checkbox" className="w-5 h-5 rounded-full accent-[#e45252]" />
                  Enable leaderboard
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-md">
                  <input type="checkbox" className="w-5 h-5 rounded-full accent-[#e45252]" />
                  Enable documents
                </label>
              </div>
            </div>
<div className="flex justify-center items-center gap-10">
<button type="submit" className="bg-red-500 rounded-full hover:bg-red-600 text-white font-semibold px-6 py-3 ">
              Create the Event
            </button>
            <button type="submit" className="bg-red-500 rounded-full hover:bg-red-600 text-white font-semibold px-20 py-3 max-lg:px-5">
              Share
            </button>
</div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Create_New_Event;
