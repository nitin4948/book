import React, { useEffect, } from "react";
import { Button } from '../atoms/Button';
import { TextField } from '../atoms/TextField';
import styles from './molecules.module.css';
export const SearchComponent = function({
    fieldRef,
    applyFilterClick,
    applyFilterValue,
    clearFilterClick,
    clearFilterValue
}){

    return(
        <div className={styles.filterContainer}>
            <TextField
                fieldRef={fieldRef}
                ariaLabel={'Search Field'}
            />
            <Button 
                clickEvent={applyFilterClick}
                value={applyFilterValue}
            /> 
            <Button 
                clickEvent={clearFilterClick}
                value={clearFilterValue}
            />            
        </div>
    )
}