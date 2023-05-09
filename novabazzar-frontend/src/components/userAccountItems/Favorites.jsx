import React, { useEffect, useState } from "react";

import Product from "../ProductCard/Product";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/slices/userSlice";
import { getProductDetails } from "../../services/api";

const Favorites = () => {
    const user = useSelector(selectUserData);
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        setFavourites(user?.favourites);
    }, [user]);
    // console.log(favourites);
    // console.log(favouriteIds);

    useEffect(() => {
        const fetchProduct = async () => {
            user?.favourites.map(async (item) => {
                try {
                    const res = await getProductDetails(item);
                    const productToAdd = res.data.product;
                    setFavourites((prevFavourites) => [
                        ...prevFavourites,
                        productToAdd,
                    ]);
                } catch (error) {
                    console.log(error);
                }
            });
        };
        fetchProduct();
    }, []);

    return (
        <div className="myfavourites flex wrap ">
            {favourites.length
                ? favourites.map((product, index) => (
                      <Product
                          product={product}
                          key={index}
                          favourites={favourites}
                          setFavourites={setFavourites}
                          className="fav-product"
                      />
                  ))
                : " YOU HAVE NOT ADDED ANY PRODUCT TO FAVOURITES..."}
        </div>
    );
};

export default Favorites;
