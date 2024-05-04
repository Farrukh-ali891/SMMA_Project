import React from 'react'
import TestimonialTeam from '../components/TestimonialTeam'
import OurTeam from '../components/OurTeam'
import RecentProjects from '../components/RecentProjects'


const Service = () => {
  return (
    <>
      <section>
        <div className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font text-white pt-14 pb-12 relative flex justify-center">
          <h1 className="font-title_font text-4xl font-semibold text-center">"Your Success Story Starts Here Embrace Our Services."</h1>
          <a href="" className="bg-secondary py-2 px-10 rounded-lg absolute top-[85%] text-xl font-semibold transition-all ease-in-out duration-300 hover:bg-secondary_light hover:text-primary_dark">Our Services</a>
        </div>
        <div className="container mx-auto">
          <h1 className="mt-14 text-center text-5xl font-title_font font-semibold text-primary">These are the <span className="animate-textReveal text-[brown]">SERVICES</span> we are providing!</h1>

          <div className="md:grid lg:grid-cols-5 md:grid-cols-3 gap-x-3 gap-y-8 my-5 md:mx-0 mx-10">
            <div>
              <a href="">
                <img src="src/assests/images/services/digital marketing.png" className="transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-3" alt="" />
              </a>
            </div>

            <div>
              <a href="">
                <img src="src/assests/images/services/contentcreater.png" className="transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-3" alt="" />
              </a>
            </div>

            <div>
              <a href="">
                <img src="src/assests/images/services/brand marketing.png" className="transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-3" alt="" />
              </a>
            </div>

            <div>
              <a href="">
                <img src="src/assests/images/services/e mail marketing.png" className="transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-3" alt="" />
              </a>
            </div>

            <div>
              <a href="">
                <img src="src/assests/images/services/fiverr.png" className="transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-3" alt="" />
              </a>
            </div>

            <div>
              <a href="">
                <img src="src/assests/images/services/googl ads.png" className="transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-3" alt="" />
              </a>
            </div>

            <div>
              <a href="">
                <img src="src/assests/images/services/our team.png" className="transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-3" alt="" />
              </a>
            </div>

            <div>
              <a href="">
                <img src="src/assests/images/services/popular.png" className="transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-3" alt="" />
              </a>
            </div>

            <div>
              <a href="">
                <img src="src/assests/images/services/youtube.png" className="transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-3" alt="" />
              </a>
            </div>

            <div>
              <a href="">
                <img src="src/assests/images/services/upworknew.png" className="transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-3" alt="" />
              </a>
            </div>

          </div>
        </div>

        <div className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font">
          <div className="container mx-auto pt-2 mt-32">

            {/* DEMO SECTION START */}
            <section className="mx-auto w-[80%] bg-white p-4 rounded-lg mt-20 mb-8">
              <div className="md:flex md:justify-center">
                <p className="mx-4 text-lg font-normal text-secondary self-center text-center md:text-left">Save time and grow your bussiness with us!</p>
                <div className="flex justify-center">
                  <button className="uppercase md:mx-4 md:my-0 my-3 p-4 text-white bg-secondary rounded-lg text-base transition-all ease-in-out duration-300 hover:bg-secondary_light hover:text-primary_dark">View on-demand demo</button>
                </div>
              </div>
            </section>

            {/* DEMO SECTION ENDS */}

            {/* WORKS PROCESS START */}
            <section className="text-white text-center mt-40">
              <h1 className="mb-4 text-4xl capitalize font-bold font-title_font">Work Process</h1>
              <p className="my-4 text-lg md:w-[50%] md:mx-auto mx-2">The use of a streamlined approach to achieve success. In order to transform concepts into effective results, we carefully analyze, strategies, and carry them out. Journey with us as we innovate and work together to attain our goals.</p>

            </section>

            <section className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 md:gap-8 mx-3 my-10">
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
              <TestimonialTeam />
            </div>
            {/* WHAT DO THEY SAY SECTION ENDS */}

            {/* OUR RECENT PROJECTS START */}
            <section className="container mx-auto">
                <RecentProjects/>
            </section>
            {/* OUR RECENT PROJECTS ENDS */}

            {/* OUR TEAM START */}

            <div className="mx-6">
              <OurTeam />
            </div>

            {/* OUR TEAM ENDS */}


          </div>
        </div>
      </section>
    </>
  )
}

export default Service