import React from "react";
import "./ProductDetail.scss";
import Navbar from "../../components/Navbar/navbar";
import img1 from "../../assets/shoes.jpg";
import img2 from "../../assets/apple.jpg";
import img3 from "../../assets/jacket.jpg";
import img4 from "../../assets/sellerLogin.jpg";
import img5 from "../../assets/openshop.jpg";
import img6 from "../../assets/banner.jpg";
import Product from "../../components/productCard/product";

const ProductDetail = () => {
    return (
        <div className="ProductDetailPage">
            <Navbar />
            <div className="product-detail">
                <div className="shop-detail-section">
                    <div className="shop-name">Multan Store</div>
                    <div className="shop-location">Jabalpur,New Delhi</div>
                </div>
                <div className="product-detail-section">
                    <div className="product-images-section">
                        <div class="main-img">
                            <img src={img1} alt="" />
                        </div>
                        <div class="gallery-images">
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                            <img src={img5} alt="" />
                            <img src={img6} alt="" />
                        </div>
                    </div>
                    <div class="product-about-section">
                        <div className="product-name">Coca-Cola Soft Drink</div>
                        <div className="product-quantity">750 ml</div>
                        <div className="product-price">$ 40</div>
                        <div className="buttons-section">
                            <button className="cartbtn">Add to cart</button>
                            <button className="buybtn">Buy now</button>
                        </div>
                        <div className="product-desc">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            quibusdam rerum mollitia quod commodi itaque, vitae
                            facilis ducimus dolore similique magnam error quo
                            voluptatum ullam distinctio! is doloribus enim sint,
                            soluta animi quibusdam culpa dolorem odit voluptatem
                            obcaecati? Repellendus voluptas nesciunt nulla ex,
                            recusandae velit numquam sed dolores soluta placeat
                            doloribus. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Nostrum aperiam dolorum facilis
                            dolore, vero consequatur, non saepe et, cupiditate
                            officia pariatur placeat velit praesentium omnis
                            esse dicta consectetur nihil? Aliquid libero
                            asperiores quisquam cupiditate ad tempore
                            consequatur aliquam numquam ducimus id totam minus,
                            quia fugit reiciendis quod ut voluptates culpa.
                        </div>
                    </div>
                </div>
            </div>
            <div className="related-products-section">
                <h2>Related items</h2>
                <Product />
            </div>
        </div>
    );
};

export default ProductDetail;
