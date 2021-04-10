import React, { Component } from 'react';
import Header from './components/header/Header';
import Transformer from './components/transformer/Transformer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: 'Aprendendo React'
    }
  }

  handleChange = (newText) => {
    this.setState({ inputText: newText });
  };

  render() {
    const { inputText } = this.state;
    return (
      <div>
        <Header
          inputId='inputText'
          labelText='Digite um texto qualquer:'
          inputText={inputText}
          onChangeText={this.handleChange}
        />
        <Transformer
          inputText={inputText}
          onChangeText={this.handleChange}
        />
      </div>
    );
  }
}
