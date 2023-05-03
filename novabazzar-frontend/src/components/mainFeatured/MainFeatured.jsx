import React from "react";
import "./MainFeatured.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// slider images
import img1 from "../../assets/ear-watch.jpg";
import img5 from "../../assets/clothes1.png";
import img2 from "../../assets/Fashion-accessories.jpg";
import img3 from "../../assets/med2.jpg";
import img4 from "../../assets/aryuveda.jpg";
import img6 from "../../assets/fruits-veg.jpg";
import img7 from "../../assets/ac-cooler-fan.jpg";
import img8 from "../../assets/mob-lap.jpg";
import facecare from "../../assets/facecare1.jpg";
import haircut from "../../assets/haircut.png";

const MainFeatured = () => {
    return (
        <div className="main-sliders ">
            <Swiper
                className="swiper"
                // pagination={{
                //     clickable: true,
                // }}
                slidesPerView={1}
                // spaceBetween={30}
                modules={[Pagination]}
                loop={true}
            >
                <SwiperSlide className="slide-items">
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-items">
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-items">
                    <img src={facecare} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-items">
                    <img src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-items">
                    <img src={img5} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-items">
                    <img src={img6} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-items">
                    <img src={img7} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-items">
                    <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-items">
                    <img src={haircut} alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide-items">
                    <img src={img8} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MainFeatured;
