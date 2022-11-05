import React, { useContext} from "react";
import { themeContext } from "../App";

export default function FunctionContextComponent() {
    const darkTheme = useContext(themeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        margin: '10px',
        width: '70%',
        display: 'flex',
        'flex-wrap': 'wrap',
        float: 'right',
        position: 'absolute',
        'padding-left': '20px'
    }
    return  (
        <div id="results" style={themeStyles} ></div>
    )

}