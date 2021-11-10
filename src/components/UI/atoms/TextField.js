import React, { useEffect, } from "react";
import styles from './atoms.module.css';

export const TextField = function({
    fieldRef,
    ariaLabel
}){
    
    return(
        <input 
            type="text" 
            ref={fieldRef} 
            className={styles.filterField} 
            aria-label={ariaLabel}
        />
    )
}
