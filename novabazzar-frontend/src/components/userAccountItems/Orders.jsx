import React from "react";
import "./UserAccount.scss";
// import Product from "../productCard/Product";
import MyOrders from "../shopComponents/sellerOrders/SellerOrders";
import { changeOrderStatus } from "../../services/api";

const Orders = (props) => {
    const handleOrderCancel = async (id) => {
        try {
            const confirm = window.confirm(
                "are you sure you want to cancel the order!!",
            );
            if (confirm) {
                await changeOrderStatus(id, "Cancelled");
                window.alert("order cancelled");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="ordersTab">
            {props.orders?.length
                ? props.orders?.map((order) => (
                      <div className="orderContainer">
                          <div className="orderHeading">
                              <b>OrderID:</b> {order?._id}
                          </div>
                          <MyOrders order={order} key={order._id} />
                          {order?.status === "Pending" && (
                              <div className="book-btn">
                                  <button
                                      onClick={() =>
                                          handleOrderCancel(order._id)
                                      }
                                  >
                                      Cancel this item
                                  </button>
                              </div>
                          )}
                      </div>
                  ))
                : "YOU HAVE NO ORDERS..."}
        </div>
    );
};

export default Orders;
