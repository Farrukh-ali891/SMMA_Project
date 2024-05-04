import React from 'react'
import PricingPlan from '../components/PricingPlan'
import TestimonialTeam from '../components/TestimonialTeam'

const UpWork = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font text-white">
                <div className="text-white bg-[url('src/assests/images/banner/up-b.jpg')] bg-no-repeat bg-cover h-[28rem] flex flex-col justify-evenly">

                    <div className="w-[80%] mx-auto bg-[#3b3b3b5d] text-center">
                        <h1 className="py-4 text-5xl font-bold tracking-wide text-white font-title_font">Up Work</h1>
                        <p className="pb-4 text-xl tracking-wide text-white font-title_font">Services / Up Work</p>
                    </div>
                    <div className="flex justify-center">
                        <a href="" className="absolute px-8 py-2 border-white border-2 text-xl font-bold rounded-xl transition-all ease-in-out duration-300 hover:-translate-y-1">Our Services</a>
                    </div>
                </div>

                <div className="container mx-auto mt-8">
                    <div className="lg:flex lg:space-x-10 my-6 mx-3">
                        <img src="src/assests/images/banner/up-p.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
                        <div className="lg:w-[60%] lg:mx-0 mx-4">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 md:text-left text-center">Opportunity For Freelancers</h1>
                            <p className="text-lg">Upwork, a pioneer in the world of freelance marketplaces, has revolutionized the way businesses and freelancers collaborate on projects across the globe. Since its inception in 2015 through the merger of Elance and oDesk, Upwork has grown into a powerhouse platform that connects a diverse community of talented freelancers with businesses seeking their expertise.</p>

                            <p className="text-lg my-4">At the heart of Upwork's success is its ability to bridge geographical barriers and facilitate remote work. With a vast array of categories ranging from web development and graphic design to writing and marketing, Upwork accommodates a multitude of skills and industries. Freelancers from all corners of the world can showcase their talents and secure opportunities, while businesses gain access to a pool of global talent that brings diversity and expertise to their projects.</p>

                            <p className="text-lg">In a world where virtual collaboration is more prevalent than ever, Upwork serves as a bridge between talent and opportunity. It embodies the spirit of remote work, innovation, and entrepreneurship, providing a digital canvas where freelancers can craft their careers and businesses can access the expertise they need to thrive in an ever-changing landscape.</p>
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

export default UpWork