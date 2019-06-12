import Button from '../utils/button/Button'
import '../utils/button/Button.css'
import React, { Component } from 'react'
import Axios from 'axios';

const initialState = {
    "numero_casas": 0,
    "token": "98e5a51c7b425c92f4282fb7b9a0ac5333d7cf69",
    "cifrado": "",
    "decifrado": "",
    "resumo_criptografico": ""
}

export default class GetJson extends Component {

    constructor() {
        super()

        this.handleClick = this.handleClick.bind(this)
    }

    state = { ...initialState }

    handleClick() {
        const stateAux = { ...this.state }

        Axios.get(`https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${this.state.token}`).then(response => {
            stateAux.cifrado = response.data.cifrado
            stateAux.numero_casas = response.data.numero_casas
        })

        this.setState(stateAux)
    }

    render() {
        return (
            <div className='button__container'>
                <Button onClick={this.handleClick} value="Mostrar o cifrado"/>
            </div>
        )
    }

}

