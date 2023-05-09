import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import Navbar from "../../components/Navbar/Navbar";
import img1 from "../../assets/shoes.jpg";
import img2 from "../../assets/apple.jpg";
import img3 from "../../assets/jacket.jpg";
import img4 from "../../assets/sellerLogin.jpg";
import img5 from "../../assets/openshop.jpg";
import img6 from "../../assets/banner.jpg";
// import Product from "../../components/ProductCard/Product";
import {
    getAllProductsDetails,
    getProductDetails,
    getShopDetails,
} from "../../services/api";
import { addItem } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Product from "../../components/ProductCard/Product";

const ProductDetail = () => {
    const navigate = useNavigate();
    const product_id = window.location.pathname.split("/")[2];
    const [product, setProduct] = useState();
    const [relatedProducts, setRelatedProducts] = useState();
    const [shop, setShop] = useState();
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(
            addItem({
                productId: product_id,
                shopId: product?.shopId,
                sellerId: product?.userId,
                price: product.price,
                quantity: 1,
            }),
        );
        navigate("/buyer/cart");
    };

    const [userLocation, setUserLocation] = useState();
    useEffect(() => {
        const userLocation = localStorage.getItem("location");
        setUserLocation(userLocation);
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (product) {
                    const res = await getAllProductsDetails(
                        "",
                        {
                            sort: "price",
                            order: "desc",
                        },
                        product?.categories,
                    );
                    setRelatedProducts(res.data.products);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, [product]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getProductDetails(product_id);
                setProduct(res.data.product);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [product_id]);

    useEffect(() => {
        const fetchShop = async () => {
            if (product?.shopId) {
                try {
                    const res = await getShopDetails(product?.shopId);

                    setShop(res.data.shop);
                } catch (error) {
                    console.log(error);
                }
            }
        };
        fetchShop();
    }, [product]);

    return (
        <div className="ProductDetailPage">
            <Navbar userLocation={userLocation} />
            <div className="product-detail">
                <Link to={`/shop/${shop?._id}`} className="shop-detail-section link">
                    <div className="shop-name">{shop?.shopName}</div>
                    <div className="shop-location">
                        {shop?.location},{shop?.city}
                    </div>
                </Link>
                <div className="product-detail-section">
                    <div className="product-images-section">
                        <Swiper
                            className="swiper"
                            pagination={{
                                clickable: true,
                            }}
                            slidesPerView={1}
                            // spaceBetween={30}
                            modules={[Pagination]}
                            loop={true}
                        >
                            <SwiperSlide className="slide-items">
                                <img src={product?.coverImage || img1} alt="" />
                            </SwiperSlide>
                            <SwiperSlide className="slide-items">
                                <img
                                    src={product?.galleryImages?.at(0) || img2}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide className="slide-items">
                                <img
                                    src={product?.galleryImages?.at(1) || img3}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide className="slide-items">
                                <img
                                    src={product?.galleryImages?.at(2) || img4}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide className="slide-items">
                                <img
                                    src={product?.galleryImages?.at(3) || img5}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide className="slide-items">
                                <img
                                    src={product?.galleryImages?.at(4) || img6}
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="product-about-section">
                        <div className="product-name">{product?.name}</div>
                        <div className="product-quantity">
                            {product?.quantity}
                        </div>
                        <div className="product-price">₹ {product?.price}</div>
                        <div className="buttons-section">
                            <button
                                className="cartbtn"
                                onClick={handleAddToCart}
                            >
                                Add to cart
                            </button>
                        </div>
                        <div className="product-desc">{product?.desc}</div>
                    </div>
                </div>
            </div>
            <h2>Related items</h2>
            <div
                className="related-products-section"
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                {relatedProducts?.map((product) => (
                    <Product product={product} key={product._id} />
                ))}
            </div>
        </div>
    );
};

export default ProductDetail;
