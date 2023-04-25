import React from "react";
import "./MainFeatured.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const MainFeatured = () => {
    return (
        <div className="main-featured flex align-center ">
            <div className="main-content">
                <h1>
                    NovaBazzar is an platform <br /> where you can search any
                    shop
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim exercitationem, molestiae nemo consequuntur nostrum
                    recusandae totam ratione similique blanditiis quo.
                </p>
            </div>
            <div className="main-sliders flex abs-center ">
                <Swiper
                    className="swiper "
                    // pagination={{
                    //     clickable: true,
                    // }}
                    slidesPerView={3.5}
                    spaceBetween={30}
                    modules={[Pagination]}
                    loop={true}
                >
                    <SwiperSlide className="slide-items">Slide 1</SwiperSlide>
                    <SwiperSlide className="slide-items">Slide 2</SwiperSlide>
                    <SwiperSlide className="slide-items">Slide 3</SwiperSlide>
                    <SwiperSlide className="slide-items">Slide 4</SwiperSlide>
                    <SwiperSlide className="slide-items">Slide 5</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default MainFeatured;
