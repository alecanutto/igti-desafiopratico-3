import React, { useState } from 'react';
import Header from './components/header/Header';
import Transformer from './components/transformer/Transformer';

export default function App() {

  const [inputText, setInputText] = useState('Aprendendo React');

  const handleChange = (newText) => {
    setInputText(newText);
  };

  return (
    <div>
      <Header
        inputId='inputText'
        labelText='Digite um texto qualquer:'
        inputText={inputText}
        onChangeText={handleChange}
      />
      <Transformer
        inputText={inputText}
        onChangeText={handleChange}
      />
    </div>
  );
}
