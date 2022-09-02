import React from "react";

const CreditCardInput = ({ creditCardNum, handleCreditCardInput }) => {
  
  const sanitizeInput = (input) => {
    if (input.target.value === '+' || input.target.value === '-' ) {
      return '';
    }
  }

  const ccInput = (
    <input
    type="number"
    value={creditCardNum}
    onChange={handleCreditCardInput}
    maxLength="5"
  />
  )
  
  return (
    <form>
      <input
        type="number"
        value={creditCardNum}
        onChange={handleCreditCardInput}
        maxLength="5"
      />
      <button>Submit</button>
    </form>
  );
};

export default CreditCardInput;
