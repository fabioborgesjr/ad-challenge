import React from 'react'
import '../button/Button.css'

export default props => (
    <button className='button' onClick={props.onClick}>
        {props.value}
    </button>
)