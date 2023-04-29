// Form section in the webpage.

import "./FormStyles.css";

import React from 'react'

function Form() {
  return (
    <div className="form">
        <form>
            <label>Your Name :-</label>
            <input type="text" placeholder="Enter your name....." required></input>
            <label>Your E-mail :-</label>
            <input type="email" value="@gmail.com" required></input>
            <label>Your Mobile.no :-</label>
            <input type="number" required></input>
            <label>Your Message :-</label>
            <textarea rows="7" placeholder="Your message....." required></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form