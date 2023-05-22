import { useEffect, useState } from "react";
import { deleteOrderDetails, getProductDetails } from "../../../services/api";
import { useSelector } from "react-redux";
import { selectUser_ID } from "../../../redux/slices/userSlice";

const Item = (props) => {
    const userid = useSelector(selectUser_ID);
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

    const handleDeleteOrder = async (id) => {
        try {
            const confirm = window.confirm(
                "are you sure you want to delete the order from records!!",
            );
            if (confirm) {
                await deleteOrderDetails(id, userid);
                window.alert("order deleted");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="product-detail flex align-center  wrap">
            <div className="img-area">
                <img src={product?.coverImage} alt="" />
            </div>
            <div className="product-name">{product?.name}</div>
            <div className="product-status">{props.item?.status}</div>
            <div className="product-quantity">{props.item?.quantity}</div>
            <div className="product-total-price">
                Rs. {props.item?.price * props.item?.quantity}
            </div>
            <div className="product-remove">
                <i
                    className="fa-solid fa-trash"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDeleteOrder(props.item._id)}
                ></i>
            </div>
        </div>
    );
};

export default Item;
