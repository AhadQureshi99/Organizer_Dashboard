import React from "react";
import Organizer_Sidebar from "../Sidebar/Organizer_Sidebar";
import Organizer_Navbar from "../Organizer_Navbar/Organizer_Navbar";
import user from "./Images/user.jpg";
import { IoIosStar } from "react-icons/io";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";

const organizers = new Array(10).fill({
  name: "Alison Thomas",
  location: "Bern, Switzerland",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis esse debitis suscipit repudiandae quisquam nobis expedita distinctio, inventore alias.",
  image: user,
  rating: 3,
});

const OrganizerCard = ({ name, location, description, image, rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < rating ? (
      <IoIosStar key={i} size={20} className="text-[#FFDB20]" />
    ) : (
      <BsStar key={i} size={20} className="text-gray-300" />
    )
  );

  return (
    <div className="shadow-md shadow-gray-300 rounded-lg p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <img
          className="rounded-full w-[84px] h-[84px] object-cover"
          src={image}
          alt={name}
        />
        <div className="flex flex-col gap-1">
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-md font-medium text-[#4D4D4D]">{location}</p>
          <div className="flex items-center">{stars}</div>
        </div>
      </div>
      <p className="text-lg text-gray-500">Personal Descriptions</p>
      <p className="text-sm">{description}</p>
      <div className="flex items-center justify-center gap-3">
        <button className="py-1.5 px-5 text-white bg-[#E45252] rounded-full">
          Follow
        </button>
        <Link
          to="/Organizer_Profile"
          state={{ name, location, description, image, rating }}
        >
          <button className="py-1.5 px-5 text-white bg-[#E45252] rounded-full whitespace-nowrap">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

const Organizer = () => {
  return (
    <>
      <Organizer_Sidebar />
      <div className="absolute top-0 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%]">
        <Organizer_Navbar />
        <div className="flex flex-col gap-3">
          <div className="rounded-lg shadow-md bg-white">
            <p className="text-xl font-semibold p-5">All Organizers</p>
            <hr className="my-2" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-3">
              {organizers.map((org, index) => (
                <OrganizerCard key={index} {...org} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Organizer;
