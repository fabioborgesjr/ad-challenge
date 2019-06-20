import React from 'react'

let color = "";

export default props => {

    switch (props.id) {
        case "cifrado":
            color = "light"
            break;
        case "decifrado":
            color = "dark"
            break;
        case "enviar":
            color = "success"
            break;
        default:
            color = "light"
            break;
    }

    return (
        <button id={props.id} className={`btn btn-${color}`} onClick={props.onClick}>
            {props.value}
        </button>
    )
}