import React from 'react';
import styles from "./Loader.module.scss";
const Loader = ({black, active}) => {
    return (
        <span className={`${styles.loader} ${black ? styles.loader__black : ''} ${!active ? styles.loader__active : ''}`}/>
    );
}

export default Loader;
