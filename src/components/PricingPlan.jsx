import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const PricingPlan = () => {

    useEffect(() => {
        AOS.init()

    }, []);
    return (
        <>
            <section className="text-white text-center mt-40 font-body_font">
                <h1 className="mb-4 text-4xl capitalize font-bold font-title_font">Pricing Plans</h1>
                <p className="my-4 text-lg md:w-[50%] md:mx-auto mx-2">Solutions tailored to your needs, backed by transparent pricing. Choose from our range of pricing plans designed to match your goals and budget. Empower your journey with value-driven options that ensure you get the most out of every investment.</p>

            </section>

            <section className="grid md:grid-cols-3 grid-cols-1 gap-5 my-10 font-body_font">

                {/* PLAN NUMBER 1 */}
                <div className="text-center bg-[#eee] px-4 py-6 rounded-lg mx-3" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="capitalize text-[#021892] my-4 text-lg font-normal">Starter</h1>
                    <div>
                        <div className="bg-[#021892] p-4 mx-4 rounded-3xl text-white">
                            <span className="text-3xl">$</span>
                            <span className="text-3xl">14.50</span>
                            <p className="capitalize">monthly</p>
                        </div>
                        <ul className="text-gray-500 my-5 text-base/loose">
                            <li>60 GB space</li>
                            <li>600 GB transfer</li>
                            <li>Pro Design Panel</li>
                            <li className="line-through">15-minute support</li>
                            <li className="line-through">Unlimited Emails</li>
                            <li className="line-through">24/7 Security</li>
                        </ul>
                    </div>
                    <div className="mt-14 mb-4">
                        <a className="py-3 px-6 text-white bg-[#0870ed] rounded-full cursor-pointer text-base transition-all ease-in-out duration-300 hover:bg-[#67abff] hover:text-[#01126c]">Purchase Now</a>
                    </div>

                </div>

                {/* PLAN NUMBER 2 */}
                <div className="text-center bg-[#eee] px-4 py-6 rounded-lg mx-3" data-aos="fade-up" data-aos-duration="2000">
                    <h1 className="capitalize text-[#0870ed] my-4 text-lg font-normal">Premium</h1>
                    <div>
                        <div className="bg-[#0870ed] p-4 mx-4 rounded-3xl text-white">
                            <span className="text-3xl">$</span>
                            <span className="text-3xl">21.50</span>
                            <p className="capitalize">monthly</p>
                        </div>
                        <ul className="text-gray-500 my-5 text-base/loose">
                            <li>120 GB space</li>
                            <li>1200 GB transfer</li>
                            <li>Pro Design Panel</li>
                            <li>15-minute support</li>
                            <li className="line-through">Unlimited Emails</li>
                            <li className="line-through">24/7 Security</li>
                        </ul>
                    </div>
                    <div className="mt-14 mb-4">
                        <a className="py-3 px-6 text-white bg-[#0870ed] rounded-full cursor-pointer text-base transition-all ease-in-out duration-300 hover:bg-[#67abff] hover:text-[#01126c]">Purchase Now</a>
                    </div>

                </div>

                {/* PLAN NUMBER 3 */}
                <div className="text-center bg-[#eee] px-4 py-6 rounded-lg mx-3" data-aos="fade-up" data-aos-duration="3000">
                    <h1 className="capitalize text-[#021892] my-4 text-lg font-normal">Advanced</h1>
                    <div>
                        <div className="bg-[#021892] p-4 mx-4 rounded-3xl text-white">
                            <span className="text-3xl">$</span>
                            <span className="text-3xl">42.00</span>
                            <p className="capitalize">monthly</p>
                        </div>
                        <ul className="text-gray-500 my-5 text-base/loose">
                            <li>250 GB space</li>
                            <li>5000 GB transfer</li>
                            <li>Pro Design Panel</li>
                            <li>15-minute support</li>
                            <li>Unlimited Emails</li>
                            <li>24/7 Security</li>
                        </ul>
                    </div>
                    <div className="mt-14 mb-4">
                        <a className="py-3 px-6 text-white bg-[#0870ed] rounded-full cursor-pointer text-base transition-all ease-in-out duration-300 hover:bg-[#67abff] hover:text-[#01126c]">Purchase Now</a>
                    </div>

                </div>
            </section>

        </>
    )
}

export default PricingPlan