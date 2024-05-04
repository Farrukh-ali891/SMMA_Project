import React from 'react'
import OurTeam from '../components/OurTeam'

const AboutUs = () => {
    return (
        <>
            <section className="bg-[url('src/assests/images/banner/au-b.jpg')] bg-no-repeat bg-cover h-80 flex items-center">
                <div className="container mx-auto backdrop-blur-sm bg-[#8a8a8a4d]">
                    <h1 className="py-8 text-center md:text-5xl text-4xl font-bold tracking-wide text-white font-title_font">About Us</h1>
                </div>
            </section>

            <section className="text-white font-body_font bg-gradient-to-r from-primary_dark from-45% to-primary to-65% pb-10">
                <div className="md:container md:mx-auto py-10 mx-5">
                    <p className="leading-8 text-xl">Social Swirl is a dynamic and innovative software company founded by Danial Khan in 2022. Based in United Kingdom. Social Swirl specialises in Software and media solutions with a focus on new creations. The company's mission is to provide high-quality software solutions and media that help businesses and individuals optimise their online presence and achieve their goals. With a team of experienced professionals and a commitment to excellence, Social Swirl is dedicated to providing personalised, reliable, and affordable services to its clients. AIMS Our mission is to provide high-quality software solutions and media services that help businesses and individuals optimise their online presence and achieve their goals. At Social Swirl, we are committed to delivering personalised, reliable, and affordable services to our clients, with a focus on new creations and cutting- edge technologies.We maintain a team of experienced professionals who are dedicated to providing exceptional customer service and support, and we strive to build strong and lasting relationships with our clients based on trust, transparency, and open communication.</p>
                </div>
                <div className="md:container md:mx-auto flex space-x-10">
                    <img src="src/assests/images/banner/au-p.jpg" className="md:w-[40%] md:block rounded-md hidden" alt="" />
                    <div className="md:w-[60%] w-full md:mx-0 mx-5">
                        <h1 className="md:text-4xl text-3xl font-semibold mt-2 mb-6 md:text-left text-center">Events And Updates</h1>
                        <p className="text-lg">We are delighted to announce an exciting new development at Social Swirl: the launch of our highly anticipated Business Outsourcing Project. At Social Swirl, we have always been committed to delivering exceptional services and innovative solutions to meet the evolving needs of our clients. With our new Business Outsourcing Project, we are taking our commitment to the next level by offering comprehensive outsourcing solutions tailored to enhance the efficiency and productivity of your business operations.</p>
                    </div>
                </div>
            </section>


            <OurTeam />

        </>
    )
}

export default AboutUs