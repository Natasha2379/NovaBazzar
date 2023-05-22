import React, { useEffect, useState } from "react";
import "./CartItem.scss";
import image from "../../assets/dummy-img.jpg";
import { useDispatch } from "react-redux";
import { increaseItem, removeItem } from "../../redux/slices/cartSlice";
import { getProductDetails, getShopDetails } from "../../services/api";

const CartItem = (props) => {
    const [product, setProduct] = useState();
    const [shop, setShop] = useState();
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getProductDetails(props.item.productId);
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

    // useEffect(() => {
    //     if (quantity===0) {
    //         handleRemoveFromCart();
    //     }
    // }, [quantity]);

    const handleItemIncrease = (value) => {
        dispatch(
            increaseItem({
                productId: props.item.productId,
                shopId: props.item.shopId,
                sellerId: props.item.sellerId,
                price: product.price,
                quantity: value,
            }),
        );
    };

    const handleRemoveFromCart = () => {
        dispatch(
            removeItem({
                id: props.item.id,
                price: product.price,
                quantity: props.item.quantity,
            }),
        );
    };
    return (
        <div className="cart-item flex ">
            <div className="row flex align-center space">
                <div className="img-area">
                    <img src={product?.CoverImage || image} alt="" />
                </div>
                <div className="item-name">{product?.name}</div>
                <div className="shop-name">{shop?.shopName}</div>
            </div>
            <div className="row flex align-center space">
                <div className="item-quantity">
                    <input
                        type="number"
                        value={quantity}
                        id=""
                        placeholder=""
                        onChange={(e) => {
                            setQuantity(e.target.value);
                            handleItemIncrease(e.target.value);
                        }}
                    />
                </div>
                <div className="item-price">₹ {product?.price * quantity}</div>
                <button onClick={handleRemoveFromCart}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;
