import React, { useState } from 'react'
import { logo } from '../Navbar/Navbar'
import Role1 from './Images/role1.jpeg'
import Role2 from './Images/role2.jpeg'

const ChangeRole = () => {
    const [FullName, SetFullName] = useState('')
    const [Email, SetEmail] = useState('')
    const [Number1, SetNumber1] = useState('')
    const [Number2, SetNumber2] = useState('')
    const [Organizer, SetOrganizer] = useState('')
    const [Location, SetLocation] = useState('')

    const submitdata = (e) => {
        e.preventDefault();
        const data = {
            FullName,
            Email,
            Number1,
            Number2,
            Organizer,
            Location,
           
        }
        console.log(data);
        alert('Create Account SuccessFully')
    }

    let Organizers = [
        { select: 'Select Organizer Type', value: 'Select ', id: 1, },
        { select: 'Business/Club', value: 'Business/Club', id: 2, },
        { select: 'Individual Organizer', value: 'Individual Organizer', id: 3, },
    ]
    let Citys = [
        { select: 'City', value: 'Select ', id: 1, },
        { select: 'City1', value: 'City1', id: 2, },
        { select: 'City2', value: 'City2', id: 3, },
    ]
    let Regions = [
        { select: 'Region', value: 'Select ', id: 1, },
        { select: 'Region1', value: 'Region1', id: 2, },
        { select: 'Region2', value: 'Region2', id: 3, },
    ]
    let Banks = [
        { select: 'Bank Name', value: 'Bank Name ', id: 1, },
        { select: 'Bank1', value: 'Bank1', id: 2, },
        { select: 'Bank2', value: 'Bank2', id: 3, },
    ]
    return (
        <>
            <div className="bg-black absolute top-0 -bottom-30 left-0 right-0  w-[100%] z-[999999] max-lg:-bottom-92 ">
                <div className="w-[90%] flex rounded mx-auto max-lg:flex-col-reverse">
                    <form onSubmit={submitdata} action="" className="w-[50%] bg-[#ffffff] flex flex-col py-8  items-center gap-5 rounded-l-3xl max-lg:py-8 max-lg:w-[100%] max-lg:rounded-l-none max-lg:rounded-bl-3xl max-lg:rounded-b-3xl ">
                        <img src={logo} alt="" className="w-20" />
                        <h1 className="text-3xl font-medium w-[60%] max-lg:w-[100%] max-lg:px-5 ">Please enter some detail to change your role</h1>
                        <div className="flex flex-col w-[90%] gap-1">
                            <label htmlFor="" className='text-lg font-medium'>Full Name</label>
                            <input type="text" name='FullName' required value={FullName} onChange={(e) => SetFullName(e.target.value)} className='px-3 py-1.5 rounded-lg outline-none' placeholder='Enter Full Name' style={{ border: '1.5px solid #9ca3af' }} />
                        </div>
                        <div className="flex flex-col w-[90%] gap-1">
                            <label htmlFor="" className='text-lg font-medium '>Organizer type</label>
                            <select name="" id="" required onChange={(e) => SetOrganizer(e.target.value)} className='px-3 py-2 rounded-lg outline-none' style={{ border: '1.5px solid #9ca3af' }}>
                                {Organizers.map((option) => (
                                    <option key={option.id} value={option.value}>{option.select}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col w-[90%] gap-1">
                            <label htmlFor="" className='text-lg font-medium'>Email Address</label>
                            <input type="email" name='Email' required value={Email} onChange={(e) => SetEmail(e.target.value)} className='px-3 py-1.5 rounded-lg outline-none' placeholder='Enter Email Address' style={{ border: '1.5px solid #9ca3af' }} />
                        </div>
                        <div className="flex flex-col w-[90%] gap-1">
                            <label htmlFor="" className='text-lg font-medium'>Phone Number</label>
                            <input type="number" name='Number1' required value={Number1} onChange={(e) => SetNumber1(e.target.value)} className='px-3 py-1.5 rounded-lg outline-none' placeholder='Enter Phone Number' style={{ border: '1.5px solid #9ca3af' }} />
                        </div>
                        <div className="flex flex-col w-[90%] gap-1">
                            <label htmlFor="" className='text-lg font-medium'>Phone Number 2</label>
                            <input type="number" name='Number2' required value={Number2} onChange={(e) => SetNumber2(e.target.value)} className='px-3 py-1.5 rounded-lg outline-none' placeholder='Enter Phone Number' style={{ border: '1.5px solid #9ca3af' }} />
                        </div>

                        <div className="flex flex-wrap w-[90%] justify-between gap-3 items-center">
                            <div className="flex flex-col w-[30%] gap-1 max-lg:w-[45%]">
                                <label htmlFor="" className='text-lg font-medium '>Location</label>
                                <select name="" id="" required onChange={(e) => SetLocation(e.target.value)} className='px-3 py-2 rounded-lg outline-none' style={{ border: '1.5px solid #9ca3af' }}>
                                    {Citys.map((option) => (
                                        <option key={option.id} value={option.value}>{option.select}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col w-[30%] gap-1 mt-8 max-lg:w-[45%]">

                                <select name="" id="" required onChange={(e) => SetLocation(e.target.value)} className='px-3 py-2 rounded-lg outline-none' style={{ border: '1.5px solid #9ca3af' }}>
                                    {Regions.map((option) => (
                                        <option key={option.id} value={option.value}>{option.select}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col w-[100%] gap-1">
                                <input type="text" name='Number2' required className='px-3 py-1.5 rounded-lg outline-none' placeholder='5809 Evans Fork' style={{ border: '1.5px solid #9ca3af' }} />
                            </div>
                        </div>
                        <div className="flex flex-col w-[90%] gap-1">
                            <label htmlFor="" className='text-lg font-medium'>Sports & Events</label>
                            <div className="flex flex-wrap gap-5 max-lg:gap-5 max-lg:justify-between">
                                <div className="flex gap-2 p-1 rounded-lg w-[22%] max-lg:w-auto max-lg:p-2" style={{ border: '1.5px solid #9ca3af' }}>
                                    <input type="checkbox" />
                                    <p className="text-[#9ca3af]">FootBall</p>
                                </div>
                                <div className="flex gap-2 p-1 rounded-lg w-[22%] max-lg:w-auto max-lg:p-2" style={{ border: '1.5px solid #9ca3af' }}>
                                    <input type="checkbox" />
                                    <p className="text-[#9ca3af]">Cricket</p>
                                </div>
                                <div className="flex gap-2 p-1 rounded-lg w-[22%] max-lg:w-auto max-lg:p-2" style={{ border: '1.5px solid #9ca3af' }}>
                                    <input type="checkbox" />
                                    <p className="text-[#9ca3af]">Tennis</p>
                                </div>
                                <div className="flex gap-2 p-1 rounded-lg w-[22%]  max-lg:w-auto max-lg:p-2" style={{ border: '1.5px solid #9ca3af' }}>
                                    <input type="checkbox" />
                                    <p className="text-[#9ca3af]">BasketBall</p>
                                </div>
                                <div className="flex gap-2 p-1 rounded-lg w-[22%]  max-lg:w-auto max-lg:p-2" style={{ border: '1.5px solid #9ca3af' }}>
                                    <input type="checkbox" />
                                    <p className="text-[#9ca3af]">Race</p>
                                </div>
                                <div className="flex gap-2 p-1 rounded-lg w-[22%]  max-lg:w-auto max-lg:p-2" style={{ border: '1.5px solid #9ca3af' }}>
                                    <input type="checkbox" />
                                    <p className="text-[#9ca3af]">Valleyball</p>
                                </div>
                                <div className="flex gap-2 p-1 rounded-lg w-[22%]  max-lg:w-auto max-lg:p-2" style={{ border: '1.5px solid #9ca3af' }}>
                                    <input type="checkbox" />
                                    <p className="text-[#9ca3af]">Swimming</p>
                                </div>
                                <div className="flex gap-2 p-1 rounded-lg w-[22%]  max-lg:w-auto max-lg:p-2" style={{ border: '1.5px solid #9ca3af' }}>
                                    <input type="checkbox" />
                                    <p className="text-[#9ca3af]">Cycling</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-[90%] gap-1">
                            <label htmlFor="" className='text-lg font-medium'>Event Type You Host</label>
                            <div className="flex flex-wrap gap-5 max-lg:gap-3">
                                <div className="flex gap-2 p-1 rounded-lg w-[27%] max-lg:w-auto max-lg:p-2" style={{ border: '1.5px solid #9ca3af' }}>
                                    <input type="checkbox" />
                                    <p className="text-[#9ca3af]">Tournaments</p>
                                </div>
                                <div className="flex gap-2 p-1 rounded-lg w-[32%] max-lg:w-auto max-lg:p-2" style={{ border: '1.5px solid #9ca3af' }}>
                                    <input type="checkbox" />
                                    <p className="text-[#9ca3af]">Friendly Matches</p>
                                </div>
                                <div className="flex gap-2 p-1 rounded-lg w-[32%] max-lg:w-auto max-lg:p-2" style={{ border: '1.5px solid #9ca3af' }}>
                                    <input type="checkbox" />
                                    <p className="text-[#9ca3af]">Tranning Session</p>
                                </div>
                                <div className="flex gap-2 p-1 rounded-lg w-[40%] max-lg:w-auto max-lg:p-2" style={{ border: '1.5px solid #9ca3af' }}>
                                    <input type="checkbox" />
                                    <p className="text-[#9ca3af]">Coaching/Workshops</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-[90%] gap-1">
                                <label htmlFor="" className='text-lg font-medium '>Bank Details</label>
                               <div className="flex gap-5 max-lg:flex-col">
                               <select name="" id="" required onChange={(e) => SetLocation(e.target.value)} className='w-[35%] max-lg:w-auto px-3 py-2 rounded-lg outline-none' style={{ border: '1.5px solid #9ca3af' }}>
                                    {Banks.map((option) => (
                                        <option key={option.id} value={option.value}>{option.select}</option>
                                    ))}
                                </select>
                                <input type="text" name='Number2' required value={Number2} onChange={(e) => SetNumber2(e.target.value)} className='w-[65%] px-3 py-1.5 rounded-lg outline-none max-lg:w-auto' placeholder='IBAN/Account Number' style={{ border: '1.5px solid #9ca3af' }} />
                               </div>
                            </div>
                        <div className="flex items-center gap-2 w-[90%]">
                            <input type="checkbox" />
                            <p className="text-[#9ca3af] text-[.9rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ratione.</p>
                        </div>

                        <button className='text-xl w-[90%] bg-[#E45352] py-1.5 px-3 text-[#ffffff] font-medium rounded-full mt-16'>Submit Request</button>

                    </form>
                    <div className="w-[50%] h-[100%] flex flex-col max-lg:flex-row max-lg:w-[100%]">
                        <img src={Role1} alt="" className="w-[100%] rounded-tr-3xl max-lg:w-[50%] h-[125vh] object-cover  max-lg:rounded-r-none max-lg:rounded-t-none max-lg:rounded-tl-3xl max-lg:h-[20rem] max-lg:object-cover " />
                        <img src={Role2} alt="" className="w-[100%] h-[125vh] max-lg:w-[50%] object-cover rounded-br-3xl max-lg:rounded-br-none  max-lg:rounded-r-none max-lg:rounded-t-none max-lg:rounded-tr-3xl max-lg:h-[20rem] max-lg:object-cover " />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangeRole
