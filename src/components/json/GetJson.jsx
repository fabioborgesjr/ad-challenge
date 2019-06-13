import Button from '../utils/button/Button'
import '../utils/button/Button.css'
import React, { Component } from 'react'
import Axios from 'axios';

export default class GetJson extends Component {

    constructor(props) {
        super(props)

        this.getJson = this.getJson.bind(this)
    }

    state = { ...this.props.initial }

    getJson() {
        Axios.get(`https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${this.state.token}`).then(response => {            
            this.setState(response.data)    
            this.props.update(this.state)
        })
    }

    render() {
        return (
            <div className='button__container'>
                <Button onClick={this.getJson} value="Mostrar o cifrado"/>
            </div>
        )
    }

}

