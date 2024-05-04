import React from 'react'

const SignUp = () => {
  return (
    <>

            <div className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font text-white h-screen pt-1">
                <div className="container mx-auto text-center  xl:w-[40%] lg:w-[60%] md:w-[80%] w-full">
                    <h1 className="text-5xl font-semibold leading-snug">Welcome     To <br /> <a href="" className="animate-textReveal">Swirl Marketing</a></h1>
                    <hr className="border-b-4 border-purple-600 w-[25%] mx-auto my-5" />
                    <p className="text-xl w-[70%] mx-auto">Please, provide Sign Up credential to proceed and have access to all our services</p>

                    <form action="" className="py-10">
                        <div className="relative">
                            <i className="ri-mail-fill absolute text-gray-500 top-[30%] left-[20%] text-lg transition-colors ease-in-out"></i>
                            <input type="text" className="w-[70%] my-3 py-3 pl-16 rounded-full bg-gray-200 text-gray-900 placeholder:text-gray-500 placeholder:text-lg placeholder:tracking-wider" placeholder="Email" />
                        </div>
                        <div className="relative">
                            <i className="ri-user-3-fill absolute text-gray-500 top-[30%] left-[20%] text-lg transition-colors ease-in-out"></i>
                            <input type="text" className="w-[70%] my-3 py-3 pl-16 rounded-full bg-gray-200 text-gray-900 placeholder:text-gray-500 placeholder:text-lg placeholder:tracking-wider" placeholder="Username" />
                        </div>
                        <div className="relative">
                            <i className="ri-lock-2-fill absolute text-gray-500 top-[30%] left-[20%] text-lg transition-colors ease-in-out"></i>
                            <input type="password" className="w-[70%] my-3 py-3 pl-16 rounded-full bg-gray-200 text-gray-900 placeholder:text-gray-500 placeholder:text-lg placeholder:tracking-wider" placeholder="Password"/>
                        </div>
                        <div className="relative">
                            <i className="ri-lock-2-fill absolute text-gray-500 top-[30%] left-[20%] text-lg transition-colors ease-in-out"></i>
                            <input type="password" className="w-[70%] my-3 py-3 pl-16 rounded-full bg-gray-200 text-gray-900 placeholder:text-gray-500 placeholder:text-lg placeholder:tracking-wider" placeholder="Confirm Password"/>
                        </div>
                        <button type="submit" className="block mx-auto bg-gradient-to-r from-[#8b33c5] to-[#15a0e1] px-20 py-3 my-8 text-lg font-semibold tracking-widest rounded-full uppercase transition-all ease-in-out duration-300 hover:-translate-y-1">Sign Up</button>
                        <p className="text-base tracking-wide">Already have an account? <a href="" className="underline hover:text-gray-400">Login</a></p>
                    </form>
                </div>
            </div>
        </>
  )
}

export default SignUp