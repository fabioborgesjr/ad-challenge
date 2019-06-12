import React, { Component } from 'react'
import './App.css'
import Display from '../components/utils/display/Display';
import GetJson from '../components/json/GetJson';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">Criptografia de Júlio César</header>
        <GetJson/>
        <Display/>
      </div>
    )
  }
}

export default App
