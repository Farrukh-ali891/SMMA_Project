import React from 'react'

const NewsLetter = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65%">
                <section className="pb-24 pt-28 md:flex justify-between  text-white md:mx-6 mx-3 font-body_font">
                    <div className="md:w-[30%] md:text-left text-center md:my-0 my-4">
                        <h1 className="text-3xl capitalize font-semibold font-title_font mb-1">Sign Up For Newsletters</h1>
                        <p>Get E-mail updates about our latest <span className="font-semibold">UPDATES!</span></p>
                    </div>
                    <div className="md:w-[40%] h-12 flex items-center">
                        <input type="email" placeholder="Your Email Address" className="py-2 px-4 w-[75%] h-full rounded-l-lg text-gray-800" />
                        <button className="w-[28%] h-full py-2 px-4 md:text-sm text-[0.8rem]  bg-secondary rounded-r-lg">Sign Up</button>
                        {/* xl:h-[70%] md:h-[50%] */}

                    </div>
                </section>
            </div>
        </>
    )
}

export default NewsLetter