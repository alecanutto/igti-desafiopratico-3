import React from 'react';
import css from './input.module.css';

export default function Input(props) {

  const handleChange = (ev) => {
    props.onChangeText(ev.target.value);
  }

  const copyToClipboard = () => {
    var copyText = document.getElementById(props.inputId);
    if (copyText != null) {
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
    }
  }

  const { labelText, inputId, readOnly, visibleButton, inputText } = props;
  return (
    <div className={css.container}>
      <label htmlFor={inputId} className={css.titleInput} >{labelText}</label>
      <div className={css.containerInput} >
        <input type="text" id={inputId} value={inputText} onChange={handleChange} readOnly={!!readOnly} />
        {visibleButton && (
          <button className={css.button}>
            <i className="material-icons" onClick={copyToClipboard}>content_copy</i>
          </button>
        )}
      </div>
    </div>
  );
}

