import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurTeam = () => {

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
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
      <div className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65%">

        <section className="text-white text-center pt-20 font-body_font">
          <h1 className="mb-4 text-4xl capitalize font-bold font-title_font">Our Team</h1>
          <p className="py-4 text-xl md:w-[80%] md:mx-auto mx-2">Our team is a diverse tapestry of talent and expertise, woven together by a shared passion for innovation. With a blend of creativity, dedication, and experience, we collaborate seamlessly to turn ideas into reality. Together, we are the driving force behind every success story, united by a common goal to exceed expectations and shape remarkable outcomes.</p>

        </section>

        <Slider {...settings} className="font-title_font font-semibold container mx-auto">
          <div className="text-center text-white">
            <img src="src/assests/images/team/waleed.jpeg" className="w-32 rounded-full mx-auto" alt="" />
            <h1 className="mt-2">HUMAN RESOURCES(HR)</h1>
          </div>

          <div className="text-center text-white">
            <img src="src/assests/images/team/haider.jpg" className="w-32 rounded-full mx-auto" alt="" />
            <h1 className="mt-2">FRONT-END DEVELOPER</h1>
          </div>

          <div className="text-center text-white">
            <img src="src/assests/images/team/fizba.jpg" className="w-32 rounded-full mx-auto" alt="" />
            <h1 className="mt-2">FRONT-END DEVELOPER</h1>
          </div>

          <div className="text-center text-white">
            <img src="src/assests/images/team/image.jpg" className="w-32 rounded-full mx-auto" alt="" />
            <h1 className="mt-2">GRAPHIC DESIGNER</h1>
          </div>
        </Slider>
      </div>
    </>
  )
}

// Custom arrow component
const SliderLeftArrow = ({ onClick }) => {
  return (

    <div className="lg:inline-block absolute top-[25%] left-[-4%] z-10 cursor-pointer hidden" onClick={onClick}>
      <i className="ri-arrow-left-s-line text-[3.5rem] text-secondary hover:text-gray-500" ></i>
    </div>
  );
};

const SliderRightArrow = ({ onClick }) => {
  return (

    <div className="lg:inline-block absolute top-[25%] right-[-4%] z-10 cursor-pointer hidden" onClick={onClick}>
      <i className="ri-arrow-right-s-line text-[3.5rem] text-secondary hover:text-gray-500" ></i>
    </div>
  );
};

export default OurTeam