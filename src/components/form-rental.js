import PropTypes from 'prop-types'

import FormLine from './form-line'
import FormLine2in from './form-line2in'
import SolidButton2Light from './solid-button2light'
import './form-rental.css'
import { Component } from 'react/cjs/react.production.min'
import React from 'react';
import FormQuestion from './form-question'
import ButtonText from './button-text'
import map from '../images/torontoMap.jpeg'
import './form-line.css'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase"



class FormRental extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formFlow: 0,
      rental: true,
      selectValue: "rent",
      question: '',
      first: '',
      last: '',
      email: '',
      price: 0,
      rooms: 0,
      birthDate: "",
      phoneNumber: "",
      pets: false,
      etobicoke: false,
      westEnd: false,
      midwest: false,
      beaches: false,
      York: false,
      northYork: false,
      scarborough: false
    }
  }


  async handdleNext() {
    if (this.state.selectValue == "rent" && this.state.formFlow != 2) {
      this.setState({ formFlow: this.state.formFlow + 1 });
    } else if (this.state.selectValue != "rent" && this.state.formFlow == 0) {
      const test = await addDoc(collection(db, "questions"), {
        question: this.state.question,
      });
      console.log("it worked");
    }

  }

  selectValueChange(e) {
    console.log("changed");
    console.log(e.target);
    this.setState({ selectValue: e.target.value });
  }

  render() {

    return (<div className={`form-rental-container ${this.props.rootClassName} `}>
      <h1 className="form-rental-text">{this.state.formFlow != 2 ? this.props.heading : "Select all arease you are interasted in"}</h1>
      {this.state.formFlow == 0 &&
        <FormLine
          text="Email"
          rootClassName="form-line-root-class-name"
          textinput_placeholder="email"
          className=""
        ></FormLine>
      }
      {this.state.formFlow == 0 &&
        <FormLine2in
          text="Name"
          rootClassName="form-line2in-root-class-name"
          textinput_placeholder="first name"
          textinput_placeholder1="last name"
          className=""
        ></FormLine2in>
      }
      {this.state.formFlow == 0 &&
        <span className="form-rental-text1">{this.props.text}</span>
      }
      {this.state.formFlow == 0 &&
        <select value={this.selectValue} className="form-rental-select" onChange={(e) => this.selectValueChange(e)}>
          <option value="rent" className="">
            I&apos;m looking to find a rental
          </option>
          <option value="inquiry" className="">
            Have a Question?
          </option>
        </select>
      }
      {(this.state.formFlow == 0 && this.state.selectValue == "rent") &&
        <FormLine
          text="Max Price"
          rootClassName="form-line-root-class-name1"
          textinput_placeholder="maximum monthly rent"
          className=""
        ></FormLine>
      }
      {(this.state.formFlow == 0 && this.state.selectValue == "rent") &&
        <FormLine
          text="Bedrooms"
          rootClassName="form-line-root-class-name2"
          textinput_placeholder="# bedrooms"
          className=""
        ></FormLine>
      }
      {this.state.formFlow == 1 &&
        <FormLine
          text="Date of Birth"
          rootClassName="form-line-root-class-name2"
          textinput_placeholder="dd-mm-yyyy"
          className=""
        ></FormLine>
      }
      {this.state.formFlow == 1 &&
        <FormLine
          text="Phone Number"
          rootClassName="form-line-root-class-name2"
          textinput_placeholder="(xxx) xxx-xxxx"
          className=""
        ></FormLine>
      }
      {this.state.formFlow == 1 &&
        <ButtonText checked={(val) => { this.setState({ pets: val }) }} text='Pets'></ButtonText>
      }
      {(this.state.selectValue != "rent" && this.state.formFlow == 0) &&
        <textarea
          placeholder="General Inquires"
          className="form-question-textarea textarea"
          onChange={(e) => this.setState({ question: e.target.value })}
        ></textarea>
      }
      {this.state.formFlow == 2 &&
        <img style={{ width: '50%' }} src={map}></img>
      }

      {this.state.formFlow == 2 &&
        <div style={{ alignItems: 'left' }}>
          <div style={{ justifyContent: 'flex-start' }}>
            <ButtonText text='Etobicoke' checked={(val) => { this.setState({ etobicoke: val }) }} ></ButtonText>
            <ButtonText text='West End' checked={(val) => { this.setState({ westEnd: val }) }}></ButtonText>
            <ButtonText text='Midwest' checked={(val) => { this.setState({ midwest: val }) }}></ButtonText>
          </div>

          <div style={{ justifyContent: 'flex-start' }}>
            <ButtonText text='Beaches / Danforth' checked={(val) => { this.setState({ beaches: val }) }}></ButtonText>
            <ButtonText text='York' checked={(val) => { this.setState({ york: val }) }}></ButtonText>
            <ButtonText text='North York' checked={(val) => { this.setState({ northYork: val }) }}></ButtonText>
            <ButtonText text='Scarborough' checked={(val) => { this.setState({ scarborough: val }) }}></ButtonText>
          </div>
        </div>
      }






      <div className="form-rental-container1">
        <SolidButton2Light
          next={() => this.handdleNext()}
          button={this.state.selectValue == "rent" && this.state.formFlow != 2 ? "Next" : "Submit"}
          rootClassName="solid-button2light-root-class-name1"
          className=""

        ></SolidButton2Light>
      </div>
    </div>);

  }
}

FormRental.defaultProps = {
  text: 'What would you like us to help with?',
  rootClassName: '',
  heading: 'Get started.',
}

FormRental.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default FormRental
