import React from 'react'
import PricingPlan from '../components/PricingPlan'
import TestimonialTeam from '../components/TestimonialTeam'

const ContentCreator = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font text-white">
                <div className="text-white bg-[url('src/assests/images/banner/content-b.jpg')] bg-no-repeat bg-cover h-[28rem] flex flex-col justify-evenly">

                    <div className="w-[80%] mx-auto bg-[#3b3b3b5d] text-center ">
                        <h1 className="py-4 text-5xl font-bold tracking-wide text-white font-title_font">Content Creator</h1>
                        <p className="pb-4 text-xl tracking-wide text-white font-title_font">Services / Content Creator</p>
                    </div>
                    <div className="flex justify-center">
                        <a href="" className="absolute px-8 py-2 border-white border-2 text-xl font-bold rounded-xl transition-all ease-in-out duration-300 hover:-translate-y-1">Our Services</a>
                    </div>
                </div>

                <div className="container mx-auto mt-8">
                    <div className="lg:flex lg:space-x-10 my-6 mx-3">
                        <img src="src/assests/images/banner/bm-p.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
                        <div className="lg:w-[60%] lg:mx-0 mx-4">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 lg:text-left text-center">The Art of Content Writing</h1>
                            <p className="text-lg">Writing engaging content is a dynamic art form that combines creativity and planning to reach consumers on a variety of media. Effective content writing has the ability to fascinate, inform, and inspire readers whether it is a blog post, a social media caption, or website copy.</p>

                            <p className="text-lg my-4">Writing content is fundamentally about forging connections. Content writers close the knowledge gap by using well crafted language and engrossing storytelling. They write captivating stories that keep readers engaged from the opening line to the final word.</p>

                            <p className="text-lg">A careful balance must be struck between creativity and strategy in effective content production. Each piece of content is carefully crafted to appeal to the target market and present information in a way that inspires action. The interaction of creativity and strategy makes sure that the material both attracts attention and leads to the intended results.</p>
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

export default ContentCreator