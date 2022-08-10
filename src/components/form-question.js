import React, { useState } from 'react'

import PropTypes from 'prop-types'

import FormLine from './form-line'
import FormLine2in from './form-line2in'
import SolidButton from './solid-button'
import './form-question.css'
import { Component } from 'react/cjs/react.production.min'
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "../firebase"

function FormQuestion(props) {
  const [emailError, setEmailError] = useState("");
  const [questionError, setQuestionError] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [submitionText, useSubmitionText] = useState("");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  async function handleSubmit() {
    var ready = true;
    if (!email) {
      setEmailError("enter a email");
      ready = false;
    }
    else if (!isValidEmail(email)) {
      setEmailError("enter a valid email");
      ready = false;
    } else {
      setEmailError("");
    }

    if (!question) {
      setQuestionError("enter a question");
      ready = false;
    } else {
      setQuestionError("");
    }
    if (ready) {
      try {
        const test = await addDoc(collection(db, "questions"), {
          email: email,
          question: question,
          dateAndTime: Date().toLocaleString()
        });
        emailError("");
        questionError("");
        submitionText("Thanks for submiting a question we will get back to you soon!");
        console.log("it worked");
      } catch (e) {
        console.log(e);
      }

    }
  }
  return (

    <div className={`form-question-container ${props.rootClassName} `}>
      {!props.fromGetStarted && <h1 className="form-question-text">{props.heading}</h1>}
      <FormLine
        onChange={(val) => { setEmail(val.target.value) }}
        text="Email"
        rootClassName="form-line-root-class-name6"
        textinput_placeholder="email"
        className=""
        error={emailError}
        value={email}
      ></FormLine>
      <span className="form-question-text1">{props.text}</span>
      <textarea
        onChange={(val) => { setQuestion(val.target.value) }}
        placeholder={props.textarea_placeholder}
        className="form-question-textarea textarea"
        value={question}
      ></textarea>
      {questionError && <span style={{
        color: '#cc0000',
        alignSelf: 'flex-start'
      }}>{questionError}</span>}
      {submitionText && <span style={{
        color: '#000000',
        alignSelf: 'flex-center'
      }}>{submitionText}</span>}
      <div className="form-question-container1">
        <SolidButton
          submit={() => handleSubmit()}
          button="Submit"
          rootClassName="solid-button-root-class-name4"
          className=""
        ></SolidButton>
      </div>
    </div>


  )

}

FormQuestion.defaultProps = {
  text: 'Text',
  rootClassName: 'form-question-heading',
  textarea_placeholder: 'placeholder',
  heading: 'Get started.',
}

FormQuestion.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  heading: PropTypes.string,
}

export default FormQuestion
