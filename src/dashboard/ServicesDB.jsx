import React from 'react'

const ServicesDB = () => {
    return (
        <>
            <section className="container mx-auto pt-12 font-body_font">
                <div className="flex justify-between items-center md:flex-row flex-col-reverse mx-4">
                    <p className="text-gray-500">You are here: <a href="">Home</a> / <span className="text-gray-800">Services</span></p>

                    <div className="flex items-center  border-2 border-gray-300 rounded-md md:my-0 my-3">
                        <input type="text" placeholder="Search Services" className="bg-gray-100 px-4 py-2 rounded-l-md placeholder:text-gray-500"/>
                        <button className="bg-gray-100 h-10 w-10 rounded-r-md"><i className="ri-search-line text-xl"></i></button>
                    </div>
                </div>

                <div className="text-center mt-14">
                    <h1 className="md:text-5xl text-3xl font-title_font font-semibold tracking-wide text-primary mb-6">Services</h1>
                    <hr className="my-3 border-b-[1px] border-gray-300 mx-2" />
                </div>

                <div className="grid mx-4 lg:grid-cols-4 lg:gap-x-14 lg:gap-y-10 md:grid-cols-3 md:gap-x-10 md:gap-y-5 grid-cols-1 gap-6">

                    {/* SERVICES ITEMS START */}
                    <div className="px-1 pt-1 pb-6 bg-white shadow-lg rounded-md">
                        <img src="src/assests/images/services/digital marketing.png" className='' alt="" />
                        <div className="ml-5 mt-3 text-gray-600">
                            <h1 className="mb-3 text-gray-800 font-semibold font-title_font">Digital Marketing</h1>
                            <p>Customers: 400</p>
                            <p>Rating: 4.9/5</p>
                            <p>Price: 5$/Hr</p>
                        </div>
                        <div className="flex justify-evenly items-center my-4">
                            <i className="ri-pencil-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-delete-bin-7-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-more-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                        </div>
                    </div>
                    {/* SERVICES ITEMS ENDS */}

                    {/* SERVICES ITEMS START */}
                    <div className="px-1 pt-1 pb-6 bg-white shadow-lg rounded-md">
                        <img src="src/assests/images/services/brand marketing.png" className='' alt="" />
                        <div className="ml-5 mt-3 text-gray-600">
                            <h1 className="mb-3 text-gray-800 font-semibold font-title_font">Brand Marketing</h1>
                            <p>Customers: 400</p>
                            <p>Rating: 4.9/5</p>
                            <p>Price: 5$/Hr</p>
                        </div>
                        <div className="flex justify-evenly items-center my-4">
                            <i className="ri-pencil-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-delete-bin-7-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-more-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                        </div>
                    </div>
                    {/* SERVICES ITEMS ENDS */}

                    {/* SERVICES ITEMS START */}
                    <div className="px-1 pt-1 pb-6 bg-white shadow-lg rounded-md">
                        <img src="src/assests/images/services/contentcreater.png" className='' alt="" />
                        <div className="ml-5 mt-3 text-gray-600">
                            <h1 className="mb-3 text-gray-800 font-semibold font-title_font">Content Creator</h1>
                            <p>Customers: 400</p>
                            <p>Rating: 4.9/5</p>
                            <p>Price: 5$/Hr</p>
                        </div>
                        <div className="flex justify-evenly items-center my-4">
                            <i className="ri-pencil-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-delete-bin-7-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-more-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                        </div>
                    </div>
                    {/* SERVICES ITEMS ENDS */}

                    {/* SERVICES ITEMS START */}
                    <div className="px-1 pt-1 pb-6 bg-white shadow-lg rounded-md">
                        <img src="src/assests/images/services/e mail marketing.png" className='' alt="" />
                        <div className="ml-5 mt-3 text-gray-600">
                            <h1 className="mb-3 text-gray-800 font-semibold font-title_font">E-mail Marketing</h1>
                            <p>Customers: 400</p>
                            <p>Rating: 4.9/5</p>
                            <p>Price: 5$/Hr</p>
                        </div>
                        <div className="flex justify-evenly items-center my-4">
                            <i className="ri-pencil-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-delete-bin-7-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-more-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                        </div>
                    </div>
                    {/* SERVICES ITEMS ENDS */}

                    {/* SERVICES ITEMS START */}
                    <div className="px-1 pt-1 pb-6 bg-white shadow-lg rounded-md">
                        <img src="src/assests/images/services/fiverr.png" className='' alt="" />
                        <div className="ml-5 mt-3 text-gray-600">
                            <h1 className="mb-3 text-gray-800 font-semibold font-title_font">Fiverr</h1>
                            <p>Customers: 400</p>
                            <p>Rating: 4.9/5</p>
                            <p>Price: 5$/Hr</p>
                        </div>
                        <div className="flex justify-evenly items-center my-4">
                            <i className="ri-pencil-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-delete-bin-7-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-more-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                        </div>
                    </div>
                    {/* SERVICES ITEMS ENDS */}

                    {/* SERVICES ITEMS START */}
                    <div className="px-1 pt-1 pb-6 bg-white shadow-lg rounded-md">
                        <img src="src/assests/images/services/googl ads.png" className='' alt="" />
                        <div className="ml-5 mt-3 text-gray-600">
                            <h1 className="mb-3 text-gray-800 font-semibold font-title_font">Google Ads</h1>
                            <p>Customers: 400</p>
                            <p>Rating: 4.9/5</p>
                            <p>Price: 5$/Hr</p>
                        </div>
                        <div className="flex justify-evenly items-center my-4">
                            <i className="ri-pencil-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-delete-bin-7-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-more-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                        </div>
                    </div>
                    {/* SERVICES ITEMS ENDS */}

                    {/* SERVICES ITEMS START */}
                    <div className="px-1 pt-1 pb-6 bg-white shadow-lg rounded-md">
                        <img src="src/assests/images/services/our team.png" className='' alt="" />
                        <div className="ml-5 mt-3 text-gray-600">
                            <h1 className="mb-3 text-gray-800 font-semibold font-title_font">Our Team</h1>
                            <p>Customers: 400</p>
                            <p>Rating: 4.9/5</p>
                            <p>Price: 5$/Hr</p>
                        </div>
                        <div className="flex justify-evenly items-center my-4">
                            <i className="ri-pencil-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-delete-bin-7-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-more-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                        </div>
                    </div>
                    {/* SERVICES ITEMS ENDS */}


                    {/* SERVICES ITEMS START */}
                    <div className="px-1 pt-1 pb-6 bg-white shadow-lg rounded-md">
                        <img src="src/assests/images/services/popular.png" className='' alt="" />
                        <div className="ml-5 mt-3 text-gray-600">
                            <h1 className="mb-3 text-gray-800 font-semibold font-title_font">Popularity</h1>
                            <p>Customers: 400</p>
                            <p>Rating: 4.9/5</p>
                            <p>Price: 5$/Hr</p>
                        </div>
                        <div className="flex justify-evenly items-center my-4">
                            <i className="ri-pencil-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-delete-bin-7-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-more-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                        </div>
                    </div>
                    {/* SERVICES ITEMS ENDS */}

                    {/* SERVICES ITEMS START */}
                    <div className="px-1 pt-1 pb-6 bg-white shadow-lg rounded-md">
                        <img src="src/assests/images/services/upworknew.png" className='' alt="" />
                        <div className="ml-5 mt-3 text-gray-600">
                            <h1 className="mb-3 text-gray-800 font-semibold font-title_font">Up Work</h1>
                            <p>Customers: 400</p>
                            <p>Rating: 4.9/5</p>
                            <p>Price: 5$/Hr</p>
                        </div>
                        <div className="flex justify-evenly items-center my-4">
                            <i className="ri-pencil-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-delete-bin-7-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-more-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                        </div>
                    </div>
                    {/* SERVICES ITEMS ENDS */}

                    {/* SERVICES ITEMS START */}
                    <div className="px-1 pt-1 pb-6 bg-white shadow-lg rounded-md">
                        <img src="src/assests/images/services/youtube.png" className='' alt="" />
                        <div className="ml-5 mt-3 text-gray-600">
                            <h1 className="mb-3 text-gray-800 font-semibold font-title_font">Youtube</h1>
                            <p>Customers: 400</p>
                            <p>Rating: 4.9/5</p>
                            <p>Price: 5$/Hr</p>
                        </div>
                        <div className="flex justify-evenly items-center my-4">
                            <i className="ri-pencil-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-delete-bin-7-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                            <i className="ri-more-fill w-10 h-10 flex justify-center items-center cursor-pointer text-xl text-primary hover:text-white hover:bg-primary border-2 border-primary p-2 rounded-full"></i>
                        </div>
                    </div>
                    {/* SERVICES ITEMS ENDS */}
                </div>

                <div className="text-center mt-16 mb-8">
                    <div className="text-primary">
                        <a href="" className="border rounded-tl-md rounded-bl-md border-gray-300 py-2 px-3 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">Previous</a>
                        <a href="" className="border border-gray-300 py-2 px-3 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">1</a>
                        <a href="" className="border border-gray-300 py-2 px-3 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">2</a>
                        <a href="" className="border border-gray-300 py-2 px-3 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">3</a>
                        <a href="" className="border rounded-tr-md rounded-br-md border-gray-300 py-2 px-3 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">Next</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesDB