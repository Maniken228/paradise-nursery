import React from "react";
import styles from "./Title.module.scss";

const Title = ({style}) => {
    return (
        <h1 className={styles.title} style={style}>
            Paradise Nursery
        </h1>
    )
}

export default Title;