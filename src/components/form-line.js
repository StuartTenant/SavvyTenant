import React from 'react'

import PropTypes from 'prop-types'

import './form-line.css'
import { Component } from 'react/cjs/react.production.min'

class FormLine extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`form-line-container ${this.props.rootClassName} `}>
        <div className="form-line-container1">
          <span className="form-line-text content">{this.props.text}</span>
          <input
            onChange={(val) => { this.props.onChange(val); }}
            type="text"
            placeholder={this.props.textinput_placeholder}
            value={this.props.value}
            className="form-line-textinput input"
          />
          {this.props.error && <span style={{
            color: '#cc0000',
            alignSelf: 'flex-start'
          }}>{this.props.error}</span>}
        </div>
      </div>
    )
  }
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
