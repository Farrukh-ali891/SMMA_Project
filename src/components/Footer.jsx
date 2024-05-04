import React from 'react'
import NewsLetter from './NewsLetter'

const Footer = () => {
    return (
        <>
            <footer className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% pt-10 border-b-8 border-b-white">
                <div className="container mx-auto">
                    <NewsLetter />
                </div>
                <div className="text-white mt-4 pb-14 container mx-auto relative font-body_font">
                    <div className="md:grid md:grid-cols-3 ml-5">

                        <div >
                            <h6 className="text-2xl font-semibold my-4 font-title_font">Resources</h6>

                            <ul className="space-y-2">
                                <li >
                                    <a href="#" >Home</a>
                                </li>

                                <li >
                                    <a href="#" >How it works</a>
                                </li>

                                <li >
                                    <a href="#" >FAQs</a>
                                </li>

                                <li >
                                    <a href="#" >Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div >
                            <h6 className="text-2xl font-semibold my-4  font-title_font">Information</h6>

                            <p >
                                <a href="#" >
                                    305-240-9671
                                </a>
                            </p>

                            <p >
                                <a href="#">
                                    info@company.com
                                </a>
                            </p>
                        </div>

                        <div >
                            <div className="my-4">
                                <select className="px-3 py-2 rounded-md bg-secondary">
                                    <option className="py-2">English</option>
                                    <option className="py-2">Thai</option>
                                    <option className="py-2">Myanmar</option>
                                    <option className="py-2">Arabix</option>
                                </select>



                            </div>

                            <div>
                                <p >Copyright © 2048 Topic Listing Center. All rights reserved.</p>
                                <p className="my-3">Design: <a href="#">Swirl Marketing</a></p>
                            </div>

                        </div>






                    </div>

                    
                </div>
                <div className="w-full relative">
                        <div className="after:content-[''] w-0 h-0 border-solid border-t-0 border-r-0 lg:border-b-[12.5rem] lg:border-l-[12.5rem] md:border-b-[10rem] md:border-l-[10rem] border-b-[8rem] border-l-[8rem] border-t-transparent border-r-transparent border-b-white border-l-transparent absolute right-0 bottom-0 overflow-x-hidden overflow-y-hidden">
                        </div>

                    </div>

            </footer>
        </>
    )
}

export default Footer