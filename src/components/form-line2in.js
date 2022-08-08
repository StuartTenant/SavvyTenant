import React from 'react'

import PropTypes from 'prop-types'

import './form-line2in.css'

const FormLine2in = (props) => {
  return (
    <div className={`form-line2in-container ${props.rootClassName} `}>
      <div className="form-line2in-container1">
        <span className="form-line2in-text">{props.text}</span>
        <div className="form-line2in-container2">
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            className="form-line2in-textinput input"
          />
          <input
            type="text"
            placeholder={props.textinput_placeholder1}
            className="form-line2in-textinput1 input"
          />
        </div>
      </div>
    </div>
  )
}

FormLine2in.defaultProps = {
  textinput_placeholder: 'placeholder1',
  rootClassName: '',
  textinput_placeholder1: 'placeholder2',
  text: 'description',
}

FormLine2in.propTypes = {
  textinput_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text: PropTypes.string,
}

export default FormLine2in
