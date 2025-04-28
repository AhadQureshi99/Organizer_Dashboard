import React from "react";
import myprofile from "./images/myprofile.jpg";
import Organizer_Sidebar from "../../Sidebar/Organizer_Sidebar";
import Organizer_Navbar from "../../Organizer_Navbar/Organizer_Navbar";

const Edit_Profile = () => {
  return (
    <>
      <Organizer_Sidebar />
      <div className="absolute top-0 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%]">
        <Organizer_Navbar />
        <div className="bg-[#FAFAFA] min-h-screen p-5">
          <div className="bg-white rounded-lg shadow-md p-5 mb-6">
            <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
            <hr className="py-2" />
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={myprofile}
                  alt="Profile"
                  className="rounded-full w-[100px] h-[100px] object-cover"
                />
                <span className="absolute bottom-0 right-0 bg-gray-200 p-1 rounded-full text-sm">
                  ✎
                </span>
              </div>
              <h3 className="text-xl font-semibold mt-3">Esther Horward</h3>
              <p className="text-gray-500">@ Bern, Switzerland</p>
              <p className="text-lg font-semibold mt-2">Personal Description</p>

              <div className="relative mt-2 max-w-md w-full">
                <p className="text-center text-sm bg-gray-100 p-3 rounded text-black">
                  Lorem ipsum dolor sit amet consectetur. Fames nisl magna neque
                  nulla eget quisque in. Urna dui porttitor auctor tempor quis
                  condimentum arcu.
                </p>
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gray-300 text-black p-1 rounded-full text-xs cursor-pointer">
                  ✎
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-5">
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                  className="w-full p-2 border rounded"
                  defaultValue="Esther Howard"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email Address</label>
                <input
                  className="w-full p-2 border rounded"
                  defaultValue="estherhorward@gmail.com"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Father Name</label>
                <input
                  className="w-full p-2 border rounded"
                  defaultValue="Howard Thomas"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Location</label>
                <input
                  className="w-full p-2 border rounded"
                  defaultValue="Bern, Switzerland"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Date of Birth</label>
                <input
                  className="w-full p-2 border rounded"
                  defaultValue="20-05-2024"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">
                  Language Preference
                </label>
                <input
                  className="w-full p-2 border rounded"
                  defaultValue="English, Spanish"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Phone Number</label>
                <input
                  className="w-full p-2 border rounded"
                  defaultValue="+92 00 000 0000"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Experience</label>
                <input
                  className="w-full p-2 border rounded"
                  defaultValue="10+ Years"
                />
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-[#e45252] text-white px-6 py-2 rounded-full">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit_Profile;
