import React from "react";
import "./SellerBussiness.scss";

const SellerBussiness = () => {
    return (
        <div className="seller-bussiness">
            <div className="top-items flex align-center column ">
                <div className="box  salesbox flex abs-center column">
                    <p className="sales">Total Sales</p>
                    <p>27</p>
                </div>
                <div className="box ordersbox flex abs-center column">
                    <p className="orders">Total Orders</p>
                    <p>49</p>
                </div>
                <div className="box products-box flex abs-center column">
                    <p className="products">Total Products</p>
                    <p>137</p>
                </div>
                <div className="box revenue-box flex abs-center column">
                    <p className="profit">Total Revenue</p>
                    <p>10 Thousands</p>
                </div>
            </div>
        </div>
    );
};

export default SellerBussiness;
