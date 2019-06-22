import Button from '../utils/button/Button'
import '../utils/button/Button.css'
import React, { Component } from 'react'
import Axios from 'axios';

export default class Actions extends Component {

    state = { ...this.props.initial }

    action = undefined;

    constructor(props) {
        super(props)

        this.getCifrado = this.getCifrado.bind(this)
        this.getDecifrado = this.getDecifrado.bind(this)

        switch (this.props.id) {
            case "cifrado":
                this.action = this.getCifrado
                break
            case "decifrado":
                this.action = this.getDecifrado
                break
            default:
                this.action = this.props.action
                break;
        }
    }

    getCifrado() {
        Axios({
            method: 'get',
            url: `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${this.state.token}`,
        }).then((response) => {
            this.setState(response.data)
            this.props.action(this.state)
        });
    }

    getDecifrado() {

        const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        const cifrado = this.props.initial.cifrado;

        let criptografia = { ...this.props.initial };

        if (cifrado === "") {
            console.log("Cifrado não encontrado")
        } else if (criptografia.decifrado !== "") {
            console.log("Criptografia já decifrada")
        } else {
            for (let i = 0; i < cifrado.length; i++) {
                if (cifrado.charAt(i).match(/\W/g)) {
                    criptografia.decifrado += cifrado.charAt(i)
                } else {
                    for (let j = 0; j < alphabet.length; j++) {
                        if (alphabet[j] === cifrado.charAt(i)) {
                            criptografia.decifrado += alphabet[j - criptografia.numero_casas]
                        }
                    }
                }
            }
        }

        criptografia.decifrado = criptografia.decifrado.toLowerCase()

        this.props.action(criptografia)
    }


    render() {
        return (
            <div className='button__container'>
                <Button id={this.props.id} onClick={this.action} value={this.props.value} />
            </div>
        )
    }

}

