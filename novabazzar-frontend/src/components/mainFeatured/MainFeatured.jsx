import React from "react";
import "./MainFeatured.scss";

import hero1 from "../../assets/hero1.png";

const MainFeatured = () => {
    return (
        <div className="main-sliders flex abs-center">
            <div className="main-text ">
               <h1>One for all solution, for <br />shopping from <span>nearby shops</span></h1>
            </div>
            <div className="hero-img">
                <img src={hero1} alt="" />
            </div>
        </div>
    );
};

export default MainFeatured;
