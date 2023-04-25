import React from "react";
import styles from "./featuredItems.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const FeaturedItems = () => {
    return (
        <div className={styles.featuredItemsContainer}>
            <div className={styles.featuredItemsSliderContainer}>
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    slidesPerView={3.5}
                    spaceBetween={30}
                    modules={[Pagination]}
                    loop={true}
                    className={styles.featureImagesSwiper}
                >
                    <SwiperSlide className={styles.featuredItemSlide}>
                        Slide 1
                    </SwiperSlide>
                    <SwiperSlide className={styles.featuredItemSlide}>
                        Slide 2
                    </SwiperSlide>
                    <SwiperSlide className={styles.featuredItemSlide}>
                        Slide 3
                    </SwiperSlide>
                    <SwiperSlide className={styles.featuredItemSlide}>
                        Slide 4
                    </SwiperSlide>
                    <SwiperSlide className={styles.featuredItemSlide}>
                        Slide 5
                    </SwiperSlide>
                    <SwiperSlide className={styles.featuredItemSlide}>
                        Slide 6
                    </SwiperSlide>
                    <SwiperSlide className={styles.featuredItemSlide}>
                        Slide 7
                    </SwiperSlide>
                    <SwiperSlide className={styles.featuredItemSlide}>
                        Slide 8
                    </SwiperSlide>
                    <SwiperSlide className={styles.featuredItemSlide}>
                        Slide 9
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default FeaturedItems;
