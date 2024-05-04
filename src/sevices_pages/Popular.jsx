import React from 'react'
import PricingPlan from '../components/PricingPlan'
import TestimonialTeam from '../components/TestimonialTeam'

function Popular() {
    return (
        <>
            <section className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font text-white">
                <div className="text-white bg-[url('src/assests/images/banner/pop-b.jpg')] bg-no-repeat bg-cover h-[28rem] flex flex-col justify-evenly">

                    <div className="w-[80%] mx-auto bg-[#3b3b3b5d] text-center">
                        <h1 className="py-4 text-5xl font-bold tracking-wide text-white font-title_font">Popular</h1>
                        <p className="pb-4 text-xl tracking-wide text-white font-title_font">Services / Popular</p>
                    </div>
                    <div className="flex justify-center">
                        <a href="" className="absolute px-8 py-2 border-white border-2 text-xl font-bold rounded-xl transition-all ease-in-out duration-300 hover:-translate-y-1">Our Services</a>
                    </div>
                </div>

                <div className="container mx-auto mt-8">
                    <div className="lg:flex lg:space-x-10 my-6 mx-3">
                        <img src="src/assests/images/banner/pop-p.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
                        <div className="lg:w-[60%] lg:mx-0 mx-4">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 lg:text-left text-center">Brand Identity</h1>
                            <p className="text-lg">Social popularity is the digital currency of our interconnected world. In an era where social media platforms serve as the global stage for self-expression and communication, achieving social popularity holds immense significance. It's not merely about amassing followers, likes, or shares; it's about creating a magnetic presence that resonates with audiences on a personal level.</p>

                            <p className="text-lg my-4">The journey to social popularity is paved with authenticity and relatability. Brands and individuals alike must curate content that aligns with the values, aspirations, and interests of their target audience. This authenticity is the cornerstone of building a genuine connection that transcends the digital realm and becomes a part of people's lives.</p>

                            <p className="text-lg">Ultimately, social popularity is a reflection of resonance. It's about resonating with the hopes, dreams, and curiosities of a digital audience that seeks connection and inspiration. Whether it's a brand making a meaningful impact or an individual sharing their journey, the allure of social popularity lies in the power to inspire, influence, and leave a lasting imprint on the ever-evolving canvas of the digital landscape.</p>
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

export default Popular