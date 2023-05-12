import React from "react";
import "./SellerOrders.scss";
import Item from "./Item";
import { selectUser_ID } from "../../../redux/slices/userSlice";
import { useSelector } from "react-redux";
import { changeOrderStatus } from "../../../services/api";

const SellerOrders = (props) => {
    const userid = useSelector(selectUser_ID);
    const handleStatus = async (status) => {
        const confirm = window.confirm(
            `are you sure you want to mark the order as ${status}!!`,
        );
        try {
            if (confirm) {
                await changeOrderStatus(props.order?._id, status);
                window.alert(`order ${status}`);
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };
    console.log(props.order);
    return (
        <div className="seller-orders flex column">
            <Item item={props?.order} />
            {props.order?.sellerId === userid &&
                props.order?.status === "Pending" && (
                    <div>
                        <div
                            onClick={() => handleStatus("Cancelled")}
                            style={{ cursor: "pointer" }}
                        >
                            Cancel
                        </div>
                        <div
                            onClick={() => handleStatus("Completed")}
                            style={{ cursor: "pointer" }}
                        >
                            Mark as Complete
                        </div>
                    </div>
                )}
        </div>
    );
};

export default SellerOrders;
