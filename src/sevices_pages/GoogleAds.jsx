import React from 'react'
import PricingPlan from '../components/PricingPlan'
import TestimonialTeam from '../components/TestimonialTeam'

const GoogleAds = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font text-white">
                <div className="text-white bg-[url('src/assests/images/banner/go-b.jpg')] bg-no-repeat bg-cover h-[28rem] flex flex-col justify-evenly">

                    <div className="w-[80%] mx-auto bg-[#3b3b3b5d] text-center">
                        <h1 className="py-4 text-5xl font-bold tracking-wide text-white font-title_font">Google Ads</h1>
                        <p className="pb-4 text-xl tracking-wide text-white font-title_font">Services / Google Ads</p>
                    </div>
                    <div className="flex justify-center">
                        <a href="" className="absolute px-8 py-2 border-white border-2 text-xl font-bold rounded-xl transition-all ease-in-out duration-300 hover:-translate-y-1">Our Services</a>
                    </div>
                </div>

                <div className="container mx-auto mt-8">
                    <div className="lg:flex lg:space-x-10 my-6 mx-3">
                        <img src="src/assests/images/banner/go-p.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
                        <div className="lg:w-[60%] lg:mx-0 mx-4">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 lg:text-left text-center">Google Ads</h1>
                            <p className="text-lg">Google Ads, formerly known as Google AdWords, is a powerful online advertising platform offered by Google. It allows businesses and advertisers to create and display ads across various Google services, websites, and platforms. Google Ads operates on a pay-per-click (PPC) model, where advertisers pay only when users click on their ads.</p>

                            <p className="text-lg my-4">Google Ads supports various ad formats, including text ads, image ads, video ads, responsive ads, and more. These ads can appear on Google Search, Google Display Network, YouTube, and other Google properties.</p>

                            <p className="text-lg my-4">This network includes a vast collection of websites, blogs, and apps where advertisers can display image and video ads. It's a way to reach users who are browsing content relevant to their interests.</p>

                            <p className="text-lg">Google Ads provides metrics like click-through rate (CTR), conversion rate, impression share, average position, and more, allowing advertisers to measure the effectiveness of their campaigns.</p>
                        </div>
                    </div>


                    <div className="lg:flex lg:space-x-10 my-6 mx-3">
                        <div className="lg:w-[60%] lg:mx-0 ">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 lg:text-left text-center">Bid Strategies</h1>
                            <p className="text-lg">Advertisers can choose from various bidding strategies like manual CPC (Cost-Per-Click), automated bidding, target CPA (Cost-Per-Acquisition), and more, depending on their goals.</p>

                            <p className="text-lg my-4">Advertisers can enhance their ads with extensions like site link extensions, callout extensions, location extensions, and more, providing additional information to users.</p>

                            <p className="text-lg">Google assigns a Quality Score to ads based on their relevance, click-through rate (CTR), and landing page experience. A higher Quality Score can result in better ad placements and lower costs.</p>
                        </div>
                        <img src="src/assests/images/banner/go-p1.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
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

export default GoogleAds