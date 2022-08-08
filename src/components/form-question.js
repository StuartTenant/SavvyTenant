import React from 'react'

import PropTypes from 'prop-types'

import FormLine from './form-line'
import FormLine2in from './form-line2in'
import SolidButton from './solid-button'
import './form-question.css'
import { Component } from 'react/cjs/react.production.min'
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "../firebase"

class FormQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailError: '',
      questionError: '',
      email: '',
      question: '',
      submitionText: '',

    }
  }


  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  async handleSubmit() {
    var ready = true;
    if (!this.state.email) {
      this.setState({ emailError: "enter a email" });
      ready = false;
    }
    else if (!this.isValidEmail(this.state.email)) {
      this.setState({ emailError: "enter a valid email" });
      ready = false;
    } else {
      this.setState({ emailError: '' });
    }

    if (!this.state.question) {
      this.setState({ questionError: "enter a question" });
      ready = false;
    } else {
      this.setState({ questionError: "" });
    }
    if (ready) {
      try {
        const test = await addDoc(collection(db, "questions"), {
          email: this.state.email,
          question: this.state.question,
          dateAndTime: Date().toLocaleString()
        });
        this.setState({ email: "", question: "", submitionText: "Thanks for submiting a question we will get back to you soon!" })
        console.log("it worked");
      } catch (e) {
        console.log(e);
      }

    }
  }

  render() {
    return (

      <div className={`form-question-container ${this.props.rootClassName} `}>
        {!this.props.fromGetStarted && <h1 className="form-question-text">{this.props.heading}</h1>}
        <FormLine
          onChange={(val) => { this.setState({ email: val.target.value }) }}
          text="Email"
          rootClassName="form-line-root-class-name6"
          textinput_placeholder="email"
          className=""
          error={this.state.emailError}
          value={this.state.email}
        ></FormLine>
        <span className="form-question-text1">{this.props.text}</span>
        <textarea
          onChange={(val) => { this.setState({ question: val.target.value }) }}
          placeholder={this.props.textarea_placeholder}
          className="form-question-textarea textarea"
          value={this.state.question}
        ></textarea>
        {this.state.questionError && <span style={{
          color: '#cc0000',
          alignSelf: 'flex-start'
        }}>{this.state.questionError}</span>}
        {this.state.submitionText && <span style={{
          color: '#000000',
          alignSelf: 'flex-center'
        }}>{this.state.submitionText}</span>}
        <div className="form-question-container1">
          <SolidButton
            submit={() => this.handleSubmit()}
            button="Submit"
            rootClassName="solid-button-root-class-name4"
            className=""
          ></SolidButton>
        </div>
      </div>


    )
  }
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
