import React from 'react'

import PropTypes from 'prop-types'

import FormLine from './form-line'
import FormLine2in from './form-line2in'
import SolidButton2Light from './solid-button2light'
import './form-rental1.css'

const FormRental1 = (props) => {
  return (
    <div className="form-rental1-container">
      <h1 className="form-rental1-text">{props.heading}</h1>
      <FormLine
        text="Email"
        rootClassName="form-line-root-class-name7"
        textinput_placeholder="email   "
      ></FormLine>
      <FormLine2in
        text="Name"
        rootClassName="form-line2in-root-class-name3"
        textinput_placeholder="first name"
        textinput_placeholder1="last name"
      ></FormLine2in>
      <span className="form-rental1-text1">{props.text}</span>
      <select className="form-rental1-select">
        <option value="rental" selected>
          I&apos;m looking to find a rental
        </option>
        <option value="inquiry">Have a Question?</option>
      </select>
      <FormLine
        text="Max Price"
        rootClassName="form-line-root-class-name8"
        textinput_placeholder="maximum monthly rent"
      ></FormLine>
      <FormLine
        text="Bedrooms"
        rootClassName="form-line-root-class-name9"
        textinput_placeholder="# bedrooms"
      ></FormLine>
      <div className="form-rental1-container1">
        <SolidButton2Light
          button="Next"
          rootClassName="solid-button2light-root-class-name8"
        ></SolidButton2Light>
      </div>
    </div>
  )
}

FormRental1.defaultProps = {
  text: 'What would you like us to help with?',
  rootClassName: '',
  heading: 'Get started.',
}

FormRental1.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default FormRental1
