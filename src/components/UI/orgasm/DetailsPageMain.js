import React, { useEffect, } from "react";
import styles from './orgasm.module.css';
import { AllDetails } from '../molecules/AllDetails';
export const DetailsPageMain = function(props){
    console.log(props);
    return(
        <main className={styles.listWrapper} aria-label={'page main section'}>
            
            <AllDetails
                {...props}
            />          
        </main>
    )
}