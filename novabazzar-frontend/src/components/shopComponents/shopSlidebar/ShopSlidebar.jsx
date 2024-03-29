import React from "react";
import "./ShopSlidebar.scss";
import {
    ClothesProductCategoryData,
    ElectronicsProductCategoryData,
    KiranaProductCategoryData,
    FastFoodProductCategoryData,
} from "../CategoryData";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";



const ShopSlidebar = (props) => {
    return (
        <div className="shopSlidebar-area">
            <div className="shopSlidebar">
                <h3>Product Categories</h3>
                {props.shop?.shopType === "Fastfoodshop" && (
                    <ul className="flex column ">
                        {FastFoodProductCategoryData.FastFoodProductCategories.map(
                            (category) => (
                                <li
                                    onClick={() =>
                                        props.setType(
                                            category.replaceAll(" ", ""),
                                        )
                                    }
                                    key={category}
                                >
                                    {category}
                                </li>
                            ),
                        )}
                    </ul>
                )}
                {props.shop?.shopType === "Kiranashop" && (
                    <ul className="flex column ">
                        {KiranaProductCategoryData.KiranaProductCategories.map(
                            (category) => (
                                <li
                                    onClick={() =>
                                        props.setType(
                                            category.replaceAll(" ", ""),
                                        )
                                    }
                                    key={category}
                                >
                                    {category}
                                </li>
                            ),
                        )}
                    </ul>
                )}
                {props.shop?.shopType === "Clothesshop" && (
                    <ul className="flex column ">
                        {ClothesProductCategoryData.ClothesProductCategories.map(
                            (category) => (
                                <li
                                    onClick={() =>
                                        props.setType(
                                            category.replaceAll(" ", ""),
                                        )
                                    }
                                    key={category}
                                >
                                    {category}
                                </li>
                            ),
                        )}
                    </ul>
                )}
                {/* {props.shop?.shopType === "Medicalshop" && (
                    <ul className="flex column ">
                        {MedicalProductCategoryData.MedicalProductCategories.map(
                            (category) => (
                                <li
                                    onClick={() =>
                                        props.setType(
                                            category.replaceAll(" ", ""),
                                        )
                                    }
                                    key={category}
                                >
                                    {category}
                                </li>
                            ),
                        )}
                    </ul>
                )} */}
                {props.shop?.shopType === "Electronicsshop" && (
                    <ul className="flex column ">
                        {ElectronicsProductCategoryData.ElectronicsProductCategories.map(
                            (category) => (
                                <li
                                    onClick={() =>
                                        props.setType(
                                            category.replaceAll(" ", ""),
                                        )
                                    }
                                    key={category}
                                >
                                    {category}
                                </li>
                            ),
                        )}
                    </ul>
                )}
                {/* {props.shop?.shopType === "Parlourshop" && (
                    <ul className="flex column ">
                        {ParlourProductCategoryData.ParlourProductCategories.map(
                            (category) => (
                                <li
                                    key={category}
                                    onClick={() =>
                                        props.setType(
                                            category.replaceAll(" ", ""),
                                        )
                                    }
                                >
                                    {category}
                                </li>
                            ),
                        )}
                    </ul>
                )} */}
            </div>
            <div className="mobile-slider">
            {props.shop?.shopType === "Fastfoodshop" && (
                    <Swiper
                        slidesPerView={2}
                        modules={[Pagination]}
                        loop={true}
                        className="my-cats"
                    >
                        {FastFoodProductCategoryData.FastFoodProductCategories.map(
                            (category) => (
                                <SwiperSlide
                                    className="my-cat"
                                    onClick={() =>
                                        props.setType(
                                            category.replaceAll("   ", ""),
                                        )
                                    }
                                    key={category}
                                >
                                    {category}
                                </SwiperSlide>
                            ),
                        )}
                    </Swiper>
                )}
                {props.shop?.shopType === "Kiranashop" && (
                    <Swiper
                        slidesPerView={2}
                        modules={[Pagination]}
                        loop={true}
                        className="my-cats"
                    >
                        {KiranaProductCategoryData.KiranaProductCategories.map(
                            (category) => (
                                <SwiperSlide
                                    className="my-cat"
                                    onClick={() =>
                                        props.setType(
                                            category.replaceAll("   ", ""),
                                        )
                                    }
                                    key={category}
                                >
                                    {category}
                                </SwiperSlide>
                            ),
                        )}
                    </Swiper>
                )}
                {props.shop?.shopType === "Clothesshop" && (
                    <Swiper
                        slidesPerView={2}
                        modules={[Pagination]}
                        loop={true}
                        className="my-cats"
                    >
                        {ClothesProductCategoryData.ClothesProductCategories.map(
                            (category) => (
                                <SwiperSlide
                                    className="my-cat"
                                    onClick={() =>
                                        props.setType(
                                            category.replaceAll("   ", ""),
                                        )
                                    }
                                    key={category}
                                >
                                    {category}
                                </SwiperSlide>
                            ),
                        )}
                    </Swiper>
                )}
                {props.shop?.shopType === "Electronicsshop" && (
                    <Swiper
                        slidesPerView={2}
                        modules={[Pagination]}
                        loop={true}
                        className="my-cats"
                    >
                        {ElectronicsProductCategoryData.ElectronicsProductCategories.map(
                            (category) => (
                                <SwiperSlide
                                    className="my-cat"
                                    onClick={() =>
                                        props.setType(
                                            category.replaceAll(" ", ""),
                                        )
                                    }
                                    key={category}
                                >
                                    {category}
                                </SwiperSlide>
                            ),
                        )}
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default ShopSlidebar;
