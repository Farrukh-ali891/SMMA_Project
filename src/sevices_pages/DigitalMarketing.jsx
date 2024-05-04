import React from 'react'
import PricingPlan from '../components/PricingPlan'
import TestimonialTeam from '../components/TestimonialTeam'

const DigitalMarketing = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font text-white">
                <div className="text-white bg-[url('src/assests/images/banner/dm-b.jpg')] bg-no-repeat bg-cover h-[28rem] flex flex-col justify-evenly">

                    <div className="w-[80%] mx-auto bg-[#3b3b3b5d] text-center ">
                        <h1 className="py-4 text-5xl font-bold tracking-wide text-white font-title_font">Digital Marketing</h1>
                        <p className="pb-4 text-xl tracking-wide text-white font-title_font">Services / Digital Marketing</p>
                    </div>
                    <div className="flex justify-center">
                        <a href="" className="absolute px-8 py-2 border-white border-2 text-xl font-bold rounded-xl transition-all ease-in-out duration-300 hover:-translate-y-1">Our Services</a>
                    </div>
                </div>

                <div className="container mx-auto mt-8">
                    <div className="lg:flex lg:space-x-10 my-6 mx-3">
                        <img src="src/assests/images/banner/dm-p.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
                        <div className="lg:w-[60%] lg:mx-0 mx-4">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 lg:text-left text-center">Pay-Per-Click Advertising</h1>
                            <p className="text-lg">Pay-Per-Click Advertising (PPC) is a powerful digital marketing strategy that allows advertisers to drive targeted traffic to their websites by paying for each click on their ads. This form of online advertising offers a level of precision and control that is unparalleled, enabling businesses to reach their desired audience, generate leads, and boost conversions with a measurable and immediate impact.</p>

                            <p className="text-lg my-4">At the heart of PPC is the concept of bidding on keywords. Advertisers bid on specific keywords relevant to their products or services, and when users search for those keywords on search engines like Google, their ads appear as sponsored search results. The placement of these ads depends on factors like bid amount, ad quality, and relevance to the user's search query. This ensures that ads are shown to users actively seeking information related to what the advertiser offers, increasing the likelihood of meaningful engagement.</p>

                            <p className="text-lg">PPC platforms, like Google Ads, provide advertisers with comprehensive tools to tailor their campaigns to specific audiences. Advertisers can set daily budgets, select target demographics, choose geographic locations, and even schedule when their ads will be displayed. This level of customization ensures that the right message is delivered to the right people at the right time.</p>
                        </div>
                    </div>


                    <div className="lg:flex lg:space-x-10 my-6 mx-3">
                        <div className="lg:w-[60%] lg:mx-0">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 lg:text-left text-center">Brand Recognition</h1>
                            <p className="text-lg">Brand recognition is a fundamental aspect of branding that plays a pivotal role in shaping consumer perceptions and driving business success. It refers to the degree to which a target audience can identify and associate a brand with its specific attributes, values, and offerings. In essence, brand recognition is about being instantly recognizable and memorable in the minds of consumers.</p>

                            <p className="text-lg my-4">The importance of brand recognition cannot be overstated. In a crowded marketplace where consumers are bombarded with choices, brands that are easily recognized and distinguished have a distinct competitive advantage. A strong brand recognition strategy fosters a sense of familiarity and trust among consumers, making them more likely to choose a recognizable brand over unfamiliar alternatives.</p>

                            <p className="text-lg">In a world where consumer choices are abundant, brand recognition is a beacon that guides consumers toward familiar and trusted choices. It's a powerful asset that not only drives sales and market share but also builds enduring relationships between brands and their audiences.</p>
                        </div>
                        <img src="src/assests/images/banner/dm-p1.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
                    </div>


                    <div className="lg:flex lg:space-x-10 my-6 mx-3">
                        <img src="src/assests/images/banner/dm-p2.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
                        <div className="lg:w-[60%] lg:mx-0 mx-4">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 lg:text-left text-center">Online Public Relations (PR)</h1>
                            <p className="text-lg">Online Public Relations (PR) has emerged as a transformative force in the digital age, reshaping how businesses and individuals manage their public image and relationships with their audiences. Rooted in the principles of traditional PR, online PR harnesses the power of digital platforms to engage, influence, and connect with target audiences in a dynamic and interactive manner.</p>

                            <p className="text-lg mt-4">Online PR involves strategic communication efforts that leverage online channels such as social media, blogs, news websites, forums, and influencer collaborations. Its aim is to create a positive perception of a brand, mitigate negative publicity, and cultivate meaningful relationships with stakeholders.</p>
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

export default DigitalMarketing