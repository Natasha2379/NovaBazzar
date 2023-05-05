import React from "react";
import "./ShopSlidebar.scss";
import {
    ClothesProductCategoryData,
    ElectronicsProductCategoryData,
    KiranaProductCategoryData,
    MedicalProductCategoryData,
    ParlourProductCategoryData,
} from "../CategoryData";

const ShopSlidebar = (props) => {
    return (
        <div className="shopSlidebar">
            <h3>Product Categories</h3>
            {props.shop?.shopType === "Kirana shop" && (
                <ul className="flex column ">
                    {KiranaProductCategoryData.KiranaProductCategories.map(
                        (category) => (
                            <li
                                onClick={() => props.setType(category)}
                                key={category}
                            >
                                {category}
                            </li>
                        ),
                    )}
                </ul>
            )}
            {props.shop?.shopType === "Clothes shop" && (
                <ul className="flex column ">
                    {ClothesProductCategoryData.ClothesProductCategories.map(
                        (category) => (
                            <li
                                onClick={() => props.setType(category)}
                                key={category}
                            >
                                {category}
                            </li>
                        ),
                    )}
                </ul>
            )}
            {props.shop?.shopType === "Medical shop" && (
                <ul className="flex column ">
                    {MedicalProductCategoryData.MedicalProductCategories.map(
                        (category) => (
                            <li
                                onClick={() => props.setType(category)}
                                key={category}
                            >
                                {category}
                            </li>
                        ),
                    )}
                </ul>
            )}
            {props.shop?.shopType === "Electronics shop" && (
                <ul className="flex column ">
                    {ElectronicsProductCategoryData.ElectronicsProductCategories.map(
                        (category) => (
                            <li
                                onClick={() => props.setType(category)}
                                key={category}
                            >
                                {category}
                            </li>
                        ),
                    )}
                </ul>
            )}
            {props.shop?.shopType === "Parlour shop" && (
                <ul className="flex column ">
                    {ParlourProductCategoryData.ParlourProductCategories.map(
                        (category) => (
                            <li key={category}>{category}</li>
                        ),
                    )}
                </ul>
            )}
        </div>
    );
};

export default ShopSlidebar;
