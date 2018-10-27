import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom"
import './App.css'
import ReactGA from 'react-ga'

import Home from './_components/Home/home'

ReactGA.initialize('UA-128252203-1', {
  debug: process.env.NODE_ENV === 'development'
});

class App extends Component {
  render() {
    return (
    <div className="App">
      <Router>
          <Route exact path="/" component={Home} />
          {/* <Route path="/portfolio/:itemName" component={Item} /> */}
        </Router>
      </div>
    )
  }
}

export default App;
