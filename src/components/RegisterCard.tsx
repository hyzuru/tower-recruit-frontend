"use client"

import React, { useState, useEffect } from 'react'
import './registerCard.css'

export default function RegisterCard() {

  const [ccnum, setCcnum] = useState("")
  const [cvc, setCvc] = useState("")
  const [expiryMonth, setExpiryMonth] = useState("")
  const [expiryYear, setExpiryYear] = useState("")
  const [expiry, setExpiry] = useState("")

  useEffect(() => {
    if (expiryYear !== "" && expiryMonth !== "") {
      setExpiry(expiryMonth +  "/" + expiryYear)
    } else {
      return
    }
  }, [expiryMonth,expiryYear])

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Credit Card Number: ", ccnum)
    console.log("CVC: ", cvc)
    console.log("Expiry Month: ", expiryMonth)
    console.log("Expiry Year: ", expiryYear)
    console.log("Expiry Date: ", expiry)
    

    // check to check if hasnt expired (expiry date is later than current date)
    const currentDate = new Date()
    const expiryDate = new Date(parseFloat(expiryYear), parseFloat(expiryMonth) - 1)
    console.log(expiryDate)
    console.log(currentDate)
    if (expiryDate > currentDate) {
      console.log( "expiry date is valid" )
    }

  }

  return (
    <>
      <div className="credit-card">
        <p className="text">Enter your credit card details: </p>

        <form onSubmit={handleSubmit}>

          <div className="form-item item-cc">
            <label htmlFor="creditCardNumber">Card Number</label>
            <input type="tel"
              inputMode="numeric" 
              maxLength={16} 
              aria-label="Credit Card Number" 
              id="creditCardNumber" 
              name="creditCardNumber" 
              placeholder="Credit Card Number"
              pattern="[0-9]{15,16}"
              onChange={(e) => setCcnum(e.target.value)}
              required />
          </div>

          <div className="input-row">

            <div className="form-item item-cvc">
              <label htmlFor="cvc">CVC</label>
              <input type="tel" inputMode="numeric" name="cvc" maxLength={4} aria-label="CVC" id="cvc"
                placeholder="CVC"
                required pattern="[0-9]{3,4}"
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>

            <fieldset className="form-item item-expiry">
              <legend>Expiry Date</legend>
              <label>Expiry Date</label>
              <div className="horizontal-stack">
                <select 
                  name="expiry-month" 
                  id="expiry-month" 
                  aria-label="Expiry Month"
                  placeholder="MM"
                  defaultValue=""
                  onChange={(e) => setExpiryMonth(e.target.value)}
                  required >
                    <option value="" disabled hidden>MM</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>

                  <select 
                    name="expiry-year" 
                    id="expiry-year"
                    aria-label="Expiry Year"
                    placeholder="YYYY"
                    defaultValue=""
                    onChange={(e) => setExpiryYear(e.target.value)}
                    required>
                      <option value="" disabled hidden>YYYY</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                    </select>
              </div>
              
            </fieldset>

          </div>

          <button type="submit">Submit</button>
        </form>

      </div>
    </>
  )
}
