import React, { useEffect, useState } from "react";
import "./CartItem.scss";
import image from "../../assets/shoes.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
    removeItem,
    selectCartItems,
    selectCartTotalCost,
} from "../../redux/slices/cartSlice";
import { getProductDetails, getShopDetails } from "../../services/api";

const CartItem = (props) => {
    const totalPrice = useSelector(selectCartTotalCost);
    const cartItems = useSelector(selectCartItems);

    const [product, setProduct] = useState();
    const [shop, setShop] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getProductDetails(props.item);
                setProduct(res.data.product);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [props.item]);

    useEffect(() => {
        const fetchShop = async () => {
            try {
                if (product?.shopId) {
                    const res = await getShopDetails(product?.shopId);
                    setShop(res.data.shop);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchShop();
    }, [product]);

    const handleRemoveFromCart = () => {
        dispatch(removeItem({ id: props.item, price: product.price }));
    };
    return (
        <>
            <div className="cartbyshop">
                <div className="shop-name">{shop?.shopName}</div>
                <div className="cart-items"></div>
                <div className="cart-item">
                    <div className="img-area">
                        <img src={product?.CoverImage || image} alt="" />
                    </div>
                    <div className="item-name">{product?.name}</div>
                    <div className="item-quantity">
                        <input type="number" name="" id="" placeholder="0" />
                    </div>
                    <div class="item-price">₹ {product?.price}</div>
                    <button onClick={handleRemoveFromCart}>Remove</button>
                </div>

                <div className="bottom-section">
                    <div className="total-items">
                        Total items : {cartItems.length}
                    </div>
                    <div className="total-price">Total Price: {totalPrice}</div>
                    <button>Buy Now</button>
                </div>
            </div>
        </>
    );
};

export default CartItem;
