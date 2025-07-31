import React from "react";
import Main from "../../components/main/Main.jsx";
import Title from "../../components/title/Title.jsx";
import styles from "./HomePage.module.scss";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <Main>
            <div className={styles[`home-page__wrap`]}>
                <div className={styles[`home-page__title-wrap`]}>
                    <Title />
                    <div className={styles[`home-page__subtitle`]}>
                        Eco-friendly plants
                    </div>
                    <Link to="/Shop" className={styles[`home-page__link`]}>
                        Shop now
                    </Link>
                </div>
                <div className={styles[`home-page__content`]}>
                    <h3>
                        Welcome to Paradise Nursery, where green meets serenity!
                    </h3>

                    <span className={styles[`home-page__text`]}>
                    At Paradise Nursery, we are passionate about bringing nature closer to you.
                Our mission is to provide a wide range of high-quality plants that not only
                enhance the beauty of your surroundings but also contribute to a healthier
                and more sustainable lifestyle. From air- purifying plants to aromatic fragrant
                ones, we have something for every plant enthusiast.
                </span>

                    <span className={styles[`home-page__text`]}>
                    Our team of experts is dedicated to ensuring that each plant meets our
                strict standards of quality and care. Whether you're a seasoned gardener
                or just starting your green journey, we're here to support you every step
                of the way. Feel free to explore our collection, ask questions, and let us
                help you find the perfect plant for your home or office.
                </span>
                </div>
            </div>
        </Main>
    )
}

export default HomePage;