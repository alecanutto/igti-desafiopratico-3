import React from 'react'
import { csvText, invertText, numericText, slugText, vowelsOnly, variableText } from '../../helpers/functions';
import Input from '../Input/Input'
import css from './transformer.module.css';

export default function Transformer(props) {

  const handleChange = (value) => {
    props.onChangeText(value);
  }

  const { inputText } = props;
  return (
    <div className={css.containerHeader} >
      <h3 className={css.title}>Transformações</h3>
      <Input
        inputId='invertText'
        labelText='Texto invertido:'
        readOnly='true'
        visibleButton='true'
        inputText={invertText(inputText)}
        onChangeText={handleChange}
      />
      <Input
        inputId='numericText'
        labelText='Texto numérico:'
        readOnly='true'
        visibleButton='true'
        inputText={numericText(inputText)}
        onChangeText={handleChange}
      />
      <Input
        inputId='csvText'
        labelText='CSV:'
        readOnly='true'
        visibleButton='true'
        inputText={csvText(inputText)}
        onChangeText={handleChange}
      />
      <Input
        inputId='slugText'
        labelText='Slug:'
        readOnly='true'
        visibleButton='true'
        inputText={slugText(inputText)}
        onChangeText={handleChange}
      />
      <Input
        inputId='vowelsText'
        labelText='Somente vogais:'
        readOnly='true'
        visibleButton='true'
        inputText={vowelsOnly(inputText, true)}
        onChangeText={handleChange}
      />
      <Input
        inputId='consonantsText'
        labelText='Somente consoantes:'
        readOnly='true'
        visibleButton='true'
        inputText={vowelsOnly(inputText, false)}
        onChangeText={handleChange}
      />
      <Input
        inputId='variableText'
        labelText='Variável:'
        readOnly='true'
        visibleButton='true'
        inputText={variableText(inputText)}
        onChangeText={handleChange}
      />
    </div>
  )
}
