import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RecentProjects = () => {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <SliderLeftArrow />,
        nextArrow: <SliderRightArrow />,
    }
    return (
        <>

            <section className="font-body_font mt-20 mb-10 text-white text-center space-y-2">
                    <h1 className="text-4xl font-title_font">Recent Projects</h1>
                    <p className="tracking-wide">These are the current projects our team working on.</p>
                
            </section>

            <Slider {...settings} className="font-body_font w-[50%] mx-auto pb-10">
                
                    <div className="mx-auto">
                        <img src="src/assests/images/recent projects/ELISHAPRO.png" className="" alt="" />
                    </div>

                    <div className="mx-auto">
                        <img src="src/assests/images/recent projects/go trolly.png" className="" alt="" />
                    </div>

                    <div className="mx-auto">
                        <img src="src/assests/images/recent projects/mort.png" className="" alt="" />
                    </div>
                

            </Slider>
        </>
    )
}

// Custom arrow component
const SliderLeftArrow = ({ onClick }) => {
    return (
  
      <div className="lg:inline-block absolute top-[32%] left-[-8%] z-10 cursor-pointer hidden" onClick={onClick}>
        <i className="ri-arrow-left-s-line text-[3.5rem] text-secondary hover:text-gray-500" ></i>
      </div>
    );
  };
  
  const SliderRightArrow = ({ onClick }) => {
    return (
  
      <div className="lg:inline-block absolute top-[32%] right-[-8%] z-10 cursor-pointer hidden" onClick={onClick}>
        <i className="ri-arrow-right-s-line text-[3.5rem] text-secondary hover:text-gray-500" ></i>
      </div>
    );
  };

export default RecentProjects