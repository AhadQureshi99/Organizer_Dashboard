import React, { useEffect, useRef, useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import Organizer_Sidebar from "../../Sidebar/Organizer_Sidebar";
import Organizer_Navbar from "../../Organizer_Navbar/Organizer_Navbar";
import { MdOutlineSort } from "react-icons/md";
import { Link } from "react-router-dom";

const registrationData = [
  {
    id: "P001",
    name: "John Doe",
    type: "Player",
    registration: "Registered",
    payment: "Paid",
    teamassignment: "Team A",
  },
  {
    id: "P002",
    name: "Alpha",
    type: "Team",
    registration: "Pending",
    payment: "Unpaid",
    teamassignment: "-",
  },
  {
    id: "P003",
    name: "Alex",
    type: "Player",
    registration: "Registered",
    payment: "Paid",
    teamassignment: "Team B",
  },
];

const Manage_Registration = () => {
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilter(false);
      }
    };

    if (showFilter) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilter]);

  return (
    <>
      <Organizer_Sidebar />
      <div className="absolute top-0 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%]">
        <Organizer_Navbar />
        <div className="p-3">
          <div className="bg-white shadow-md p-3 flex flex-col gap-5 relative">
            <div className="flex justify-between items-center">
              <p className="text-xl fw-semibold">Manage Registration</p>
              <button
                className="border border-[#e45252] py-2 flex items-center gap-2 px-5 rounded-full text-[#e45252]"
                onClick={() => setShowFilter(!showFilter)}
              >
                <MdOutlineSort />
                Filter
              </button>
            </div>

            {showFilter && (
              <div
                ref={filterRef}
                className="absolute top-16 right-5 bg-white border border-gray-200 shadow-lg rounded-lg p-5 z-10 w-[250px]"
              >
                <h3 className="text-md font-semibold mb-2">Choose One</h3>
                <hr className="mb-3 border-gray-300" />

                <div className="mb-4">
                  <p className="font-medium text-sm mb-2">User Type</p>
                  <label className="block text-sm mb-2">
                    <input
                      type="radio"
                      name="userType"
                      value="Player"
                      className="mr-2 accent-[#e45252]"
                    />
                    Players
                  </label>
                  <label className="block text-sm">
                    <input
                      type="radio"
                      name="userType"
                      value="Team"
                      className="mr-2 accent-[#e45252]"
                    />
                    Team
                  </label>
                </div>

                <div>
                  <p className="font-medium text-sm mb-2">Status</p>
                  <label className="block text-sm mb-2">
                    <input
                      type="radio"
                      name="status"
                      value="Registered"
                      className="mr-2 accent-[#e45252]"
                    />
                    Registered
                  </label>
                  <label className="block text-sm">
                    <input
                      type="radio"
                      name="status"
                      value="Paid"
                      className="mr-2 accent-[#e45252]"
                    />
                    Paid
                  </label>
                </div>
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="w-full table-auto text-center">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="p-3">ID Number</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">type</th>
                    <th className="p-3">Registration</th>
                    <th className="p-3">Payment</th>
                    <th className="p-3">Team Assignment</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {registrationData.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-gray-100 ${
                        idx !== 0 ? "mt-3" : ""
                      }`}
                    >
                      <td className="p-3 text-sm text-gray-600">{item.id}</td>
                      <td className="p-3 text-sm text-gray-600">{item.name}</td>
                      <td className="p-3 text-sm text-gray-600">{item.type}</td>
                      <td className="p-3 text-sm text-gray-600">
                        {item.registration}
                      </td>
                      <td className="p-3 text-sm text-gray-600 max-w-xs">
                        {item.payment}
                      </td>
                      <td className="p-3 text-sm text-gray-600 max-w-xs">
                        {item.teamassignment}
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <Link to="/Manage_team_Registration">
                            <button className="bg-[#e45252] text-white px-4 py-1 rounded-full">
                              Edit
                            </button>
                          </Link>

                          <button className="rounded-full p-2 bg-[#e45252] text-white ">
                            <RiDeleteBin7Line />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manage_Registration;
