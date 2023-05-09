import { useEffect, useState } from "react";
import { getProductDetails } from "../../../services/api";

const Item = (props) => {
    const [product, setProduct] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getProductDetails(props?.item?.productId);
                setProduct(res.data.product);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProduct();
    }, [props]);

    return (
        <div className="seller-orders flex column">
            <div className="product-detail flex align-center space">
                <div className="img-area">
                    <img src={product?.coverImage} alt="" />
                </div>

                <div className="product-name">{product?.name}</div>
                <div className="product-quantity">{props.item?.quantity}</div>
                <div className="product-quantity">Rs. {props.item?.price}</div>
            </div>
        </div>
    );
};

export default Item;
