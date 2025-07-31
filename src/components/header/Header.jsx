import React from "react";
import styles from "./Header.module.scss";
import {Link} from "react-router-dom";
import IconSvg from "../IconSvg/IconSvg.jsx";
import {useSelector} from 'react-redux';

const Header = () => {
    const cart = useSelector((state) => state.cart.items);
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className={styles.header}>
            <nav>
                <Link to="/">
                    <IconSvg width={40} height={40} id="logo"/>
                </Link>
                <Link to="/Shop" className={styles[`nav__link`]}>
                    Shop
                </Link>
                <Link to="/Cart" className={styles[`nav__link`]}>
                    {cart.length > 0 && (
                        <span>
                            {total}
                        </span>
                    )}
                    <IconSvg width={40} height={40} id="shop"/>
                </Link>
            </nav>
        </header>
    )
}

export default Header;