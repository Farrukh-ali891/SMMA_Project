import React from 'react'

const RegisterDB = () => {
    return (
        <>
            <section className="bg-gray-100 font-body_font">
                <div className="container mx-auto pt-14 pb-8">
                    <div className="lg:w-[40%] md:w-[70%] w-[90%] mx-auto py-4 px-2 bg-white rounded-md text-gray-500">
                        <div className="text-center">
                            <a href="" className="text-4xl text-primary_dark font-title_font tracking-wide">Swirl Marketing</a>
                        </div>
                        <form action="" className="mx-auto px-4 pb-6">

                            <div>
                                <label htmlFor="" className="block my-2 font-title_font">Username</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg border-[1px] border-gray-400" placeholder="Username" />
                            </div>

                            <div>
                                <label htmlFor="" className="block my-2 font-title_font">Email Address</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg border-[1px] border-gray-400" placeholder="Email" />
                            </div>

                            <div>
                                <label htmlFor="" className="block my-2 font-title_font">Password</label>
                                <input type="password" className="w-full px-4 py-2 rounded-lg border-[1px] border-gray-400" placeholder="Password" />
                            </div>

                            <div className="my-4">
                                <label htmlFor="terms-&-policy">
                                    <input id="terms-&-policy" type="checkbox" className="self-start accent-secondary w-3 h-3 mr-2 focus:ring-white focus:ring-1" />Agree the terms and policy
                                </label>
                            </div>

                            <button className="w-full py-2 rounded-lg uppercase transition-all duration-300 ease-in-out border-2 border-primary_dark hover:bg-primary_dark hover:text-white my-2">Register</button>
                        </form>

                        <div className="text-center text-white uppercase space-y-4">
                            <a href="" className="block my-2 bg-blue-600 mx-4 py-3 rounded-md">Register with Facebook</a>
                            <a href="" className="block my-2 bg-sky-400 mx-4 py-3 rounded-md">Register with Twitter</a>
                        </div>

                        <div className="text-center">
                            <hr className="border-b-[1px] border-gray-300 my-4" />
                            <p>Already have an account? <a href="" className="text-red-400">Sign In Here</a></p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default RegisterDB