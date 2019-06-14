import React, { Component } from 'react'
import './App.css'
import Display from '../components/utils/display/Display';
import Actions from '../components/json/Actions';
import Intro from '../components/intro/Intro';

const initialState = {
  "numero_casas": 0,
  "token": "98e5a51c7b425c92f4282fb7b9a0ac5333d7cf69",
  "cifrado": "",
  "decifrado": "",
  "resumo_criptografico": ""
}

class App extends Component {

  state = { ...initialState }

  constructor() {
    super()

    this.update = this.update.bind(this)
  }

  update(obj) {
    this.setState(obj);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Criptografia de Júlio César</header>
        <Intro />
        <div className="btn-group">
          <Actions id="cifrado" value="Mostrar o valor cifrado" initial={this.state} update={this.update} />
          <Actions id="decifrado" value="Mostrar o valor decifrado" initial={this.state} update={this.update} />
        </div>
        <Display value={this.state.cifrado === "" ? `Clique no botão "Mostrar o cifrado" para exibir o valor a ser decifrado.` : this.state.cifrado} />
      </div>
    )
  }
}

export default App
