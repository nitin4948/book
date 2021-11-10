import React, { useEffect, } from "react";
import styles from './atoms.module.css';

export const HeadingLevelOne  = function({
    style,
    child,
    onClick
}){

    return(
        <h1 
            style={style}
            className={styles.normal}
            onClick={onClick}
        >
            {child}
        </h1>
    )
}