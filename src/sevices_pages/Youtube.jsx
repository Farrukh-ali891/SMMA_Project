import React from 'react'
import PricingPlan from '../components/PricingPlan'
import TestimonialTeam from '../components/TestimonialTeam'

const Youtube = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font text-white">
                <div className="text-white bg-[url('src/assests/images/banner/yt-b.jpg')] bg-no-repeat bg-cover h-[28rem] flex flex-col justify-evenly">

                    <div className="w-[80%] mx-auto bg-[#3b3b3b5d] text-center">
                        <h1 className="py-4 md:text-5xl text-3xl font-bold tracking-wide text-white font-title_font">Youtube</h1>
                        <p className="pb-4 text-xl tracking-wide text-white font-title_font">Services / Youtube</p>
                    </div>
                    <div className="flex justify-center">
                        <a href="" className="absolute px-8 py-2 border-white border-2 text-xl font-bold rounded-xl transition-all ease-in-out duration-300 hover:-translate-y-1">Our Services</a>
                    </div>
                </div>

                <div className="container mx-auto mt-8">
                    <div className="lg:flex lg:space-x-10 my-6 mx-3">
                        <img src="src/assests/images/banner/yt-p.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
                        <div className="lg:w-[60%] lg:mx-0 mx-4">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 md:text-left text-center">Youtube</h1>
                            <p className="text-lg">YouTube, the behemoth of online video sharing, has transformed the way we consume and interact with visual content. From its humble beginnings in 2005, it has grown into a global phenomenon, reshaping entertainment, education, and even the way businesses engage with their audiences. As a platform that houses a diverse array of videos, it has become a digital canvas where creators, artists, educators, and storytellers paint their narratives for the world to see.</p>

                            <p className="text-lg my-4">YouTube's impact reaches far beyond viral cat videos and music hits. It has become an integral part of modern education, hosting a wealth of tutorials, lectures, and how-to guides that empower learners of all ages. This democratization of knowledge has transcended geographical boundaries, providing anyone with an internet connection the opportunity to access a world of expertise.</p>
                        </div>
                    </div>


                    <div className="lg:flex lg:space-x-10 my-6">
                        <div className="lg:w-[60%] lg:mx-0 mx-3">
                            <h1 className="text-5xl font-semibold mt-2 mb-6 md:text-left text-center">Content Creater</h1>
                            <p className="text-lg">For content creators, YouTube has become a stage where creativity knows no bounds. From makeup tutorials and cooking shows to tech reviews and vlogs, the platform empowers individuals to turn their passions into professions. The notion of "YouTuber" has become a legitimate career path, exemplifying the power of personal branding and digital entrepreneurship.</p>

                            <p className="text-lg my-4">Businesses have also recognized the potential of YouTube as a marketing tool. With over 2 billion logged-in monthly users, it offers an extensive audience reach. Video ads, product demos, and branded content find a home on this platform, leveraging its engaging format to forge connections with consumers in a more interactive and immersive way.</p>

                            <p className="text-lg">As YouTube continues to evolve, it holds a mirror to our digital society's evolution. It showcases the power of storytelling, the democratization of content creation, and the impact of visuals on communication. YouTube has become not just a platform, but a cultural phenomenon that reflects our shared experiences, passions, and the limitless potential of the digital age.</p>
                        </div>
                        <img src="src/assests/images/banner/yt-p1.jpg" className="lg:w-[40%] lg:my-0 lg:block hidden my-4 w-[80%] mx-auto rounded-md" alt="" />
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

export default Youtube