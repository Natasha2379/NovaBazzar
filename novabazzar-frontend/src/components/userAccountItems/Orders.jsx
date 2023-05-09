import React, { useEffect, useState } from "react";
import "./UserAccount.scss";
// import Product from "../productCard/Product";
import MyOrders from "../shopComponents/SellerOrders/SellerOrders";
import { useSelector } from "react-redux";
import { selectUser_ID } from "../../redux/slices/userSlice";
import { deleteOrderDetails, getOrdersOfUser } from "../../services/api";

const Orders = () => {
    const userid = useSelector(selectUser_ID);
    const [orders, setOrders] = useState();

    const handleOrderCancel = async (id) => {
        try {
            await deleteOrderDetails(id);
            window.alert("order cancelled");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await getOrdersOfUser(userid);
                setOrders(res.data.orders);
            } catch (err) {
                console.log(err);
            }
        };
        fetchOrders();
    }, [userid]);

    return (
        <div className="ordersTab">
            {orders?.length
                ? orders?.map((order) => (
                      <div className="orderContainer">
                          {/* <div className="orderHeading">
                              <b>OrderID:</b> {order?._id}
                          </div> */}
                          <MyOrders order={order} key={order._id} />
                          {/* <div className="book-btn">
                              <button
                                  onClick={() => handleOrderCancel(order._id)}
                              >
                                  Cancel
                              </button>
                          </div> */}
                      </div>
                  ))
                : "YOU HAVE NO ORDERS..."}
        </div>
    );
};

export default Orders;
