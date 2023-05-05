import React, { useEffect, useState } from "react";

import Product from "../ProductCard/Product";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/slices/userSlice";
import { getProductDetails } from "../../services/api";

const Favorites = () => {
    const user = useSelector(selectUserData);
    const [favouriteIds, setFavouriteIds] = useState([]);
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        setFavouriteIds(user?.favourites);
    }, [user]);
    console.log(favourites);

    useEffect(() => {
        const fetchProduct = async () => {
            user?.favourites.map(async (item) => {
                try {
                    const res = await getProductDetails(item);
                    setFavourites((favourites) => [
                        ...favourites,
                        res.data.product,
                    ]);
                } catch (error) {
                    console.log(error);
                }
            });
        };
        fetchProduct();
    }, []);

    return (
        <div className="myfavourites">
            {favourites.map((product, index) => (
                <Product
                    product={product}
                    key={index}
                    favouriteIds={favouriteIds}
                    setFavouriteIds={setFavouriteIds}
                />
            ))}
        </div>
    );
};

export default Favorites;
