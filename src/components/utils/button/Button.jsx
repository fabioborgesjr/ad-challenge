import React from 'react'

export default props => (
    <button id={props.id} className={`${props.id === "cifrado" ? "btn btn-light" : "btn btn-dark"}`} onClick={props.onClick}>
        {props.value}
    </button>
)