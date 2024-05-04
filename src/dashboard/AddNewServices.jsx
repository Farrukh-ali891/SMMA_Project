import React from 'react'

const AddNewServices = () => {
    return (
        <>
            <section className="container mx-auto mt-10 font-body_font px-2">
                <div>
                    <p className="text-gray-500 text-sm">You are here: <a href="">Home</a> / <span className="text-gray-800">Add new Services</span></p>
                </div>
                <div className="text-center mt-10 mb-16">
                    <h1 className="md:text-4xl text-3xl font-title_font text-primary_dark font-semibold pb-4">Add New Service</h1>
                    <hr className="mb-4 border-2 border-b-2 border-gray-300 mx-2" />

                    <form action="" className="bg-white lg:w-[50%] md:w-[70%] w-[98%] mx-auto mt-5 px-4 py-10 shadow-lg text-gray-600">
                        <div className="bg-primary_dark px-4 py-14 rounded-lg mb-4 cursor-pointer">
                            <img src="src/assests/images/swirl marketing logo.png" className="w-[50%] mx-auto" alt="" />
                        </div>

                        <div className="space-y-1 text-gray-500 my-4">
                            <label htmlFor="" className="block text-left">Service Name</label>
                            <input type="text" className='rounded-md px-6 py-4 w-full border-gray-300 border-[1px]' placeholder="Enter Service Name" />
                        </div>

                        <div className="space-y-1 text-gray-500 my-4">
                            <label htmlFor="" className="block text-left">Service Description</label>
                            <input type="text" className='rounded-md px-6 py-4 w-full border-gray-300 border-[1px]' placeholder="Enter Service Description" />
                        </div>

                        <div className="space-y-1 text-gray-500 my-4">
                            <label htmlFor="" className="block text-left">Service Category</label>
                            <input type="text" className='rounded-md px-6 py-4 w-full border-gray-300 border-[1px]' placeholder="Enter Service Category" />
                        </div>

                        <div className="space-y-1 text-gray-500 my-4">
                            <label htmlFor="" className="block text-left">Service Charges</label>
                            <input type="text" className='rounded-md px-6 py-4 w-full border-gray-300 border-[1px]' placeholder="Enter Service Charges" />
                        </div>

                        <button type="submit" className="w-full mt-6 border-2 border-primary_dark py-2 rounded-xl text-xl transition-all duration-300 ease-in-out hover:bg-primary_dark hover:text-white">Add Service</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default AddNewServices