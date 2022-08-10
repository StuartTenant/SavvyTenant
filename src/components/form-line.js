import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './form-line.css'
import { Component } from 'react/cjs/react.production.min'

function FormLine(props) {
  return (
    <div className={`form-line-container ${props.rootClassName} `}>
      <div className="form-line-container1">
        <span className="form-line-text content">{props.text}</span>
        {props.numbers == true && <input
          type="number"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onChange={(val) => { props.onChange(val); }}
          placeholder={props.textinput_placeholder}
          value={props.value}
          className="form-line-textinput input"
        />}
        {props.numbers == null && <input
          onChange={(val) => { props.onChange(val); }}
          type="text"
          placeholder={props.textinput_placeholder}
          value={props.value}
          className="form-line-textinput input"
        />}

        {props.error && <span style={{
          color: '#cc0000',
          alignSelf: 'flex-start'
        }}>{props.error}</span>}
      </div>
    </div>
  );

}

FormLine.defaultProps = {
  rootClassName: '',
  text: 'description',
  textinput_placeholder: 'placeholder',
}

FormLine.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default FormLine
