import React from 'react'

const ContactUs = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font text-white">
                <section className="container mx-auto text-center pt-10">
                    <h1 className="text-4xl mb-2">Let's Contact With Us</h1>
                    <p className="text-lg">Don't Hesitate to Reach Out</p>
                </section>

                <section className="container mx-auto md:w-[70%] w-[90%] pt-14 text-gray-800">
                    <div className="md:flex md:justify-between md:space-x-4 md:space-y-0 space-y-3 my-2">
                        <input type="text" className="w-full px-6 py-4 rounded-xl" placeholder="Your Name*" required />
                        <input type="email" className="w-full px-6 py-4 rounded-xl" placeholder="Email Address*" required />

                    </div>
                    <div className="md:flex md:justify-between md:space-x-4 md:space-y-0 space-y-3 my-2">
                        <input type="text" className="w-full px-6 py-4 rounded-xl" placeholder="Subject" />
                        <input type="number" className="w-full px-6 py-4 rounded-xl" placeholder="Phone Number" />
                    </div>
                    <textarea rows="5" className="w-full rounded-xl px-6 py-4" placeholder="Your message...*" required></textarea>
                    <div className="my-4">
                        <iframe className="google-map rounded-lg" src="https://maps.google.com/maps?q=Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="250" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="flex items-center mt-4 text-white">
                        <input type="checkbox" className="mr-2 w-3 h-3 accent-secondary focus:ring-white focus:ring-1" />
                        <p>Accept <a href="" className="text-secondary hover:underline hover:text-gray-500">Terms of Services</a> and <a href="" className="text-secondary hover:underline hover:text-gray-500">Privacy Policy</a></p>
                    </div>
                    <button type="submit" className="mt-10 text-white bg-secondary py-3 px-5 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md text-base transition-all ease-in-out duration-300 hover:bg-secondary_light hover:text-primary_dark">Send Message</button>
                </section>
            </div>
        </>
    )
}

export default ContactUs