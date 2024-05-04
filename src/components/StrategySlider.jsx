import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StrategySlider = () => {

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <SliderLeftArrow />,
        nextArrow: <SliderRightArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <>
            <Slider {...settings} className="font-body_font container mx-auto">

                {/* <!-- ***** Features Small Item Start ***** --> */}

                <div>
                    <div className="text-center px-6 pt-6 pb-16 bg-white text-black rounded-3xl w-[90%] mx-auto">
                        <div className="flex justify-center my-3">
                            <img src="/src/assests/images/strategies/modern strategy.png" className="w-20" alt="" />
                        </div>
                        <h5 className="my-4 text-xl">Modern Strategy</h5>
                        <p className="text-gray-500">Customize anything in this template to fit your website needs</p>
                    </div>

                </div>

                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div>
                    <div className="text-center px-6 pt-6 pb-16 bg-white text-black rounded-3xl w-[90%] mx-auto">
                        <div className="flex justify-center my-3">
                            <img src="/src/assests/images/strategies/influencer marketing.png" className="w-20" alt="" />
                        </div>
                        <h5 className="my-4 text-xl">Influencer Marketing</h5>
                        <p className="text-gray-500">Customize anything in this template to fit your website needs</p>
                    </div>

                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div>
                    <div className="text-center px-6 pt-6 pb-16 bg-white text-black rounded-3xl w-[90%] mx-auto">
                        <div className="flex justify-center my-3">
                            <img src="/src/assests/images/strategies/video marketing.png" className="w-20" alt="" />
                        </div>
                        <h5 className="my-4 text-xl">Video Marketing</h5>
                        <p className="text-gray-500">Customize anything in this template to fit your website needs</p>
                    </div>

                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div>
                    <div className="text-center px-6 pt-6 pb-16 bg-white text-black rounded-3xl w-[90%] mx-auto">
                        <div className="flex justify-center my-3">
                            <img src="/src/assests/images/strategies/live streaming.png" className="w-20" alt="" />
                        </div>
                        <h5 className="my-4 text-xl">Live Streaming</h5>
                        <p className="text-gray-500">Customize anything in this template to fit your website needs</p>
                    </div>

                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div>
                    <div className="text-center px-6 pt-6 pb-16 bg-white text-black rounded-3xl w-[90%] mx-auto">
                        <div className="flex justify-center my-3">
                            <img src="/src/assests/images/strategies/social commerce.png" className="w-20" alt="" />
                        </div>
                        <h5 className="my-4 text-xl">Social Commerce</h5>
                        <p className="text-gray-500">Customize anything in this template to fit your website needs</p>
                    </div>

                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div>
                    <div className="text-center px-6 pt-6 pb-16 bg-white text-black rounded-3xl w-[90%] mx-auto">
                        <div className="flex justify-center my-3">
                            <img src="/src/assests/images/strategies/stories and fleet.png" className="w-20" alt="" />
                        </div>
                        <h5 className="my-4 text-xl">Stories and Fleets</h5>
                        <p className="text-gray-500">Customize anything in this template to fit your website needs</p>
                    </div>

                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div>
                    <div className="text-center px-6 pt-6 pb-16 bg-white text-black rounded-3xl w-[90%] mx-auto">
                        <div className="flex justify-center my-3">
                            <img src="/src/assests/images/strategies/data analytics.png" className="w-20" alt="" />
                        </div>
                        <h5 className="my-4 text-xl">Data Analytics</h5>
                        <p className="text-gray-500">Customize anything in this template to fit your website needs</p>
                    </div>

                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div>
                    <div className="text-center px-6 pt-6 pb-16 bg-white text-black rounded-3xl w-[90%] mx-auto">
                        <div className="flex justify-center my-3">
                            <img src="/src/assests/images/strategies/embracing.png" className="w-20" alt="" />
                        </div>
                        <h5 className="my-4 text-xl">Embracing New Platforms</h5>
                        <p className="text-gray-500">Customize anything in this template to fit your website needs</p>
                    </div>

                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div>
                    <div className="text-center px-6 pt-6 pb-16 bg-white text-black rounded-3xl w-[90%] mx-auto">
                        <div className="flex justify-center my-3">
                            <img src="/src/assests/images/strategies/micro moments.png" className="w-20" alt="" />
                        </div>
                        <h5 className="my-4 text-xl">Micro-Moments</h5>
                        <p className="text-gray-500">Customize anything in this template to fit your website needs</p>
                    </div>

                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div>
                    <div className="text-center px-6 pt-6 pb-16 bg-white text-black rounded-3xl w-[90%] mx-auto">
                        <div className="flex justify-center my-3">
                            <img src="/src/assests/images/strategies/hashtags compaign.png" className="w-20" alt="" />
                        </div>
                        <h5 className="my-4 text-xl">Hashtag Campaigns</h5>
                        <p className="text-gray-500">Customize anything in this template to fit your website needs</p>
                    </div>

                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div>
                    <div className="text-center px-6 pt-6 pb-16 bg-white text-black rounded-3xl w-[90%] mx-auto">
                        <div className="flex justify-center my-3">
                            <img src="/src/assests/images/strategies/UGC.png" className="w-20" alt="" />
                        </div>
                        <h5 className="my-4 text-xl">User-Generated Content (UGC)</h5>
                        <p className="text-gray-500">Customize anything in this template to fit your website needs</p>
                    </div>

                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div>
                    <div className="text-center px-6 pt-6 pb-16 bg-white text-black rounded-3xl w-[90%] mx-auto">
                        <div className="flex justify-center my-3">
                            <img src="/src/assests/images/strategies/social listening.png" className="w-20" alt="" />
                        </div>
                        <h5 className="my-4 text-xl">Social Listening</h5>
                        <p className="text-gray-500">Customize anything in this template to fit your website needs</p>
                    </div>

                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

            </Slider>
        </>
    )
}

// Custom arrow component
const SliderLeftArrow = ({ onClick }) => {
    return (

        <div className="lg:inline-block absolute top-[45%] left-[-4%] z-10 cursor-pointer hidden" onClick={onClick}>
            <i className="ri-arrow-left-circle-line text-5xl text-secondary hover:text-gray-500" ></i>
        </div>
    );
};

const SliderRightArrow = ({ onClick }) => {
    return (

        <div className="lg:inline-block absolute top-[45%] right-[-4%] z-10 cursor-pointer hidden" onClick={onClick}>
            <i className="ri-arrow-right-circle-line text-5xl text-secondary hover:text-gray-500" ></i>
        </div>
    );
};

export default StrategySlider