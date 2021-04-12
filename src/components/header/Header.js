import React from 'react'
import Input from '../Input/Input';
import css from './header.module.css';

export default function Header(props) {

  const handleChange = (value) => {
    props.onChangeText(value);
  }

  const { labelText, inputId, inputText } = props;
  return (
    <div className={css.containerHeader} >
      <h1 className={css.title}>react-text-transformer</h1>
      <div>
        <Input
          labelText={labelText}
          inputId={inputId}
          inputText={inputText}
          onChangeText={handleChange}
        />
      </div>
    </div>
  )
}
