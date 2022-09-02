import { React, useState } from "react";
// import CreditCardInput from "./CreditCardInput";
import "./styles.css";

/** APPROACH:
(Focus on functionality)
- CreditCardInput
   - Input box
   - form / button (can do luhn check) 

- App (global)
  - State
  - source of truth 
  - display the credit card number
  - pass the state down
  - prop will be passed to CreditCardInput that will 
  update the state 
 */

export default function App() {
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [errors, setErrors] = useState([]);

  // useCallback
  const handleChange = (evt) => {
    const number = evt.target.value;
    // todo: figure out how to remove last char
    const lastChar = number[number.length - 1];
    if (isNaN(parseInt(lastChar))) return;
    setCreditCardNumber(number);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // todo: check if < 12 char, if so render err message
    const errs = [];
    if (creditCardNumber.length < 12) {
      errs.push('too short');
    }
    // todo: check if luhn check fails, render err message
    if (luhnCheck(creditCardNumber)) {
      errs.push('failed luhn check')
    }
    setErrors(errs);
  };

  function luhnCheck(number) {
    return true;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={creditCardNumber} onChange={handleChange} maxLength={16} />
      <button type="submit">
        Submit
      </button>
      {errors.map(err => <div>{err}</div>)}
      {/* {error ? <p> too short </p> : null} */}
    </form>
  );

  /*#########################
  OLD ATTEMPT
  ###########################*/
  // const handleCreditCardInput = (evnt) => {
  //   setCreditCardNumber(evnt.target.value);
  //   console.log(creditCardNumber);
  // };

  // const formatCreditCardNumber = (number) => {
  //   // limit to 16
  //   // console.log(typeof number)
  //   // return number.slice(0, 16);
  // };

  // const handleSubmitCreditCard = (creditCard) => {

  // }

  // return (
  //   <div className="App">
  //     <h1>Credit Card Input</h1>
  //     <CreditCardInput
  //       handleCreditCardInput={handleCreditCardInput}
  //       creditCardNum={creditCardNumber}
  //     />
  //   </div>
  // );
}
