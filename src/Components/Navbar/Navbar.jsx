import React, { useState } from 'react'
import logo from './Images/logo.png'
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import profile from './Images/profile.jpeg'

const Navbar = () => {
    const[mode,setmode]=useState(false)
    function change(){
        let hamburg=document.getElementById('Hamburg')
        let cross=document.getElementById('Cross')
        let Menu=document.getElementById('Menu')
        if(mode==false){
            hamburg.style.display='none'
            cross.style.display='flex'
            Menu.style.display='flex'
            setmode(true)
        }else{
            hamburg.style.display='flex'
            cross.style.display='none'
            Menu.style.display='none'
            setmode(false)
        }
    }
    function changeli(){
        hamburg.style.display='flex'
        cross.style.display='none'
        Menu.style.display='none'
        setmode(false)
    }

    return (
        <>
            <div className="flex flex-col z-50 w-[100%] fixed bg-[#bfbfbfc8] items-center px-5  pb-1 gap-5 max-lg:px-2 max-lg:py-2 max-lg:relative">
                <div className="w-[100%] flex items-center justify-between    ">
                    <div className="">
                        <img src={logo} alt="" className="w-24" />
                    </div>
                    <ul className="flex gap-10 max-lg:hidden ">
                        <NavLink to='/' 
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "#E45352" : 'black'
                            }
                        }}
                        className="text-lg font-medium cursor-pointer hover:text-[#E45352]">Home</NavLink>
                        <NavLink to='/Events'
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "#E45352" : 'black'
                            }
                        }}
                         className="text-lg font-medium cursor-pointer hover:text-[#E45352]">Events</NavLink>
                        <NavLink to='/About_Us'
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "#E45352" : 'black'
                            }
                        }}
                         className="text-lg font-medium cursor-pointer hover:text-[#E45352]">About Us</NavLink>
                        <NavLink to='/News'
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "#E45352" : 'black'
                            }
                        }}
                         className="text-lg font-medium cursor-pointer hover:text-[#E45352]">News</NavLink>
                        <NavLink to='/Contact'
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "#E45352" : 'black'
                            }
                        }}
                         className="text-lg font-medium cursor-pointer hover:text-[#E45352]">Contact Us</NavLink>
                    </ul>
                    <div className="flex w-[25%] gap-3 rounded-3xl p-1.5 items-center max-lg:hidden" style={{ border: '2px solid black' }}>
                        <FiSearch className='text-2xl text-[#585858]' />
                        <input type="text" placeholder='Search for Player/Organizer/Events' className='outline-none bg-transparent  w-[90%]' />
                    </div>
                    {/* <div className="w-[18%] flex gap-7 max-lg:w-auto max-lg:gap-5 items-center">
                        <NavLink to='/login' className='text-xl bg-[#E45352] py-1.5 px-3 text-[#ffffff] font-medium rounded-full'>LOGIN</NavLink>
                        <NavLink to='/signup' className='text-xl bg-[#E45352] py-1.5 px-3 text-[#ffffff] font-medium rounded-full'>Sign Up</NavLink>
                    </div> */}
                    <div className="w-[18%] flex gap-4 max-lg:w-auto max-lg:gap-5 items-center">
                        <p className="text-lg font-semibold">Welcome Smith</p>
                        <img src={profile} alt="" className="w-[4.2rem] h-[4.2rem] object-cover rounded-full" style={{border:'2px solid #1cc800'}} />

                    </div>
                    <div onClick={change} className=" hidden max-lg:flex">
                        <RxHamburgerMenu id='Hamburg' className='text-3xl hidden max-lg:flex ' />
                        <RxCross1 id='Cross' className='text-3xl hidden max-lg:hidden ' />
                    </div>
                </div>
                <div className="hidden w-[90%] gap-3 rounded-3xl p-1.5 items-center max-lg:flex " style={{ border: '2px solid black' }}>
                    <FiSearch className='text-2xl text-[#585858]' />
                    <input type="text" placeholder='Search for Player/Organizer/Events' className='outline-none bg-transparent  w-[90%]' />
                </div>
                <ul id='Menu' className="hidden gap-5 max-lg:flex-col max-lg:hidden">
                        <NavLink to='/' onClick={changeli} className="text-lg font-semibold cursor-pointer hover:text-[#E45352]">Home</NavLink>
                        <NavLink to='/Events' onClick={changeli} className="text-lg font-semibold cursor-pointer hover:text-[#E45352]">Events</NavLink>
                        <NavLink to='/About_Us' onClick={changeli} className="text-lg font-semibold cursor-pointer hover:text-[#E45352]">About Us</NavLink>
                        <NavLink to='/News' onClick={changeli} className="text-lg font-semibold cursor-pointer hover:text-[#E45352]">News</NavLink>
                        <NavLink to='/Contact' onClick={changeli} className="text-lg font-semibold cursor-pointer hover:text-[#E45352]">Contact Us</NavLink>
                    </ul>
            </div>
        </>
    )
}

export default Navbar
export {logo}
