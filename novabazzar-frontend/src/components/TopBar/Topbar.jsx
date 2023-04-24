import React, { useState } from "react";
import styles from "./topbar.module.scss";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/slices/userSlice";

const HomeTopbar = () => {
    const user = useSelector(selectUserData);
    const [search, setSearch] = useState("");
    console.log(search);

    return (
        <div className={styles.topbarContainer}>
            <div className={styles.topbarLogo}>Nova Bazzar</div>
            <div className={styles.topbarSearchContainer}>
                <FiSearch className={styles.searchIcon} />
                <input
                    className={styles.search}
                    placeholder={`Search "milk"`}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className={styles.topbarLinksContainer}>
                <Link to="/cart" className={styles.topbarLink}>
                    Cart
                </Link>
                {user ? (
                    <Link to="/profile" className={styles.topbarLink}>
                        My Account
                    </Link>
                ) : (
                    <>
                        <Link to="/seller" className={styles.topbarLink}>
                            Become a Seller
                        </Link>
                        <Link to="/buyer" className={styles.topbarLink}>
                            Login as Buyer
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default HomeTopbar;
