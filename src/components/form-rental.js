import PropTypes from 'prop-types'

import FormLine from './form-line'
import FormLine2in from './form-line2in'
import SolidButton2Light from './solid-button2light'
import './form-rental.css'
import { Component } from 'react/cjs/react.production.min'
import React, { useState } from 'react';
import FormQuestion from './form-question'
import './form-line.css'
import ButtonText from './button-text'
import DatePicker from 'react-date-picker';
import map from '../images/torontoMap.jpeg'
import './form-line.css'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase"



function FormRental(props) {

  const [formFlow, setFormFlow] = useState(0);
  const [selectValue, setSelectValue] = useState("rent");
  const [question, setQuestion] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [rent, setRent] = useState(0);
  const [rentError, setRentError] = useState("");
  const [rooms, setRooms] = useState(0);
  const [roomsError, setRoomsError] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [pets, setPets] = useState(false);
  const [etobicoke, setEtobicoke] = useState(false);
  const [westEnd, setWestEnd] = useState(false);
  const [midwest, setMidwest] = useState(false);
  const [beaches, setBeaches] = useState(false);
  const [york, setYork] = useState(false);
  const [northYork, setNorthYork] = useState(false);
  const [scarborough, setScarborough] = useState(false);
  const [value, onChange] = useState(new Date());


  async function handdleNext() {
    if (selectValue == "rent" && formFlow != 2 && checkAllFormValid()) {
      setFormFlow((currentFormFlow) => currentFormFlow + 1);
    } else if (selectValue != "rent" && formFlow == 0) {
      const test = await addDoc(collection(db, "questions"), {
        question: question,
      });
      console.log("it worked");
    }
    else if (formFlow == 2) {
      try {
        let anyAreasSelected = etobicoke || westEnd || midwest || york || northYork || scarborough;
        await addDoc(collection(db, "entries"), {
          email: email,
          firstName: first,
          lastName: last,
          maxRent: rent,
          bedrooms: rooms,
          phoneNumber: phoneNumber,
          pets: pets,
          anyAreasSelected: anyAreasSelected,
          areas: {
            etobicoke: etobicoke,
            westEnd: westEnd,
            midwest: midwest,
            york: york,
            northYork: northYork,
            scarborough: scarborough
          }
        });
        setFormFlow((currentFormFlow) => currentFormFlow + 1);
      } catch (e) {
        console.log(e);
      }

    }
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function checkAllFormValid() {
    var flag = true;
    if (!email) {
      setEmailError("enter a email");
      flag = false;
    }
    else if (!isValidEmail(email)) {
      setEmailError("enter a valid email");
      flag = false;
    } else {
      setEmailError("");
    }
    return flag;
  }


  return (<div className={`form-rental-container ${props.rootClassName} `}>
    <h1 className="form-rental-text">{formFlow != 2 ? props.heading : "Select all arease you are interasted in"}</h1>
    {formFlow == 0 &&
      <FormLine
        onChange={(val) => setEmail(val.target.value)}
        text="Email"
        error={emailError}
        rootClassName="form-line-root-class-name"
        textinput_placeholder="email"
        className=""
      ></FormLine>
    }
    {formFlow == 0 &&
      <FormLine2in
        firstOnChange={(val) => setFirst(val.target.value)}
        secoundOnChange={(val) => setLast(val.target.value)}
        text="Name"
        rootClassName="form-line2in-root-class-name"
        textinput_placeholder="first name"
        textinput_placeholder1="last name"
        className=""
      ></FormLine2in>
    }
    {formFlow == 0 &&
      <span className="form-rental-text1">{props.text}</span>
    }
    {formFlow == 0 &&
      <select value={selectValue} className="form-rental-select" onChange={(e) => setSelectValue(e.target.value)}>
        <option value="rent" className="">
          I&apos;m looking to find a rental
        </option>
        <option value="inquiry" className="">
          Have a Question?
        </option>
      </select>
    }
    {(formFlow == 0 && selectValue == "rent") &&
      <FormLine
        numbers={true}
        onChange={(val) => setRent(val.target.value)}
        error={rentError}
        text="Max Price"
        rootClassName="form-line-root-class-name1"
        textinput_placeholder="maximum monthly rent"
        className=""
      ></FormLine>
    }
    {(formFlow == 0 && selectValue == "rent") &&
      <FormLine
        numbers={true}
        onChange={(val) => setRooms(val.target.value)}
        error={roomsError}
        text="Bedrooms"
        rootClassName="form-line-root-class-name2"
        textinput_placeholder="# bedrooms"
        className=""
      ></FormLine>
    }
    {formFlow == 1 &&
      <div>
        <div>
          <span className="form-line-text content">Enter your date of birth</span>
        </div>
        <div>

          <DatePicker value={value} />
        </div>
      </div>
    }
    {formFlow == 1 &&
      <FormLine
        numbers={true}
        onChange={(val) => setPhoneNumber(val.target.value)}
        text="Phone Number"
        rootClassName="form-line-root-class-name2"
        textinput_placeholder="(xxx) xxx-xxxx"
        className=""
      ></FormLine>
    }
    {formFlow == 1 &&
      <ButtonText checked={() => { setPets(!pets) }} text='Pets'></ButtonText>
    }
    {(selectValue != "rent" && formFlow == 0) &&
      <textarea
        placeholder="General Inquires"
        className="form-question-textarea textarea"
        onChange={(e) => setQuestion(e.target.value)}
      ></textarea>
    }
    {formFlow == 2 &&
      <img style={{ width: '50%' }} src={map}></img>
    }

    {formFlow == 2 &&
      <div style={{ alignItems: 'left' }}>
        <div style={{ justifyContent: 'flex-start' }}>
          <ButtonText text='Etobicoke' checked={() => { setEtobicoke(!etobicoke) }} ></ButtonText>
          <ButtonText text='West End' checked={() => { setWestEnd(!westEnd) }}></ButtonText>
          <ButtonText text='Midwest' checked={() => { setMidwest(!midwest) }}></ButtonText>
        </div>

        <div style={{ justifyContent: 'flex-start' }}>
          <ButtonText text='Beaches / Danforth' checked={() => { setBeaches(!beaches) }}></ButtonText>
          <ButtonText text='York' checked={() => { setYork(!york) }}></ButtonText>
          <ButtonText text='North York' checked={() => { setNorthYork(!northYork) }}></ButtonText>
          <ButtonText text='Scarborough' checked={() => { setScarborough(!scarborough) }}></ButtonText>
        </div>
      </div>
    }






    <div className="form-rental-container1">
      <SolidButton2Light
        next={handdleNext}
        button={selectValue == "rent" && formFlow != 2 ? "Next" : "Submit"}
        rootClassName="solid-button2light-root-class-name1"
        className=""

      ></SolidButton2Light>
    </div>
  </div>);
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
