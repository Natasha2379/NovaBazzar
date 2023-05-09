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
    console.log(props.type);
    return (
        <div className="shopSlidebar">
            <h3>Product Categories</h3>
            {props.shop?.shopType === "Kiranashop" && (
                <ul className="flex column ">
                    {KiranaProductCategoryData.KiranaProductCategories.map(
                        (category) => (
                            <li
                                onClick={() =>
                                    props.setType(category.replaceAll(" ", ""))
                                }
                                key={category}
                            >
                                {category}
                            </li>
                        ),
                    )}
                </ul>
            )}
            {props.shop?.shopType === "Clothesshop" && (
                <ul className="flex column ">
                    {ClothesProductCategoryData.ClothesProductCategories.map(
                        (category) => (
                            <li
                                onClick={() =>
                                    props.setType(category.replaceAll(" ", ""))
                                }
                                key={category}
                            >
                                {category}
                            </li>
                        ),
                    )}
                </ul>
            )}
            {props.shop?.shopType === "Medicalshop" && (
                <ul className="flex column ">
                    {MedicalProductCategoryData.MedicalProductCategories.map(
                        (category) => (
                            <li
                                onClick={() =>
                                    props.setType(category.replaceAll(" ", ""))
                                }
                                key={category}
                            >
                                {category}
                            </li>
                        ),
                    )}
                </ul>
            )}
            {props.shop?.shopType === "Electronicsshop" && (
                <ul className="flex column ">
                    {ElectronicsProductCategoryData.ElectronicsProductCategories.map(
                        (category) => (
                            <li
                                onClick={() =>
                                    props.setType(category.replaceAll(" ", ""))
                                }
                                key={category}
                            >
                                {category}
                            </li>
                        ),
                    )}
                </ul>
            )}
            {props.shop?.shopType === "Parlourshop" && (
                <ul className="flex column ">
                    {ParlourProductCategoryData.ParlourProductCategories.map(
                        (category) => (
                            <li
                                key={category}
                                onClick={() =>
                                    props.setType(category.replaceAll(" ", ""))
                                }
                            >
                                {category}
                            </li>
                        ),
                    )}
                </ul>
            )}
        </div>
    );
};

export default ShopSlidebar;
