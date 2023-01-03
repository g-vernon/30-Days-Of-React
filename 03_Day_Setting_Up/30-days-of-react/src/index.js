// index.js
import React from 'react'
import ReactDOM, { unstable_batchedUpdates } from 'react-dom'
import reactImage from './images/react_logo.png'
// To get the root element from the HTML document

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'George',
  lastName: 'Vernon',
}
const date = 'January 3, 2022'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1999
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

// React image
const reactLogo = (
  <div>
    <img src = {reactImage} alt='react logo'/>
  </div>
)

const subscribe = (
  <div className = 'subscribe-wrapper'>
    <h3>SUBSCRIBE</h3>
    <h4>Sign up with your email address to receive news and updates.</h4>
    <form>
      <label>
        <input type = "text" name = "firstName" placeholder='First Name' className = 'form-field' />
      </label>
      <label>
        <input type = "text" name = "secondName" placeholder = 'Second Name' className = 'form-field'/>
      </label>
      <label>
        <input type = "email" name = "email" placeholder = 'Email' className = 'form-field'/>
      </label>
      <input className = "block-button" type="submit" value="submit"/>
    </form>
  </div>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {subscribe}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)