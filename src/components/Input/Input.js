import React, { Component } from 'react';
import css from './input.module.css';

export default class Input extends Component {

  handleChange = (ev) => {
    this.props.onChangeText(ev.target.value);
  }

  copyToClipboard = () => {
    var copyText = document.getElementById(this.props.inputId);
    if (copyText != null) {
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
    }
  }

  render() {
    const { labelText, inputId, readOnly, visibleButton, inputText } = this.props;
    return (
      <div className={css.container}>
        <label htmlFor={inputId} className={css.titleInput} >{labelText}</label>
        <div className={css.containerInput} >
          <input type="text" id={inputId} value={inputText} onChange={this.handleChange} readOnly={!!readOnly} />
          {visibleButton && (
            <button className={css.button}>
              <i className="material-icons" onClick={this.copyToClipboard} >content_copy</i>
            </button>
          )}
        </div>
      </div>
    );
  }
}

