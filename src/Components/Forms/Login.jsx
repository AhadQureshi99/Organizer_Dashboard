import React, { useState } from 'react'
import { logo } from '../Navbar/Navbar'
import Login_img from './Images/login.png'
import google from './Images/Google.png'
import facebook from './Images/facebook.png'

const Login = () => {
    const [Email, SetEmail] = useState('')
    const [Password, SetPassword] = useState('')
    const submitdata = (e) => {
        e.preventDefault();
        const data = {
            Email,
            Password,
        }
        console.log(data);
        alert('Login SuccessFully')
    }
    return (
        <>
            <div className="bg-black absolute top-0 -bottom-88 left-0 right-0  w-[100%] z-[999999] max-lg:-bottom-96 ">
                <div className="w-[90%] flex rounded mx-auto max-lg:flex-col-reverse">
                    <form onSubmit={submitdata} action="" className="w-[50%] bg-[#ffffff] flex flex-col py-28 justify-center items-center gap-5 rounded-l-3xl max-lg:py-8 max-lg:w-[100%] max-lg:rounded-l-none max-lg:rounded-bl-3xl max-lg:rounded-b-3xl ">
                        <img src={logo} alt="" className="w-20" />
                        <h1 className="text-3xl font-medium">Login Now</h1>
                        <div className="flex flex-col w-[90%] gap-1">
                            <label htmlFor="" className='text-xl font-medium'>Email Address</label>
                            <input type="email" name='Email' required value={Email} onChange={(e) => SetEmail(e.target.value)} className='px-3 py-1.5 rounded-full' placeholder='Enter Email Address' style={{ border: '1.5px solid #9ca3af' }} />
                        </div>
                        <div className="w-[90%] gap-3 flex flex-col">
                            <div className="flex flex-col w-[100%] gap-1">
                                <label htmlFor="" className='text-xl font-medium'>Password</label>
                                <input type="password" name='Password' required value={Password} onChange={(e) => SetPassword(e.target.value)} className='px-3 py-1.5 rounded-full' placeholder='Enter Password' style={{ border: '1.5px solid #9ca3af' }} />
                            </div>
                            <div className="flex justify-between">
                                <div></div>
                                <div className="text-[#9ca3af] underline cursor-pointer">Forget Password</div>
                            </div>
                        </div>
                        <button className='text-xl w-[90%] bg-[#E45352] py-1.5 px-3 text-[#ffffff] font-medium rounded-full'>Login Now</button>
                        <div className="flex flex-col justify-center items-center gap-5 w-[90%]">
                            <h1 className=""><span className="font-semibold">Login</span> With Others</h1>
                            <div className="flex justify-center cursor-pointer items-center w-full p-1.5 gap-2 rounded-full" style={{ border: '1.5px solid #9ca3af33' }}>
                                <img src={google} alt="" className="w-7" />
                                <p className="">Login with <span className='font-semibold'>google</span></p>
                            </div>
                            <div className="flex justify-center cursor-pointer items-center w-full p-1.5 gap-2 rounded-full" style={{ border: '1.5px solid #9ca3af33' }}>
                                <img src={facebook} alt="" className="w-7" />
                                <p className="">Login with <span className='font-semibold'>facebook</span></p>
                            </div>
                        </div>
                    </form>
                    <div className="w-[50%] max-lg:w-[100%]">
                        <img src={Login_img} alt="" className="w-[100%] h-[100%] rounded-r-3xl max-lg:rounded-r-none max-lg:rounded-t-3xl max-lg:h-[20rem] max-lg:object-cover " />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
