import React, { useState } from "react";
import Organizer_Sidebar from "../../Sidebar/Organizer_Sidebar";
import Organizer_Navbar from "../../Organizer_Navbar/Organizer_Navbar";

const Event_Completion = () => {
  const [eventCompleted, setEventCompleted] = useState(null); // null, 'yes', or 'no'

  return (
    <>
      <Organizer_Sidebar />
      <div className="absolute top-0 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%]">
        <Organizer_Navbar />
        <div className="p-3">
          <form className="rounded-lg shadow-md flex flex-col gap-5 bg-white p-3">
            <p className="text-lg font-semibold">Post Event Completion Form</p>
            <hr />
            <div>
              <label className="block font-semibold mb-1 text-md">
                Event Title
              </label>
              <input
                type="text"
                placeholder="Auto filled from event detail"
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-semibold mb-1 text-md">
                  Event Title
                </label>
                <input
                  type="text"
                  placeholder="Auto filled from event detail"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-md">
                  Event Title
                </label>
                <input
                  type="text"
                  placeholder="Auto filled from event detail"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-semibold mb-1 text-md">
                  Game Type
                </label>
                <input
                  type="text"
                  placeholder="Auto filled from event detail"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-md">
                  Organizer Name
                </label>
                <input
                  type="text"
                  placeholder="Auto filled from event detail"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-md font-semibold text-gray-700">
                Is the event completed?
              </label>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="eventCompleted"
                    value="yes"
                    onChange={() => setEventCompleted("yes")}
                    checked={eventCompleted === "yes"}
                  />
                  <span className="text-md text-gray-600">Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="eventCompleted"
                    value="no"
                    onChange={() => setEventCompleted("no")}
                    checked={eventCompleted === "no"}
                  />
                  <span className="text-md text-gray-600">No</span>
                </label>
              </div>
            </div>

            {eventCompleted === "no" && (
              <div>
                <label className="block font-semibold mb-1 text-md">
                  Reason why event is not completed?
                </label>
                <textarea
                  className="w-full border rounded-lg px-3 py-2"
                  rows="4"
                  placeholder="Please explain why the event wasn't completed"
                ></textarea>
              </div>
            )}

            {eventCompleted === "yes" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-semibold mb-1 text-md">
                    Winning Team Name
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Enter winning team name"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-md">
                    MVP Player
                  </label>
                  <select className="w-full border rounded-lg px-3 py-2">
                    <option>Select MVP Player</option>
                    <option>Player A</option>
                    <option>Player B</option>
                    <option>Player C</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block font-semibold mb-1 text-md">
                    Best Player
                  </label>
                  <select className="w-full border rounded-lg px-3 py-2">
                    <option>Select Best Player</option>
                    <option>Player A</option>
                    <option>Player B</option>
                    <option>Player C</option>
                  </select>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Event_Completion;
