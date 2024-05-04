import React from 'react'
import PricingPlan from '../components/PricingPlan'
import TestimonialTeam from '../components/TestimonialTeam'

const OurTeamService = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font text-white">
                <div className="text-white bg-[url('src/assests/images/banner/ot-b.jpg')] bg-no-repeat bg-cover h-[28rem] flex flex-col justify-evenly">

                    <div className="w-[80%] mx-auto bg-[#3b3b3b5d] text-center">
                        <h1 className="py-4 text-5xl font-bold tracking-wide text-white font-title_font">Our Team</h1>
                        <p className="pb-4 text-xl tracking-wide text-white font-title_font">Services / Our Team</p>
                    </div>

                    <div className="flex justify-center">
                        <a href="" className="absolute px-8 py-2 border-white border-2 text-xl font-bold rounded-xl transition-all ease-in-out duration-300 hover:-translate-y-1">Our Services</a>
                    </div>
                </div>

                <div className="container mx-auto mt-8">
                    <div className="lg:flex lg:space-x-10 my-6 mx-3">
                        <img src="src/assests/images/banner/ot-p.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
                        <div className="lg:w-[60%] lg:mx-0 mx-4">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 lg:text-left text-center">Our Team?</h1>
                            <p className="text-lg">At Social Swirl, our team is a dynamic fusion of creative minds and strategic thinkers, united by a shared passion for crafting compelling narratives in the digital realm. With expertise ranging from content creation and engagement strategies to data analytics and trend forecasting, we're driven by the desire to help businesses thrive in the ever-evolving landscape of social media. Our collaborative spirit, coupled with a deep understanding of platforms and trends, fuels our mission to elevate brands, spark connections, and make an impact that resonates far beyond the screens.</p>

                            <p className="text-lg my-4">Our team is a symphony of innovative storytellers, design virtuosos, and analytics maestros. We thrive on crafting social media magic that transforms likes into love, clicks into conversions, and brands into legends. With a finger on the pulse of trends and an unwavering commitment to creativity, we're the driving force propelling your brand to the forefront of the digital spotlight.</p>
                        </div>
                    </div>


                    {/* PRICING PLAN SECTION START */}

                    <PricingPlan />

                    {/* PRICING PLAN SECTION ENDS */}

                    {/* WHAT DO THEY SAY SECTION START */}

                    <TestimonialTeam />

                    {/* WHAT DO THEY SAY SECTION ENDS */}

                    <div className="text-center py-4">
                        <h1 className="text-4xl font-title_font font-semibold">Do you like what you see?</h1>
                        <p className="text-lg mt-2 mb-10">Tell us about your project and Let's build your project together.</p>
                        <a className="mb-4 bg-secondary py-3 px-5 rounded-lg text-base cursor-pointer transition-all ease-in-out duration-300 hover:bg-secondary_light hover:text-primary_dark">Get a Quote</a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default OurTeamService