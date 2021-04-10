import React, { Component } from 'react'
import Input from '../Input/Input';
import css from './header.module.css';

export default class Header extends Component {

  handleChange = (value) => {
    this.props.onChangeText(value);
  }

  render() {
    const { labelText, inputId, inputText } = this.props;
    return (
      <div className={css.containerHeader} >
        <h1 className={css.title}>react-text-transformer</h1>
        <div>
          <Input
            labelText={labelText}
            inputId={inputId}
            inputText={inputText}
            onChangeText={this.handleChange}
          />
        </div>
      </div>
    )
  }
}
