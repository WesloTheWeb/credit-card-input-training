/*
Credit Card Input

Description:
Implement a credit card input that accepts numerical inputs between length
12 and 16. See acceptance criteria for additional requirements.

Acceptance criteria:
* only accept values of length 12 - 16 inclusive **
* cannot type more than 16 characters **
* can only type numbers **

APP.JS
- source of truth of the state for the field 
- sanitize the string numbers only and min of 12
and max of 16 characters
- 

*/

// abcd123
// 1234-1234-1234-1234

import React, { useState, useEffect } from "react";

export default function App() {
    const [creditCardNumber, setCreditCardNumber] = useState("");

    const handleChange = (evt) => {
        let number = evt.target.value;
        // Equivalent to [^0-9]
        const regEx = /\D/g;

        /*
        let sanitizedNumber = ""
        for (const c in number) {
          if (c >= "0" && c <= "9") {
            sanitizedNumber += c
          }
        }
        */

        setCreditCardNumber(number.replaceAll(regEx, ""));
        console.log(creditCardNumber);
    };

    return (
        <>
            <input
                type="text"
                minLength={12}
                maxLength={16}
                onChange={handleChange}
                value={creditCardNumber}
            />
        </>
    );
}
