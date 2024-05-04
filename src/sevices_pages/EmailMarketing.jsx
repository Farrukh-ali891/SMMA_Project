import React from 'react'
import PricingPlan from '../components/PricingPlan'
import TestimonialTeam from '../components/TestimonialTeam'

const EmailMarketing = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font text-white">
                <div className="text-white bg-[url('src/assests/images/banner/em-b.jpg')] bg-no-repeat bg-cover h-[28rem] flex flex-col justify-evenly">

                    <div className="w-[80%] mx-auto bg-[#3b3b3b5d] text-center">
                        <h1 className="py-4 text-5xl font-bold tracking-wide text-white font-title_font">Email Marketing</h1>
                        <p className="pb-4 text-xl tracking-wide text-white font-title_font">Services / Email Marketing</p>
                    </div>
                    <div className="flex justify-center">
                        <a href="" className="absolute px-8 py-2 border-white border-2 text-xl font-bold rounded-xl transition-all ease-in-out duration-300 hover:-translate-y-1">Our Services</a>
                    </div>
                </div>

                <div className="container mx-auto mt-8">
                    <div className="lg:flex lg:space-x-10 my-6 mx-3">
                        <img src="src/assests/images/banner/em-p.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
                        <div className="lg:w-[60%] lg:mx-0 mx-4">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 lg:text-left text-center">Permission-Based</h1>
                            <p className="text-lg">Email marketing is a digital marketing strategy that involves sending targeted emails to a group of recipients with the goal of building relationships, engaging customers, and driving conversions. It's a powerful tool for businesses to communicate directly with their audience, deliver valuable content, and promote products or services.</p>

                            <p className="text-lg my-4">Effective email marketing begins with obtaining permission from recipients to send them emails. This helps ensure that your messages are well-received and comply with privacy regulations.</p>

                            <p className="text-lg">Building and maintaining segmented subscriber lists allows you to tailor your emails to specific audience segments, increasing relevancy and engagement.</p>
                        </div>
                    </div>


                    <div className="lg:flex lg:space-x-10 my-6 mx-3">
                        <div className="lg:w-[60%] lg:mx-0">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 lg:text-left text-center">More About Email Marketing</h1>
                            <p className="text-lg">Email marketing is a versatile strategy that can be tailored to various business goals and customer segments. When executed effectively, it can nurture leads, retain customers, drive sales, and foster brand loyalty.</p>

                            <p className="text-lg my-4">Tailoring emails based on recipient data, such as their name, purchase history, or location, enhances engagement and makes emails feel more relevant.</p>

                            <p className="text-lg my-4">Providing valuable and engaging content is crucial. Emails should offer information, solutions, entertainment, or incentives that resonate with recipients.</p>

                            <p className="text-lg">Using email marketing platforms, you can automate campaigns triggered by specific actions, such as welcoming new subscribers, sending follow-ups, and re-engaging inactive users.</p>
                        </div>
                        <img src="src/assests/images/banner/em-p1.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
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

export default EmailMarketing