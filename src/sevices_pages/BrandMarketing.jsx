import React from 'react'
import PricingPlan from '../components/PricingPlan'
import TestimonialTeam from '../components/TestimonialTeam'

const BrandMarketing = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font text-white">
                <div className="text-white bg-[url('src/assests/images/banner/bm-b.jpg')] bg-no-repeat bg-cover h-[28rem] flex flex-col justify-evenly">

                    <div className="w-[80%] mx-auto bg-[#3b3b3b5d] text-center">
                        <h1 className="py-4 text-5xl font-bold tracking-wide text-white font-title_font">Brand Marketing</h1>
                        <p className="pb-4 text-xl tracking-wide text-white font-title_font">Services / Brand Marketing</p>
                    </div>
                    <div className="flex justify-center">
                        <a href="" className="absolute px-8 py-2 border-white border-2 text-xl font-bold rounded-xl transition-all ease-in-out duration-300 hover:-translate-y-1">Our Services</a>
                    </div>
                </div>

                <div className="container mx-auto mt-8">
                    <div className="lg:flex lg:space-x-10 my-6 mx-3">
                        <img src="src/assests/images/banner/bm-p.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
                        <div className="lg:w-[60%] lg:mx-0 mx-4">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 lg:text-left text-center">Brand Identity</h1>
                            <p className="text-lg">Developing a consistent and visually appealing brand identity through elements like logos, color schemes, typography, and visual style.</p>

                            <p className="text-lg my-4">Brand marketing revolves around establishing a clear and consistent brand identity. This includes visual elements like logos, color schemes, typography, and design elements that create a unique and recognizable look.</p>

                            <p className="text-lg my-4">Brand marketing helps define a brand's position in the market. This involves identifying where the brand fits in relation to competitors and how it addresses the specific needs of its target audience.</p>

                            <p className="text-lg">Building a brand is a long-term endeavor. Effective brand marketing involves creating sustainable strategies that adapt to changing market trends and customer preferences. Brand marketing aims to create strong brand loyalty. Loyal customers not only make repeat purchases but also become advocates who refer others to the brand.</p>
                        </div>
                    </div>


                    <div className="lg:flex lg:space-x-10 my-6 mx-3">
                        <div className="lg:w-[60%] lg:mx-0">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 lg:text-left text-center">Brand Positioning</h1>
                            <p className="text-lg">Brand positioning is a critical strategic element in marketing that defines how a brand is perceived in the minds of consumers relative to its competitors. It's about identifying a unique and favorable place for the brand in the market and crafting a message that communicates this positioning to the target audience.</p>

                            <p className="text-lg my-4">Brand positioning is essential because it differentiates a brand from its competitors. In a crowded market, it's crucial to stand out and offer something distinct that resonates with your target audience.</p>

                            <p className="text-lg">Brand positioning is about carving out a distinct and valuable space for your brand in the minds of consumers. It's a process that requires a deep understanding of your audience, competition, and your brand's strengths to create a memorable and compelling position that resonates with customers.</p>
                        </div>
                        <img src="src/assests/images/banner/bm-p1.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
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

export default BrandMarketing