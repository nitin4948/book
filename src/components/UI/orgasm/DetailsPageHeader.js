import React, { useEffect } from "react";
import { Text } from "../atoms/Text";
import {useNavigate} from 'react-router-dom';
import { HeadingLevelOne } from '../atoms/HeadingLevelOne';
export const customStyle = {
    heading: {
        fontWeight: 600,
        margin: "20px",
        fontSize: "25px"
    },
    back: {
        fontWeight: 600,
        margin: "20px",
        fontSize: "16px",
        cursor: "pointer"
    },
}

export const DetailsPageHeader = function(props){
    const navigate = useNavigate();


    return(
        <header>
            <Text
                style={customStyle.back}
                child={"< Back" }
                onClick={()=>navigate('/')}
            />            
            <HeadingLevelOne
                style={customStyle.heading}
                child={props.title}
            />
        </header>
    )
}