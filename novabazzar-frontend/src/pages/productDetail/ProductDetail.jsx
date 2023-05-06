import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
import Navbar from "../../components/Navbar/Navbar";
import img1 from "../../assets/shoes.jpg";
import img2 from "../../assets/apple.jpg";
import img3 from "../../assets/jacket.jpg";
import img4 from "../../assets/sellerLogin.jpg";
import img5 from "../../assets/openshop.jpg";
import img6 from "../../assets/banner.jpg";
// import Product from "../../components/ProductCard/Product";
import { getProductDetails, getShopDetails } from "../../services/api";
import { addItem } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
    const navigate = useNavigate();
    const product_id = window.location.pathname.split("/")[2];
    const [product, setProduct] = useState();
    const [shop, setShop] = useState();
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem({ id: product_id, price: product.price }));
        navigate("/buyer/cart");
    };

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
            <Navbar />
            <div className="product-detail">
                <div className="shop-detail-section">
                    <div className="shop-name">{shop?.shopName}</div>
                    <div className="shop-location">
                        {shop?.location}, {shop?.city}
                    </div>
                </div>
                <div className="product-detail-section">
                    <div className="product-images-section">
                        <div className="main-img">
                            <img src={product?.coverImage || img1} alt="" />
                        </div>
                        <div className="gallery-images">
                            <img
                                src={product?.galleryImages?.at(0) || img2}
                                alt=""
                            />
                            <img
                                src={product?.galleryImages?.at(1) || img3}
                                alt=""
                            />
                            <img
                                src={product?.galleryImages?.at(2) || img4}
                                alt=""
                            />
                            <img
                                src={product?.galleryImages?.at(3) || img5}
                                alt=""
                            />
                            <img
                                src={product?.galleryImages?.at(4) || img6}
                                alt=""
                            />
                        </div>
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
        </div>
    );
};

export default ProductDetail;
