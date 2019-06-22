import React, { Component } from 'react'
import './App.css'

import Display from '../components/utils/display/Display';
import Actions from '../components/json/Actions';
import Intro from '../components/intro/Intro';
import sha1 from 'js-sha1';
import Axios from 'axios';

const initialState = {
  numero_casas: 2,
  token: "",
  cifrado: "vjg kpvgtpgv? ku vjcv vjkpi uvknn ctqwpf? jqogt ukoruqp",
  decifrado: "",
  resumo_criptografico: ""
}

class App extends Component {

  state = { ...initialState }
  valueToShow = `Clique no botão "Mostrar o valor cifrado" para exibir o valor a ser decifrado.`

  constructor() {
    super()

    this.update = this.update.bind(this)
    this.send = this.send.bind(this)
  }

  update(obj) {
    
    if (obj.decifrado !== "") {
      const hash = sha1.create();
      hash.update(obj.decifrado)
      obj.resumo_criptografico = hash.hex();

      this.valueToShow = obj.decifrado
    } else {
      this.valueToShow = obj.cifrado
    }

    this.setState(obj);
  }

  send() {

    const criptografia = { ...this.state }
    
    const blob = new Blob([JSON.stringify(criptografia)], {type : 'application/json'});
    const answer = new File([blob], 'answer.json');
    
    const bodyFormData = new FormData();    
    bodyFormData.set('answer', answer);

    Axios({
      method: 'POST',
      url: `https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=${criptografia.token}`,
      data: bodyFormData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
      this.valueToShow = `Criptografia enviada com sucesso. Score: ${res.data.score}`
      this.setState(criptografia)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Criptografia de Júlio César</header>
        <Intro />
        <div className="btn-group">
          <Actions id="cifrado" value="Mostrar o valor cifrado" initial={this.state} action={this.update} />
          <Actions id="decifrado" value="Mostrar o valor decifrado" initial={this.state} action={this.update} />
          <Actions id="enviar" value="Enviar o objeto descriptografado" initial={this.state} action={this.send} />
        </div>
        <Display value={this.valueToShow} />
      </div>
    )
  }
}

export default App
