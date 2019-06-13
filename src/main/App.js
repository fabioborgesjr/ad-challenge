import React, { Component } from 'react'
import './App.css'
import Display from '../components/utils/display/Display';
import GetJson from '../components/json/GetJson';
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

    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Criptografia de Júlio César</header>
        <Intro />
        <GetJson initial={this.state} update={this.update} />
        <Display value={this.state.cifrado === "" ? `Clique no botão "Mostrar o cifrado" para exibi-lo.` : this.state.cifrado} />
      </div>
    )
  }
}

export default App
