import React from "react";
import styles from "./Shop.module.scss";
import Header from "../../components/header/Header.jsx";
import Main from "../../components/main/Main.jsx";
import {PLANTS} from "../../data/catalog.js";
import Title from "../../components/title/Title.jsx";
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from "../../store/cartSlice.js";

const Shop = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);

    React.useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <>
            <Header />
            <Main>
                <Title style={{color: "#fff"}}/>
                {Object.entries(PLANTS).map(([categoryName, plantsObj]) => (
                    <div className={styles[`shop__wrap`]} key={categoryName}>
                        <h3>
                            {categoryName}
                        </h3>
                        <div className={styles[`shop-card__wrap`]}>
                            {Object.values(plantsObj).map((plant) => (
                                <div className={styles[`shop-card`]} key={plant.title}>
                                    <figure className={styles[`shop-card__img`]}>
                                        <img src={new URL(`../../assets/plants/${plant.title}.webp`, import.meta.url).href} alt={plant.title} />
                                    </figure>
                                    <div className={styles[`shop-card__price`]}>
                                        ${plant.price}
                                    </div>
                                    <div className={styles[`shop-card__info-wrap`]}>
                                        <div className={styles[`shop-card__info`]}>
                                            <span>
                                                {plant.title}
                                            </span>
                                            <span>
                                                {categoryName}
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            className={styles[`shop-card__btn`]}
                                            disabled={cart.some((item) => item.title === plant.title)}
                                            onClick={() => dispatch(addToCart(plant))}
                                        >
                                            {cart.some((item) => item.title === plant.title) ? "In cart" : "Add to Cart"}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Main>
        </>
    )
}

export default Shop;