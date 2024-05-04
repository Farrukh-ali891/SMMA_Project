import React from 'react'

const ServicesList = () => {
    return (
        <>

            <section className="container mx-auto mt-10 font-body_font px-2">
                <div className="mx-2">
                    <p className="text-gray-500 text-sm">You are here: <a href="">Home</a> / <span className="text-gray-800">Services List</span></p>

                </div>

                <table className="w-full md:mx-auto mx-2 shadow-lg rounded-md my-10 text-sm text-left bg-primary_dark text-gray-400">
                    <thead className="text-white font-title_font tracking-wide">
                        <tr>
                            <th className="p-4">Service Title</th>
                            <th className="p-4">Service Category</th>
                            <th className="p-4">Description</th>
                            <th className="p-4">Service Charges</th>
                        </tr>

                    </thead>

                    <tbody className=" bg-white">
                        <tr>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Front-End Developer</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Web-Development</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Html, Css, Js, ReactJs</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">$5/Hr</td>

                        </tr>

                        <tr>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Front-End Developer</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Web-Development</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Html, Css, Js, ReactJs</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">$5/Hr</td>

                        </tr>

                        <tr>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Front-End Developer</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Web-Development</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Html, Css, Js, ReactJs</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">$5/Hr</td>

                        </tr>

                        <tr>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Front-End Developer</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Web-Development</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Html, Css, Js, ReactJs</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">$5/Hr</td>

                        </tr>

                        <tr>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Front-End Developer</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Web-Development</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Html, Css, Js, ReactJs</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">$5/Hr</td>

                        </tr>

                        <tr>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Front-End Developer</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Web-Development</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">Html, Css, Js, ReactJs</td>
                            <td className="py-3 px-5 border-gray-300 border-b-2">$5/Hr</td>

                        </tr>


                    </tbody>
                </table>

                
            </section>

        </>
    )
}

export default ServicesList