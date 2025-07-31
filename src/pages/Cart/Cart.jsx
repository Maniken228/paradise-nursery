import React from "react";
import Main from "../../components/main/Main.jsx";
import Header from "../../components/header/Header.jsx";
import {useSelector} from 'react-redux';
import {removeFromCart, decrementQuantity, incrementQuantity} from "../../store/cartSlice.js";
import {useDispatch} from "react-redux";
import styles from "./Cart.module.scss";
import {Link} from "react-router-dom";
import Title from "../../components/title/Title.jsx";

const Cart = () => {
    const cart = useSelector((state) => state.cart.items);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const dispatch = useDispatch();

    return (
        <>
            <Header />
            <Main>
                <Title style={{color: "#fff"}}/>
                {cart.length > 0 && (
                    <div className={styles[`cart__price`]}>
                        Total Cart Amount: ${totalPrice}
                    </div>
                )}
                <div className={styles[`cart__total`]}>
                    {cart.map((item, index) => (
                        <div className={styles[`card`]} key={index}>
                            <img src={new URL(`../../assets/plants/${item.title}.webp`, import.meta.url).href} alt={item.title} />
                            <div className={styles[`card__info`]}>
                                <div className={styles[`card__info-title`]}>
                                    {item.title}
                                </div>
                                <div className={styles[`card__info-price`]}>
                                    ${item.price}
                                </div>
                                <div className={styles[`card__info-total`]}>
                                    <button type="button" onClick={() => dispatch(decrementQuantity(item.title))}>-</button>
                                    {item.quantity}
                                    <button type="button" onClick={() => dispatch(incrementQuantity(item.title))}>+</button>
                                </div>
                                <div className={styles[`card__info-price`]}>
                                    Total: ${item.price * item.quantity}
                                </div>
                                <button
                                    className={styles[`cart__total-button`]}
                                    type="button"
                                    onClick={() => dispatch(removeFromCart(item.title))}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <Link to="/Shop" className={styles.link}>
                    Continue Shopping
                </Link>
                <button type="button" className={styles.link}  onClick={() => alert("Coming Soon!")}>
                    Checkout
                </button>
            </Main>
        </>
    )
}

export default Cart;