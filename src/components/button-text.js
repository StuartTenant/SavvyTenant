import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './button-text.css'

function ButtonText(props) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={`button-text-container ${props.rootClassName} `}>
      <div className="button-text-container1">
        <input onChange={() => { props.checked(); }} onClick={() => { setChecked(!checked) }} type="checkbox" checked={checked} className="" />
        <span className="button-text-text content">{props.text}</span>
      </div>
    </div>
  );


}

ButtonText.defaultProps = {
  text: 'description',
  rootClassName: '',
}

ButtonText.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ButtonText
