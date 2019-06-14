import Button from '../utils/button/Button'
import '../utils/button/Button.css'
import React, { Component } from 'react'
import Axios from 'axios';

export default class Actions extends Component {

    constructor(props) {
        super(props)

        this.getCifrado = this.getCifrado.bind(this)
    }

    state = { ...this.props.initial }

    getCifrado() {
        Axios.get(`https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${this.state.token}`).then(response => {            
            this.setState(response.data)    
            this.props.update(this.state)
        })
    }

    render() {
        return (
            <div className='button__container'>
                <Button id={this.props.id} onClick={this.getCifrado} value={this.props.value}/>
            </div>
        )
    }

}

