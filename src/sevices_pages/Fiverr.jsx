import React from 'react'
import PricingPlan from '../components/PricingPlan'
import TestimonialTeam from '../components/TestimonialTeam'

const Fiverr = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font text-white">
                <div className="text-white bg-[url('src/assests/images/banner/fiv-b.jpg')] bg-no-repeat bg-cover h-[28rem] flex flex-col justify-evenly">

                    <div className="w-[80%] mx-auto bg-[#3b3b3b5d] text-center">
                        <h1 className="py-4 text-5xl font-bold tracking-wide text-white font-title_font">Fiverr</h1>
                        <p className="pb-4 text-xl tracking-wide text-white font-title_font">Services / Fiverr</p>
                    </div>
                    <div className="flex justify-center">
                        <a href="" className="absolute px-8 py-2 border-white border-2 text-xl font-bold rounded-xl transition-all ease-in-out duration-300 hover:-translate-y-1">Our Services</a>
                    </div>
                </div>

                <div className="container mx-auto mt-8">
                    <div className="lg:flex lg:space-x-10 my-6 mx-3">
                        <img src="src/assests/images/banner/fiv-p.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
                        <div className="lg:w-[60%] lg:mx-0 mx-4">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 lg:text-left text-center">Diverse Services</h1>
                            <p className="text-lg">Fiverr is an online platform that connects freelancers with clients seeking various digital services. It was founded in 2010 and has since become one of the largest and most popular freelance marketplaces globally. Fiverr's unique approach allows freelancers to offer their services, referred to as "Gigs," starting at a base price of $5, which is where the platform's name originates.</p>

                            <p className="text-lg my-4">Fiverr offers a wide range of services across categories such as graphic design, writing, digital marketing, programming, video editing, voiceovers, music production, and much more.</p>

                            <p className="text-lg">Fiverr has a seller leveling system that categorizes freelancers into different levels based on their performance, completion rates, customer ratings, and other factors. Higher-level sellers tend to have more credibility and visibility on the platform.</p>
                        </div>
                    </div>


                    <div className="lg:flex lg:space-x-10 my-6 mx-3">
                        <div className="lg:w-[60%] lg:mx-0">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 lg:text-left text-center">Fiverr Pro</h1>
                            <p className="text-lg">Fiverr Pro is a premium category that showcases top-tier freelancers who have undergone a rigorous application process. These freelancers are highly skilled and offer premium services at higher price points.</p>

                            <p className="text-lg my-4">Fiverr Business is a feature that allows businesses to manage their team's freelance collaborations within the platform. It provides tools for collaboration, project tracking, and billing.</p>

                            <p className="text-lg">Fiverr handles payments and offers various payment methods, ensuring a secure transaction process for both clients and freelancers.</p>
                        </div>
                        <img src="src/assests/images/banner/fiv-p1.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
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

export default Fiverr