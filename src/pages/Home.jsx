import React, { useEffect } from 'react'
import StrategySlider from '../components/StrategySlider'
import TestimonialTeam from '../components/TestimonialTeam'
import PricingPlan from '../components/PricingPlan'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(() => {
        AOS.init({duration: 1500})
    }, [])

    return(
        <>
        <main className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font">
            <div className="container mx-auto">

                {/* TOP SECTION START */}
                <section className="w-full text-white text-center py-5">

                    <h1 className="mb-8 mt-[8%] mx-6 md:text-4xl text-3xl md:leading-loose tracking-tight capitalize font-title_font">
                        We provide the best <span className="font-bold">strategy</span>
                        <br /> to grow up your <span className="font-bold">business</span>
                    </h1>
                    <p className="mb-5 md:w-[50%] md:mx-auto mx-3">Join us in crafting conversations that matter. Empower your brand through meaningful engagement and social influence</p>
                    <a className="my-4 bg-secondary py-3 px-5 rounded-full text-base cursor-pointer transition-all ease-in-out duration-300 hover:bg-secondary_light hover:text-primary_dark">Get Quote</a>

                </section>
                {/* TOP SECTION ENDS */}

                {/* STRATAGIES SWIPPER START */}
                <div className="mt-10 mb-20 mx-4">
                    <StrategySlider />
                </div>

                {/* STRATAGIES SWIPPER ENDS */}

                {/* MID SECTION START */}
                <section className="md:flex md:justify-around mt-8">
                    <img src="/src/assests/images/int2.png" className="md:w-[40%] md:m-4 w-[70%] mx-auto" alt="" data-aos="fade-right"/>

                    <div className="self-center m-5 text-white md:text-left text-center md:w-[40%]">
                        <h1 className="mb-4 text-3xl capitalize font-bold font-title_font">Let's discuss about your project</h1>
                        <p className="md:w-[80%] text-xl tracking-wider">Your project is our focus. We're eager to delve into the details, understand your vision, and collaborate to bring it to life. Let's start a conversation that leads to your project's success.</p>
                    </div>
                </section>

                <hr className="w-[90%] mx-auto" />

                <section className="md:flex md:justify-around mt-16">

                    <div className="self-center m-5 text-white md:text-left text-center md:w-[40%]">
                        <h1 className="mb-4 text-3xl capitalize font-bold font-title_font">We can help you to grow your business</h1>
                        <p className="md:w-[80%] text-xl tracking-wider">Experience exponential growth for your business with our tailored solutions. Let our expertise pave the way for your success as we work together to expand your brand, reach new audiences, and achieve your goals.</p>
                    </div>

                    <img src="/src/assests/images/help.png" className="md:w-[40%] md:m-4 w-[70%] mx-auto" alt="" data-aos="fade-left"/>
                </section>
                {/* MID SECTION ENDS */}

                {/* WORKS PROCESS START */}
                <section className="text-white text-center mt-40">
                    <h1 className="mb-4 text-4xl capitalize font-bold font-title_font">Work Process</h1>
                    <p className="my-4 text-lg md:w-[50%] md:mx-auto mx-2">The use of a streamlined approach to achieve success. In order to transform concepts into effective results, we carefully analyze, strategies, and carry them out. Journey with us as we innovate and work together to attain our goals.</p>

                </section>

                <section className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 md:gap-8 mx-4 my-10">
                    <div className="flex justify-center">
                        <div className="w-48 p-3 bg-white text-black text-center rounded-2xl mini-box md:my-0 my-5 cursor-pointer transition ease-in-out hover:-translate-y-3 duration-300">
                            <img src="/src/assests/images/work process icons/ideas.png" className="w-14 mx-auto" alt="" />
                            <h2 className="my-2 text-lg">Get Ideas</h2>
                            <p className="text-gray-500">Godard pabst prism fam cliche.</p>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <div className="w-48 p-3 bg-white text-black text-center rounded-2xl mini-box md:my-0 my-5 cursor-pointer transition ease-in-out hover:-translate-y-3 duration-300">
                            <img src="/src/assests/images/work process icons/sketch.png" className="w-14 mx-auto" alt="" />
                            <h2 className="my-2 text-lg">Sketch Up</h2>
                            <p className="text-gray-500">Godard pabst prism fam cliche.</p>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <div className="w-48 p-3 bg-white text-black text-center rounded-2xl mini-box md:my-0 my-5 cursor-pointer transition ease-in-out hover:-translate-y-3 duration-300">
                            <img src="/src/assests/images/work process icons/discuss.png" className="w-14 mx-auto" alt="" />
                            <h2 className="my-2 text-lg">Discuss</h2>
                            <p className="text-gray-500">Godard pabst prism fam cliche.</p>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <div className="w-48 p-3 bg-white text-black text-center rounded-2xl mini-box md:my-0 my-5 cursor-pointer transition ease-in-out hover:-translate-y-3 duration-300">
                            <img src="/src/assests/images/work process icons/revise.png" className="w-14 mx-auto" alt="" />
                            <h2 className="my-2 text-lg">Revise</h2>
                            <p className="text-gray-500">Godard pabst prism fam cliche.</p>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <div className="w-48 p-3 bg-white text-black text-center rounded-2xl mini-box md:my-0 my-5 cursor-pointer transition ease-in-out hover:-translate-y-3 duration-300">
                            <img src="/src/assests/images/work process icons/approve.png" className="w-14 mx-auto" alt="" />
                            <h2 className="my-2 text-lg">Approve</h2>
                            <p className="text-gray-500">Godard pabst prism fam cliche.</p>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <div className="w-48 p-3 bg-white text-black text-center rounded-2xl mini-box md:my-0 my-5 cursor-pointer transition ease-in-out hover:-translate-y-3 duration-300">
                            <img src="/src/assests/images/work process icons/launch.png" className="w-14 mx-auto" alt="" />
                            <h2 className="my-2 text-lg">Launch</h2>
                            <p className="text-gray-500">Godard pabst prism fam cliche.</p>
                        </div>
                    </div>

                </section>

                {/* WORKS PROCESS ENDS */}

                {/* WHAT DO THEY SAY SECTION START */}
                
                    <div className="mx-6">
                    <TestimonialTeam/>
                    </div>

                {/* WHAT DO THEY SAY SECTION ENDS */}

                {/* DEMO SECTION START */}

                <section className="mx-auto w-[80%] bg-white p-4 rounded-lg mt-40 mb-8">
                    <div className="md:flex md:justify-center">
                        <p className="mx-4 text-lg font-normal text-secondary self-center text-center md:text-left">Save time and grow your bussiness with us!</p>
                        <div className="flex justify-center">
                            <button className="uppercase md:mx-4 md:my-0 my-3 p-4 text-white bg-secondary rounded-lg text-base transition-all ease-in-out duration-300 hover:bg-secondary_light hover:text-primary_dark">View on-demand demo</button>
                        </div>
                    </div>
                </section>

                {/* DEMO SECTION ENDS */}

                {/* PRICING PLAN SECTION START */}

                <PricingPlan/>

                {/* PRICING PLAN SECTION ENDS */}

                {/* COUNTER SECTION START */}

                <section className="grid md:grid-cols-4 grid-cols-2 my-20 text-white bg-secondary rounded-lg p-5 mx-2">
                    <div className="flex flex-col items-center mb-4">
                        <p className="text-4xl font-semibold my-2">126</p>
                        <p className="capitalize text-2xl font-normal">projects</p>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                        <p className="text-4xl font-semibold my-2">63</p>
                        <p className="capitalize text-2xl font-normal">happ clients</p>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                        <p className="text-4xl font-semibold my-2">18</p>
                        <p className="capitalize text-2xl font-normal">awards wins</p>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                        <p className="text-4xl font-semibold my-2">27</p>
                        <p className="capitalize text-2xl font-normal">countries</p>
                    </div>
                </section>

                {/* COUNTER SECTION ENDS */}

                {/* BLOG ENTRIES START */}

                <section className="text-white text-center mt-40">
                    <h1 className="mb-4 text-4xl capitalize font-bold font-title_font">Blog Entries</h1>
                    <p className="my-4 text-lg md:w-[50%] md:mx-auto mx-2">Exploring insights and inspiration through our blog entries. Dive into a world of valuable content where we share expertise, trends, and perspectives. Join the conversation as we uncover new horizons and offer fresh perspectives on the topics that matter most.</p>

                </section>

                <section className="grid md:grid-cols-3 grid-cols-1 gap-4 text-white mx-6">
                    <div className="text-center md:my-4 my-6">
                        <img src="/src/assests/images/blog-item-01.png" className="w-full mb-6" alt="" />
                        <a href="#" className="text-xl">Vivamus ac vehicula dui</a>
                        <p className="mt-5 mb-10">Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.</p>
                        <a href="#" className="py-3 px-6 text-white bg-secondary rounded-full text-base transition-all ease-in-out duration-300 hover:bg-secondary_light hover:text-primary_dark">Read More</a>
                    </div>

                    <div className="text-center md:my-4 my-6">
                        <img src="/src/assests/images/blog-item-02.png" className="w-full mb-6" alt="" />
                        <a href="#" className="text-xl">Phasellus convallis augue</a>
                        <p className="mt-5 mb-10">Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.</p>
                        <a href="#" className="py-3 px-6 text-white bg-secondary rounded-full text-base transition-all ease-in-out duration-300 hover:bg-secondary_light hover:text-primary_dark">Read More</a>
                    </div>

                    <div className="text-center md:my-4 my-6">
                        <img src="/src/assests/images/blog-item-03.png" className="w-full mb-6" alt="" />
                        <a href="#" className="text-xl">Nam gravida purus non</a>
                        <p className="mt-5 mb-10">Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.</p>
                        <a href="#" className="py-3 px-6 text-white bg-secondary rounded-full text-base transition-all ease-in-out duration-300 hover:bg-secondary_light hover:text-primary_dark">Read More</a>
                    </div>

                </section>

                {/* BLOG ENTRIES ENDS */}

            </div>

        </main>

    </>
    )
}

export default Home