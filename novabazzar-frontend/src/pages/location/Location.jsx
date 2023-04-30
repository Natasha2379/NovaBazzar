import React from "react";
import "./Location.scss";
import Navbar from "../../components/Navbar/Navbar";

const Location = () => {
    return (
        <div className="mylocation">
            <Navbar />
            <div className="locationsArea">
                <div className="location-input flex align-center">
                    <span>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input type="text" placeholder="Search area,street name" />
                </div>
                {/* if input area is not empty show this type of results */}
                <div className="search-results flex column ">
                    <h4>Searche Results</h4>
                    <div className="location">
                        <span>
                            <i className="fa-solid fa-location-dot"></i>
                        </span>
                        <span>Yamalpur,Jaipur,Rajasthan</span>
                    </div>
                    <div className="location">
                        <span>
                            <i className="fa-solid fa-location-dot"></i>
                        </span>
                        <span>Yamalpuri,New Delhi,Delhi</span>
                    </div>
                    <div className="location">
                        <span>
                            <i className="fa-solid fa-location-dot"></i>
                        </span>
                        <span>Yamana,Agra,Up</span>
                    </div>
                </div>
                {/* if input area is empty show recent this */}
                <div className="recent-searches  ">
                    <h4>Recent Searches</h4>
                    <div className="recent-choose flex">
                        <span className="recents">
                            <span>
                                <i className="fa-regular fa-clock"></i>
                            </span>
                            <span>Goslan</span>
                        </span>
                        <span className="recents">
                            <span>
                                <i className="fa-regular fa-clock"></i>
                            </span>
                            <span>Kaira</span>
                        </span>
                        <span className="recents">
                            <span>
                                <i className="fa-regular fa-clock"></i>
                            </span>
                            <span>Dirhama</span>
                        </span>
                        <span className="recents">
                            <span>
                                <i className="fa-regular fa-clock"></i>
                            </span>
                            <span>Ambil</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
