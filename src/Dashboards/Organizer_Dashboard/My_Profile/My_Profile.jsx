import React, { useState } from "react";
import Organizer_Sidebar from "../Sidebar/Organizer_Sidebar";
import Organizer_Navbar from "../Organizer_Navbar/Organizer_Navbar";
import myprofile from "./images/myprofile.jpg";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown, IoIosStar, IoIosStarOutline } from "react-icons/io";

import Profile_Events from "./Profile_Events/Profile_Events";
import Profile_Raiting from "./Profile_Raiting/Profile_Rating";
import { Link } from "react-router-dom";

const My_Profile = () => {
  const [isFollowing, setIsFollowing] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState("event");

  const handleFollowClick = () => {
    if (!isFollowing) setIsFollowing(true);
    setShowDropdown(!showDropdown);
  };

  const handleUnfollow = () => {
    setIsFollowing(false);
    setShowDropdown(false);
  };
  return (
    <>
      <Organizer_Sidebar />
      <div className="absolute top-0 right-0  bg-[#FAFAFA]   w-[75%] float-right max-lg:w-[100%]">
        <Organizer_Navbar />
        <div className="flex flex-col gap-3 p-3">
          <div className="rounded-lg shadow-md bg-white">
            <div className="p-3 flex justify-between max-lg:flex-col">
              <p className="text-lg font-semibold max-lg:text-center">
                Organizers Profiles
              </p>
              <div className="flex items-center gap-10 max-lg:flex-col">
                <Link to="/Boost_Profile">
                  <button className="bg-[#FFDB20] text-white whitespace-nowrap px-5 py-2 rounded-full">
                    Boost Your Profile
                  </button>
                </Link>
                <Link to="/Edit_Profile">
                  <button className="border border-[#e45252] whitespace-nowrap text-[#e45252] rounded-full px-5 py-2">
                    Edit Profile
                  </button>
                </Link>
              </div>
            </div>
            <hr className="pb-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 p-3">
              <div className="flex flex-col gap-10 items-center">
                <img
                  className="rounded-full w-[84px] h-[84px] object-cover"
                  src={myprofile}
                  alt=""
                />
                <div className="">
                  <p className="text-xl font-semibold">Esther Horward</p>
                  <div className="flex items-center gap-2">
                    <CiLocationOn />
                    <p className="text-md font-medium text-[#4D4D4D]">
                      Bern,Switzerland
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <IoIosStar className="text-yellow-400" size={20} />
                    <IoIosStar className="text-yellow-400" size={20} />
                    <IoIosStar className="text-yellow-400" size={20} />
                    <IoIosStarOutline className="text-gray-300" size={20} />
                    <IoIosStarOutline className="text-gray-300" size={20} />
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="relative">
                    <button
                      onClick={handleFollowClick}
                      className="bg-[#e45252] text-white text-[14px] px-6 py-2 rounded-full flex items-center gap-2"
                    >
                      {isFollowing ? "Following" : "Follow"}
                      <IoIosArrowDown />
                    </button>

                    {isFollowing && showDropdown && (
                      <div className="absolute mt-1 bg-white border border-gray-200 rounded-md shadow-md z-10">
                        <button
                          onClick={handleUnfollow}
                          className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                        >
                          Unfollow
                        </button>
                      </div>
                    )}
                  </div>
                  <button className="border bg-[#e45252] text-white rounded-full px-5 py-2">
                    Message
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-medium text-gray-400">
                  Personal Description
                </p>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  illo nostrum nam optio facere explicabo quae possimus itaque
                  voluptate a.
                </p>
                <div className="flex items-center gap-20">
                  <div className="flex flex-col gap-5 justity-center">
                    <div className="">
                      <p className="text-medium text-gray-400">Full Name</p>
                      <p className="text-lg">Ester Horward</p>
                    </div>
                    <div className="">
                      <p className="text-medium text-gray-400">Phone Number</p>
                      <p className="text-lg">+92 00 000 0000</p>
                    </div>
                    <div className="">
                      <p className="text-medium text-gray-400">Country</p>
                      <p className="text-lg">Pakistan</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 justity-center">
                    <div className="">
                      <p className="text-medium text-gray-400">Date of Birth</p>
                      <p className="text-lg">20-5-2024</p>
                    </div>
                    <div className="">
                      <p className="text-medium text-gray-400">Email Address</p>
                      <p className="text-lg">esterhorward@gmail.com</p>
                    </div>
                    <div className="">
                      <p className="text-medium text-gray-400">City</p>
                      <p className="text-lg">Islamabad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-5">
              <button
                onClick={() => setSelected("event")}
                className={`text-lg  border-b-2 ${
                  selected === "event"
                    ? "text-black border-black"
                    : "border-transparent text-gray-400"
                }`}
              >
                Event History
              </button>
              <button
                onClick={() => setSelected("profile")}
                className={`text-lg  border-b-2 ${
                  selected === "profile"
                    ? "text-black border-black"
                    : "border-transparent text-gray-400"
                }`}
              >
                Ratings & Reviews
              </button>
            </div>
            <button className="border border-[#e45252] whitespace-nowrap text-[#e45252] rounded-full px-5 py-2">
              See All
            </button>
          </div>
          {selected == "event" && <Profile_Events />}
          {selected == "profile" && <Profile_Raiting />}
        </div>
      </div>
    </>
  );
};

export default My_Profile;
