import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialTeam = () => {

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <SliderLeftArrow />,
        nextArrow: <SliderRightArrow />,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }
    return (
        <>
            <section className="text-white text-center mt-40 font-body_font">
                <h1 className="mb-4 text-4xl capitalize font-bold font-title_font">What do they say about us?</h1>
                <p className="my-4 text-lg md:w-[50%] md:mx-auto mx-2">Hear from those who've experienced our excellence firsthand. Our clients' voices echo our dedication, quality, and impact. Discover how we've made a difference and why we're a trusted partner in their success stories.</p>

            </section>

            <section className="my-10 font-body_font">
                <Slider {...settings}>

                    <div>
                        <div className="bg-white h-fit text-center py-10 px-4 rounded-xl w-[90%] mx-auto">
                            <img src="src/assests/images/team/haider.JPG" className="w-32 rounded-full mx-auto" alt="" />
                            <div className="text-yellow-400 my-2 space-x-1">
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                            </div>
                            <p className="my-2 text-gray-600 w-[80%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est,
                                ut libero doloribus</p>
                            <h3 className="text-lg my-2 text-gray-800 font-semibold font-title_font">Muhammad Haider Ashraf</h3>
                        </div>
                    </div>

                    <div >
                        <div className="bg-white h-fit text-center py-10 px-4 rounded-xl w-[90%] mx-auto">
                            <img src="src/assests/images/team/fizba.JPG" className="w-32 rounded-full mx-auto" alt="" />
                            <div className="text-yellow-400 my-2  space-x-1">
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <p className="my-2 text-gray-600 w-[80%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est,
                                ut libero doloribus</p>
                            <h3 className="text-lg my-2 text-gray-800 font-semibold font-title_font">Fizba Azhar</h3>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white h-fit text-center py-10 px-4 rounded-xl w-[90%] mx-auto">
                            <img src="src/assests/images/team/ZEE.jpg" className="w-32 rounded-full mx-auto" alt="" />
                            <div className="text-yellow-400 my-2  space-x-1">
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <p className="my-2 text-gray-600 w-[80%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est,
                                ut libero doloribus</p>
                            <h3 className="text-lg my-2 text-gray-800 font-semibold font-title_font">Zeeshan Anayiat</h3>

                        </div>
                    </div>

                    <div>
                        <div className="bg-white h-fit text-center py-10 px-4 rounded-xl w-[90%] mx-auto">
                            <img src="src/assests/images/team/haider.JPG" className="w-32 rounded-full mx-auto" alt="" />
                            <div className="text-yellow-400 my-2  space-x-1">
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                            </div>
                            <p className="my-2 text-gray-600 w-[80%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est,
                                ut libero doloribus</p>
                            <h3 className="text-lg my-2 text-gray-800 font-semibold font-title_font">Muhammad Haider Ashraf</h3>

                        </div>
                    </div>
                    <div>
                        <div className="bg-white h-fit text-center py-10 px-4 rounded-xl w-[90%] mx-auto">
                            <img src="src/assests/images/team/fizba.JPG" className="w-32 rounded-full mx-auto" alt="" />
                            <div className="text-yellow-400 my-2  space-x-1">
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <p className="my-2 text-gray-600 w-[80%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est,
                                ut libero doloribus</p>
                            <h3 className="text-lg my-2 text-gray-800 font-semibold font-title_font">Fizba Azhar</h3>

                        </div>
                    </div>

                    <div>
                        <div className="bg-white h-fit text-center py-10 px-4 rounded-xl w-[90%] mx-auto">
                            <img src="src/assests/images/team/ZEE.jpg" className="w-32 rounded-full mx-auto" alt="" />
                            <div className="text-yellow-400 my-2  space-x-1">
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <p className="my-2 text-gray-600 w-[80%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est,
                                ut libero doloribus</p>
                            <h3 className="text-lg my-2 text-gray-800 font-semibold font-title_font">Zeeshan Anayiat</h3>

                        </div>
                    </div>

                    <div>
                        <div className="bg-white h-fit text-center py-10 px-4 rounded-xl w-[90%] mx-auto">
                            <img src="src/assests/images/team/haider.JPG" className="w-32 rounded-full mx-auto" alt="" />
                            <div className="text-yellow-400 my-2  space-x-1">
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                            </div>
                            <p className="my-2 text-gray-600 w-[80%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est,
                                ut libero doloribus</p>
                            <h3 className="text-lg my-2 text-gray-800 font-semibold font-title_font">Muhammad Haider Ashraf</h3>

                        </div>
                    </div>
                    <div>
                        <div className="bg-white h-fit text-center py-10 px-4 rounded-xl w-[90%] mx-auto">
                            <img src="src/assests/images/team/fizba.JPG" className="w-32 rounded-full mx-auto" alt="" />
                            <div className="text-yellow-400 my-2  space-x-1">
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <p className="my-2 text-gray-600 w-[80%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est,
                                ut libero doloribus</p>
                            <h3 className="text-lg my-2 text-gray-800 font-semibold font-title_font">Fizba Azhar</h3>

                        </div>
                    </div>

                    <div>
                        <div className="bg-white h-fit text-center py-10 px-4 rounded-xl w-[90%] mx-auto">
                            <img src="src/assests/images/team/ZEE.jpg" className="w-32 rounded-full mx-auto" alt="" />
                            <div className="text-yellow-400 my-2  space-x-1">
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <p className="my-2 text-gray-600 w-[80%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est,
                                ut libero doloribus</p>
                            <h3 className="text-lg my-2 text-gray-800 font-semibold font-title_font">Zeeshan Anayiat</h3>

                        </div>
                    </div>

                    <div>
                        <div className="bg-white h-fit text-center py-10 px-4 rounded-xl w-[90%] mx-auto">
                            <img src="src/assests/images/team/haider.JPG" className="w-32 rounded-full mx-auto" alt="" />
                            <div className="text-yellow-400 my-2  space-x-1">
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                            </div>
                            <p className="my-2 text-gray-600 w-[80%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est,
                                ut libero doloribus</p>
                            <h3 className="text-lg my-2 text-gray-800 font-semibold font-title_font">Muhammad Haider Ashraf</h3>

                        </div>
                    </div>
                    <div>
                        <div className="bg-white h-fit text-center py-10 px-4 rounded-xl w-[90%] mx-auto">
                            <img src="src/assests/images/team/fizba.JPG" className="w-32 rounded-full mx-auto" alt="" />
                            <div className="text-yellow-400 my-2  space-x-1">
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <p className="my-2 text-gray-600 w-[80%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est,
                                ut libero doloribus</p>
                            <h3 className="text-lg my-2 text-gray-800 font-semibold font-title_font">Fizba Azhar</h3>

                        </div>
                    </div>

                    <div>
                        <div className="bg-white h-fit text-center py-10 px-4 rounded-xl w-[90%] mx-auto">
                            <img src="src/assests/images/team/ZEE.jpg" className="w-32 rounded-full mx-auto" alt="" />
                            <div className="text-yellow-400 my-2  space-x-1">
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-fill" ></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <p className="my-2 text-gray-600 w-[80%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est,
                                ut libero doloribus</p>
                            <h3 className="text-lg my-2 text-gray-800 font-semibold font-title_font">Zeeshan Anayiat</h3>

                        </div>
                    </div>

                </Slider>
            </section>
        </>
    )
}

// Custom arrow component
const SliderLeftArrow = ({ onClick }) => {
    return (

        <div className="lg:inline-block absolute top-[45%] left-[-4%] z-10 cursor-pointer hidden" onClick={onClick}>
            <i className="ri-arrow-left-s-line text-[3.5rem] text-secondary hover:text-gray-500" ></i>
        </div>
    );
};

const SliderRightArrow = ({ onClick }) => {
    return (

        <div className="lg:inline-block absolute top-[45%] right-[-4%] z-10 cursor-pointer hidden" onClick={onClick}>
            <i className="ri-arrow-right-s-line text-[3.5rem] text-secondary hover:text-gray-500" ></i>
        </div>
    );
};

export default TestimonialTeam