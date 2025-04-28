import React, { useState } from 'react'
import '../Style/Home.scss'
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
import map from './Images/map.png'

const Contact_Us = () => {
        const [Name, SetName] = useState('')
        const [PhoneNumber, SetPhoneNumber] = useState('')
        const [City, SetCity] = useState('')
        const [Message, SetMessage] = useState('')
    let Citys = [
        { select: 'Select City', value: 'Select Option', id: 1, },
        { select: 'City1', value: 'City1', id: 2, },
        { select: 'City2', value: 'City2', id: 3, },
        { select: 'City3', value: 'City3', id: 4, },
    ]
    const submit = (e) => {
        e.preventDefault();
        const data = {
           Name,
           PhoneNumber,
           City,
           Message,
        }
        console.log(data);
        alert('Submitted SuccessFully')
    }
    return (
        <>
            <div className="news -z-50 " >

                <div className="landing-bg bg-[#0000002d] w-[100%]  flex flex-col h-[35rem] justify-center items-center max-lg:min-h-[auto] max-lg:h-[60vh]">

                    <div className="flex flex-col justify-center items-center mx-auto   w-[80%] max-lg:w-[100%] max-lg:px-4">
                        <h1 className="text-[3.4rem] text-white font-semibold max-lg:text-3xl mt-5">Contact Us</h1>
                        <p className="text-white font-normal text-xl flex justify-center items-center text-center">Lorem ipsum dolor sit amet consectetur. Nibh mauris sed quam nunc magna et diam. <br /> Egestas nibh proin metus vitae aliquam mauris at.</p>
                        <div className="flex justify-center   w-[65%] mt-5 max-lg:w-[100%] max-lg:flex-wrap max-lg:mb-16 max-lg:items-center max-lg:justify-center max-lg:text-center max-lg:gap-5 ">
                            <button className="text-xl  py-1.5 px-3 text-[#ffffff] font-medium rounded-full " style={{ border: '2px solid white' }}>More Info</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-[100%] flex gap justify-center mx-auto  items-center py-10 gap-8 max-lg:flex-col" >
                <form onSubmit={submit} className="w-[50%]  flex flex-col justify-center  gap-8 p-5 max-lg:w-[100%]" >
                    <h1 className="text-3xl font-bold">Send Us Message Now</h1>
                    <input type="text" name='Name' value={Name} required  onChange={(e) => SetName(e.target.value)} placeholder='Name' className='outline-none rounded-lg p-2 w-[100%] ' style={{ border: '1.5px solid black' }} />
                    <input type="number" name='PhoneNumber' value={PhoneNumber}  required  onChange={(e) => SetPhoneNumber(e.target.value)} placeholder='Phone Number' className='w-[100%] outline-none rounded-lg p-2' style={{ border: '1.5px solid black' }} />
                    <select name="City" id="" value={City}  required onChange={(e) => SetCity(e.target.value)} className='px-2 py-2.5 rounded-lg outline-none w-[100%] ' style={{ border: '1.5px solid black' }}>
                        {Citys.map((option) => (
                            <option key={option.id} value={option.value}>{option.select}</option>
                        ))}
                    </select>
                    <textarea name="Message" id="" value={Message} required  onChange={(e) => SetMessage(e.target.value)} placeholder='Message' className='w-[100%] p-2 rounded-lg outline-none resize-none h-[13rem]  ' style={{ border: '1.5px solid black' }}></textarea>
                    <button className=" w-[100%] rounded-full bg-[#E45352] py-2 mx-auto flex justify-center items-center text-white">Submit</button>

                </form>
                <div className="w-[30%] flex flex-col gap-8 px-5 max-lg:w-[100%]">
                    <div className="flex flex-col px-4  ">
                        <div className="flex gap-2 items-center">
                        <FiPhone className='text-xl' />
                        <p className="font-semibold text-lg">Phone Number</p>
                        </div>
                        <p className="ml-7 flex">+9245657 4567456754</p>
                    </div>
                    <div className="flex flex-col px-4  ">
                        <div className="flex gap-2 items-center">
                        <SlLocationPin className='text-xl' />
                        <p className="font-semibold text-lg">Location</p>
                        </div>
                        <p className="ml-7 flex">Lorem Ipsum fdbvxfgb cfgjhngcn</p>
                    </div>
                    <div className="flex flex-col px-4  ">
                        <div className="flex gap-2 items-center">
                        <MdOutlineMailOutline className='text-xl' />
                        <p className="font-semibold text-lg">Gmail Address</p>
                        </div>
                        <p className="ml-7 flex">Lorem Ipsum fdbvxfgb cfgjhngcn</p>
                    </div>
                    <img src={map} alt="" className="w-[100%] h-[50vh] rounded-lg object-cover" />
                </div>
            </div>
        </>
    )
}

export default Contact_Us
