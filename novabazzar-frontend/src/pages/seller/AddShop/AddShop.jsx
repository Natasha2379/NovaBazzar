import React, { useState } from "react";
import styles from "./addShop.module.scss";
import { addShop } from "../../../services/api";

const AddShop = () => {
    const [name, setName] = useState("");
    const [shopName, setShopName] = useState("");
    const [shopType, setShopType] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleAddShop = async () => {
        const shopData = {
            name,
            shopName,
            shopType,
            state,
            city,
            email,
            phone,
        };

        try {
            await addShop(shopData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.addShopContainer}>
            <form className={styles.addShopForm} onSubmit={handleAddShop}>
                <div className={styles.addShopHeading}>
                    Open your shop on Nova Bazzar for Free
                </div>
                <div className={styles.addShopDesc}>
                    Please give us few detailsso that we can help you to open
                    your shop on Nova Bazzar, get your bussiness Online with
                    Nova Bazzar free
                </div>
                <input
                    type="text"
                    className={styles.addShopInput}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Full Name"
                />
                <input
                    type="text"
                    className={styles.addShopInput}
                    onChange={(e) => setShopName(e.target.value)}
                    placeholder="Enter your Shop Name"
                />
                <input
                    type="text"
                    className={styles.addShopInput}
                    onChange={(e) => setShopType(e.target.value)}
                    placeholder="Enter your Shop Type"
                />
                <input
                    type="text"
                    className={styles.addShopInput}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Enter your state"
                />
                <input
                    type="text"
                    className={styles.addShopInput}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter your city"
                />
                <p>Set the exact location of your shop</p>
                <div className={styles.addShopLocation}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27750.888696524427!2d76.5067298!3d29.6077242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e030e2a0bbbc1%3A0x6f27bcb13fd6a158!2sFariabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1672811355409!5m2!1sen!2sin"
                        title="Map"
                        width="100%"
                        height="100%"
                        style={{ border: "none" }}
                    ></iframe>
                </div>
                <input
                    type="text"
                    className={styles.addShopInput}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                />
                <input
                    type="text"
                    className={styles.addShopInput}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your Phone Number"
                />
                <button type="submit" className={styles.addShopSubmitButton}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddShop;
