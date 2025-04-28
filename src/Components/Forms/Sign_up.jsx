import React, { useState } from 'react'
import { logo } from '../Navbar/Navbar'
import Signup_img from './Images/signup.jpeg'
import google from './Images/Google.png'
import facebook from './Images/facebook.png'

const Sign_up = () => {
    const [FullName, SetFullName] = useState('')
    const [Email, SetEmail] = useState('')
    const [Location, SetLocation] = useState('')
    const [Gender, SetGender] = useState('')
    const [Age, SetAge] = useState('')
    const [Password, SetPassword] = useState('')
    const [ConfirmPassword, SetConfirmPassword] = useState('')


    let Genders = [
        { select: 'Select Your Gender', value: 'Select Option', id: 1, },
        { select: 'Male', value: 'Male', id: 2, },
        { select: 'Female', value: 'Female', id: 3, },
        { select: 'Neither Male Nor Female', value: 'Neither Male Nor Female', id: 4, },
    ]
    const submitdata = (e) => {
        e.preventDefault();
        const data = {
            FullName,
            Email,
            Location,
            Gender,
            Age,
            Password,
            ConfirmPassword,
        }
        console.log(data);
        alert('Create Account SuccessFully')
    }
    return (
        <>
            <div className="bg-black absolute top-0 -bottom-88 left-0 right-0  w-[100%] z-[999999] ">
                <div className="w-[90%] flex rounded mx-auto max-lg:flex-col-reverse">
                    <form onSubmit={submitdata} action="" className="w-[50%] bg-[#ffffff] flex flex-col py-5 justify-center items-center gap-5 rounded-l-3xl max-lg:w-[100%] max-lg:rounded-l-none max-lg:rounded-bl-3xl max-lg:rounded-b-3xl">
                        <img src={logo} alt="" className="w-20" />
                        <h1 className="text-3xl font-medium">Sign up Now</h1>
                        <div className="flex flex-col w-[90%] gap-1">
                            <label htmlFor="" className='text-lg font-medium'>Full Name</label>
                            <input type="text" name='FullName' required value={FullName} onChange={(e) => SetFullName(e.target.value)} className='px-3 py-1.5 rounded-lg outline-none' placeholder='Enter Full Name' style={{ border: '1.5px solid #9ca3af' }} />
                        </div>
                        <div className="flex flex-col w-[90%] gap-1">
                            <label htmlFor="" className='text-lg font-medium'>Email Address</label>
                            <input type="email" name='Email' required value={Email} onChange={(e) => SetEmail(e.target.value)} className='px-3 py-1.5 rounded-lg outline-none' placeholder='Enter Email Address' style={{ border: '1.5px solid #9ca3af' }} />
                        </div>
                        <div className="flex flex-col w-[90%] gap-1">
                            <label htmlFor="" className='text-lg font-medium'>Location</label>
                            <input type="text" name='Location' required value={Location} onChange={(e) => SetLocation(e.target.value)} className='px-3 py-1.5 rounded-lg outline-none' placeholder='Enter Your Location' style={{ border: '1.5px solid #9ca3af' }} />
                        </div>
                        <div className="flex flex-col w-[90%] gap-1">
                            <label htmlFor="" className='text-lg font-medium'>Gender</label>
                            <select name="" id="" required onChange={(e) => SetGender(e.target.value)}className='px-3 py-1.5 rounded-lg outline-none'  style={{ border: '1.5px solid #9ca3af' }}>
                                {Genders.map((option) => (
                                    <option key={option.id} value={option.value}>{option.select}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col w-[90%] gap-1">
                            <label htmlFor="" className='text-lg font-medium'>Age</label>
                            <input type="number" name='Age' required value={Age} onChange={(e) => SetAge(e.target.value)} className='px-3 py-1.5 rounded-lg outline-none' placeholder='Enter Your Age' style={{ border: '1.5px solid #9ca3af' }} />
                        </div>
                        <div className="w-[90%] gap-3 flex flex-col">
                            <div className="flex flex-col w-[100%] gap-1">
                                <label htmlFor="" className='text-lg font-medium'>Password</label>
                                <input type="password" name='Password' required value={Password} onChange={(e) => SetPassword(e.target.value)} className='px-3 py-1.5 rounded-lg outline-none' placeholder='Enter Password' style={{ border: '1.5px solid #9ca3af' }} />
                            </div>
                            <div className="flex flex-col w-[100%] gap-1">
                                <label htmlFor="" className='text-lg font-medium'>Confirm Password</label>
                                <input type="password" name='ConfirmPassword' required value={ConfirmPassword} onChange={(e) => SetConfirmPassword(e.target.value)} className='px-3 py-1.5 rounded-lg outline-none' placeholder='Confirm Password' style={{ border: '1.5px solid #9ca3af' }} />
                            </div>
                            <div className="flex items-center gap-2 w-[100%]">
                                <input type="checkbox" />
                                <p className="text-[#9ca3af] text-[.9rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ratione.</p>
                            </div>
                        </div>
                        <button className='text-xl w-[90%] bg-[#E45352] py-1.5 px-3 text-[#ffffff] font-medium rounded-full'>Create Account</button>
                    </form>
                    <div className="w-[50%] max-lg:w-[100%] ">
                        <img src={Signup_img} alt="" className="w-[100%] h-[100%] rounded-r-3xl max-lg:rounded-r-none max-lg:rounded-t-3xl max-lg:h-[10rem] max-lg:object-cover" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sign_up
