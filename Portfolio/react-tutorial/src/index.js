import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <h4>This is a showcase for react</h4>
        <p>I will showcase a couple of html tags</p>
        <ul>
          <li>This is list</li>
        </ul>
        <main> This is the <b>main tag</b></main>
        <footer>This is the <b>footer tag</b></footer>
      </div>
      

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))