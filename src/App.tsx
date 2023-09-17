import React from 'react'
import logo from './logo.svg'
import './App.css'

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a <code>src/starter.ts</code>
        </p>
        <p>
          With{' '}
          <strong>
            <i>Typescript, jest, eslint, prettier, husky</i>
          </strong>{' '}
          full configured
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
